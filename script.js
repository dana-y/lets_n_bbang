import addAttr from "./utils/nodes/addAttr.js";
import addInputNode from "./utils/nodes/addInputNode.js";
import addNode from "./utils/nodes/addNode.js";
import addText from "./utils/nodes/addText.js";

let inputCount = 0;

const addInput = () => {
  addNode("div", ".addInputRoot", `inputName${inputCount}`);

  addInputNode(
    `.inputName${inputCount}`,
    "text",
    true,
    "inputMoney",
    "결제 한 금액"
  );
  addInputNode(`.inputName${inputCount}`, "text", false, "inputMemo", "메모");
  inputCount++;
  console.log(inputCount);
};

const myAddInputBtn = document.getElementById("moreInput");
console.log(myAddInputBtn);
myAddInputBtn.addEventListener("click", () => addInput());
