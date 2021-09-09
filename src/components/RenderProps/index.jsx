import ErrorBoundary from './ErrorBoundary';
import ErrorBoundaryRenderProp from './ErrorBoundaryRenderProp';
import MyBug from './MyBug';

 const RenderProps = () => (
    <>
    <h2>Render Props</h2>
    <br />
    <br />
    <hr />
    <br />
    <h3>No Render Props</h3>
    <br />
    <br />
      <ErrorBoundary>
        <MyBug />
      </ErrorBoundary>
      <br />
    <br />
    <hr />
    <br />
    <h3>Render Props</h3>
    <br />
    <br />
      <ErrorBoundaryRenderProp render={error => <p>{`Ups D: ${error.message}`}</p>}>
        <MyBug />
      </ErrorBoundaryRenderProp>
      <br />
    <br />
    <hr />
    <br />
    <h3>Render Props Default Render </h3>
    <br />
    <br />
      <ErrorBoundaryRenderProp>
        <MyBug />
      </ErrorBoundaryRenderProp>


    </>
  );

  export default RenderProps;