const addInputNode = (parent, type, required, className, placeholder) => {
  const parentNode = document.querySelector(parent);
  const element = document.createElement("input");
  element.classList.add(className);
  element.setAttribute("type", type);
  element.setAttribute("require", required);
  element.setAttribute("className", className);
  element.setAttribute("placeholder", placeholder);
  parentNode.appendChild(element);
};

export default addInputNode;
