import React, { useState, useEffect } from "react";

function UpdateTitleComponent() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(count + 1);
    document.title = `Count (${count})`;
  }, [count]);

  //return <button onClick={() => setCount(count + 1)}>Count ({count})</button>;
  return <button onClick={useEffect()}>Count ({count})</button>;
}

export default UpdateTitleComponent;
