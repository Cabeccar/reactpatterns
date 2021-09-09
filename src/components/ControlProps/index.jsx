import React, {useState} from 'react';

import LikeButton from './LikeButton';
import ControlledLikeButton from './ControlledLikeButton';

 const ControlProps = () => {
  const [counter, setCounter] = useState(0);

  const handleUpdateCounter = () => {
    setCounter(counter + 5);
  };

  const handleChange = ({target: {value}}) => {
    if (value === 'like') {
      setCounter(counter + 1);
    }
  };

  return (
    <>
    <h2>Control Props</h2>
    <br />
    <br />

    <br />
    <h3>No Control Props</h3>
    <p>What can we do to modify likes ?</p>
    <br />
    <br />
      <LikeButton cb={likes => likes + 100} />
      <br />
    <br />
    <hr />
    <br />
    <br />
    <h3> Control Props</h3>
    <p>Add extra functionality with properties and methods sent in props</p>
    <br />
      <input type="text" onChange={handleChange} />
      <p>if you type "like" the counter will change</p>
    <br />
      <ControlledLikeButton value={counter} setValue={handleUpdateCounter} />
    </>
  );
};

export default ControlProps;