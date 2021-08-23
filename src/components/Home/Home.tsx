import React, { useEffect } from "react";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Mesh,
  Color3,
  Color4,
  CubeTexture,
  Texture,
  StandardMaterial,
  SceneLoader,
  ParticleHelper,
  BoxParticleEmitter,
  IParticleEmitterType,
} from "@babylonjs/core";
import SceneComponent from "babylonjs-hook"; // if you install 's-hook' NPM.
import { ShadowGenerator, SpotLight } from "@babylonjs/core";
import { ArcRotateCamera } from "@babylonjs/core";

const onSceneReady = (scene: Scene) => {
  const canvas = scene.getEngine().getRenderingCanvas();
  const TEXTURE_FOLDER = "https://www.s-playground.com/textures/";
  const showFog = true;

  if (showFog) {
    scene.fogMode = Scene.FOGMODE_LINEAR;
    scene.fogColor = Color3.Black();
    scene.fogDensity = 0.01;
    scene.fogStart = 20.0;
    scene.fogEnd = 100.0;
  }

  // Skybox
  var skybox = MeshBuilder.CreateBox("skyBox", { size: 90.0 }, scene);
  var skyboxMaterial = new StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  var files = [
    TEXTURE_FOLDER + "Space/space_left.jpg",
    TEXTURE_FOLDER + "Space/space_up.jpg",
    TEXTURE_FOLDER + "Space/space_front.jpg",
    TEXTURE_FOLDER + "Space/space_right.jpg",
    TEXTURE_FOLDER + "Space/space_down.jpg",
    TEXTURE_FOLDER + "Space/space_back.jpg",
  ];
  skyboxMaterial.reflectionTexture = CubeTexture.CreateFromImages(files, scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
  skyboxMaterial.disableLighting = true;
  skybox.material = skyboxMaterial;

  //Lights
  const spotLight = new SpotLight(
    "spotLight",
    new Vector3(0, 15, 0),
    new Vector3(0, -1, 0),
    Math.PI,
    1,
    scene
  );
  spotLight.range = 50;
  spotLight.diffuse = Color3.FromHexString("#e25822");
  spotLight.diffuse = Color3.FromHexString("#F96229"); //(1, 1, 1);
  spotLight.specular = Color3.FromHexString("#FCE13D");

  const shadowGenerator = new ShadowGenerator(2045, spotLight);
  shadowGenerator.darkness = 0.25;
  spotLight.intensity = 5;

  const ambientLight = new HemisphericLight(
    "ambientLight",
    new Vector3(0, -1, 0),
    scene
  );
  ambientLight.diffuse = Color3.FromHexString("#F96229"); //(1, 1, 1);
  ambientLight.specular = Color3.FromHexString("#FCE13D");
  ambientLight.intensity = 5;

  //Camera
  const camera = new ArcRotateCamera("camera", 0, 1, 50, Vector3.Zero(), scene);
  camera.setTarget(new Vector3(0, 0, 0));
  camera.setPosition(new Vector3(20, 20, 20));
  camera.attachControl(canvas, true);

  // Limit camera radius
  camera.lowerRadiusLimit = 2;
  camera.upperRadiusLimit = 40;

  // Limit camera rotation
  // camera.lowerAlphaLimit = -Math.PI / 2;
  // camera.upperAlphaLimit = Math.PI / 2;

  camera.lowerBetaLimit = Math.PI / 10;
  camera.upperBetaLimit = Math.PI * 0.75;

  //Ground
  const groundMaterial = new StandardMaterial("groundMaterial", scene);
  const diffuseTexture: Texture = new Texture(
    TEXTURE_FOLDER + "grass.png",
    scene
  );
  diffuseTexture.uScale = 5;
  diffuseTexture.vScale = 7;
  const bumpTexture = new Texture(TEXTURE_FOLDER + "rockn.png", scene);
  bumpTexture.uScale = 5;
  bumpTexture.vScale = 7;
  groundMaterial.diffuseTexture = diffuseTexture;
  groundMaterial.bumpTexture = bumpTexture;

  const ground = Mesh.CreateGroundFromHeightMap(
    "ground",
    TEXTURE_FOLDER + "heightMapTriPlanar.png",
    100,
    100,
    50,
    -5,
    0,
    scene,
    false
  );
  ground.material = groundMaterial;
  ground.position = new Vector3(3, -0.7, -4);
  // ground.scaling = new Vector3(20, 1, 20);
  ground.receiveShadows = true;
  shadowGenerator.getShadowMap()?.renderList?.push(ground);

  //Meshes
  SceneLoader.ImportMesh(
    "",
    "https://assets.codepen.io/40429/",
    "campfire_FLATTENED_20201019_1.glb",
    scene,
    (newMeshes, particleSystems, skeletons) => {
      newMeshes[0].scaling = new Vector3(0.5, 0.5, 0.5);
      newMeshes.forEach((mesh) => {
        shadowGenerator.getShadowMap()?.renderList?.push(mesh);
        // spotLight.includedOnlyMeshes.push(mesh)
      });
    }
  );

  //Particle systems

  const emitterMaterial = new StandardMaterial("mat1", scene);
  emitterMaterial.diffuseColor = new Color3(1, 1, 0);
  emitterMaterial.alpha = 0;

  const fireEmitter = MeshBuilder.CreateSphere(
    "fireEmitter",
    { diameter: 0.5 },
    scene
  );
  fireEmitter.position.y = 3.5;
  fireEmitter.material = emitterMaterial;

  // Fire!
  ParticleHelper.CreateAsync("fire", scene).then((set: any) => {
    set.start();
    for (var i = 0; i < set.systems.length; i++) {
      var particleSystem = set.systems[i];
      particleSystem.emitter = fireEmitter;
      particleSystem.emitRate = 10;
    }
  });

  // Smoke!
  const smokeEmitter = fireEmitter.clone("smokeEmitter");
  smokeEmitter.position.y = 5;
  smokeEmitter.material = emitterMaterial;

  ParticleHelper.CreateAsync("smoke", scene).then((set) => {
    set.start();
    //console.log(set)
    for (let i = 0; i < set.systems.length; i++) {
      let particleSystem: any = set.systems[i];
      particleSystem.emitter = smokeEmitter;
      particleSystem.gravity = new Vector3(0, 1, 1);
      // particleSystem.emitRate = 5;
      particleSystem.direction1 = new Vector3(
        0,
        smokeEmitter.position.y - 10,
        0
      );
      particleSystem.direction2 = new Vector3(
        0,
        smokeEmitter.position.y - 5,
        0
      );
      particleSystem.minEmitBox = new Vector3(1, 5, 1);
      particleSystem.maxEmitBox = new Vector3(-1, 2, 1);
    }
  });

  scene.registerBeforeRender(function () {
    spotLight.intensity = 2 * Math.cos(Math.random()) + 1.1;
    camera.alpha += 0.001 * scene.getAnimationRatio();
  });
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: Scene) => {
  if (scene) scene.render();
};

const Home = () => {
  useEffect(() => {
    const domCanvas = document.getElementById("my-canvas");
    if (domCanvas) {
      domCanvas.style.height = "40vh";
      domCanvas.style.width = "40vw";
    }
  }, []);
  return (
    <div>
      <h1>home</h1>
      <p>This is just for demo purposes, don't use in production!!!!</p>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
      />
    </div>
  );
};
export default Home;
