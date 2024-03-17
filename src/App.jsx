import React from "react";
import { createRoot} from "react-dom";

const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h2", null, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(pet, {
      animal: "Bird",
      name: "Pepper",
      breed: "cockato",
    }),
    React.createElement(pet, { animal: "Cat", name: "Doink", breed: "Mixed" }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
