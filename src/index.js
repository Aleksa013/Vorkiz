import { getAllForms } from "./components/clientDetailsForm";
import * as formDesc from "./data/formsInfo.json";

const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
body.append(container);

getAllForms(formDesc, container);
