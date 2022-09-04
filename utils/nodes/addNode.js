/**tagname, parent, className을 입력하면 노드를 만들어주는 함수 */
const addNode = (tagname, parent, className) => {
  const parentNode = document.querySelector(parent);
  const element = document.createElement(tagname);
  element.classList.add(className);
  parentNode.appendChild(element);
};

export default addNode;
