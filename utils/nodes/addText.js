/** 노드에 텍스트를 추가해주는 함수 */
const addText = (node, text) => {
  document.querySelector(node).innerText = text;
};

export default addText;
