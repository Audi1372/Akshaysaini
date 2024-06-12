const h1 = React.createElement(
  "h1",
  { id: "heading", className: "header" },
  "hello lakshmi"
);

const childDiv = React.createElement("div", { id: "child" }, h1);
const parentDiv = React.createElement("div", { id: "parent" }, childDiv);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
