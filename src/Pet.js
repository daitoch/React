import React from "react";
export const Pet = (prop) => {
  /* return React.createElement("div", {}, [
    React.createElement("h1", {}, prop.name),
    React.createElement("h1", {}, prop.animal),
    React.createElement("h1", {}, prop.breed),
  ]); */

  return (
    <div>
      <h1>{prop.name}</h1>
      <h2>{prop.animal}</h2>
      <h2>{prop.breed}</h2>
    </div>
  );
};
