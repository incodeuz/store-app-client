import React, { useState } from "react";

const Test = () => {
  const [val, setVal] = useState({
    inp1: "",
    inp2: "",
    inp3: "",
  });

  console.log(val);
  return (
    <>
      <input
        id="inp1"
        value={val.inp1}
        onChange={(e) =>
          setVal((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
          }))
        }
        type="text"
        placeholder="enter : "
      />
      <input
        id="inp2"
        value={val.inp2}
        onChange={(e) =>
          setVal((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
          }))
        }
        type="text"
        placeholder="enter : "
      />
      <input
        id="inp3"
        value={val.inp3}
        onChange={(e) =>
          setVal((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
          }))
        }
        type="text"
        placeholder="enter : "
      />
    </>
  );
};

export default Test;
