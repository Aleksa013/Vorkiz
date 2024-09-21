import { getButton } from "./components/buttons.js";
import { getAllForms } from "./components/clientDetailsForm.js";
import * as formDesc from "./data/formsInfo.json";

const body = document.querySelector("body");
const container = document.createElement("div");
const wrapperButtons = document.createElement("div");
container.classList.add("container");
wrapperButtons.className = "wrapperButtons";
body.append(container);

getAllForms(formDesc, container);
getButton("Create job", wrapperButtons, () => console.log("submit"));
getButton("Save info", wrapperButtons, () => console.log("submit"));

container.append(wrapperButtons);
