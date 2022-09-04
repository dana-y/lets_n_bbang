/** 노드에 속성을 붙여주는 함수 */
const addAttr = (node, attrArr) => {
  const targetNode = document.querySelector(node);
  for (let [key, value] of attrArr) {
    targetNode.setAttribute(key, value);
  }
};

export default addAttr;
