import "./../styles/forms.scss";
import { createForm } from "./../utils/createForm.js";

export const getAllForms = (data, parent) => {
  const info = Object.values(data.default);
  info.forEach((value, index) => {
    if (index < info.length) {
      console.log(value);
      const wrapper = document.createElement("div");
      const formName = document.createElement("h3");
      wrapper.className = "wrapper";
      formName.textContent = `${value.name}`;
      createForm(wrapper, value.fields);
      wrapper.prepend(formName);
      parent.append(wrapper);
    }
  });
};
