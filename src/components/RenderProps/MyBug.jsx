import React, { useState } from "react";

const MyBug = () => {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error(":(");
  }

  return <button onClick={handleCrash}>Throw Error</button>;
};
export default MyBug;
