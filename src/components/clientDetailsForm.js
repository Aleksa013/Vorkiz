import "./../styles/forms.scss";
import { createForm } from "./../utils/createForm";

export const getAllForms = (data, parent) => {
  console.log(Object.values(data));
  Object.values(data).forEach((value, index) => {
    console.log(data);
    if (index < Object.values(data).length) {
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
// export const clientForm = document.createElement("div");
// const formName = document.createElement("h3");
// clientForm.className = "clientDetails";
// formName.textContent = "Client detals";
// createForm(clientForm, ["First name", "Last name", "Phone", "Email(optional)"]);

// clientForm.prepend(formName);

// const inputF = document.createElement("input");
// const inputL = document.createElement("input");
// const inputPhone = document.createElement("input");
// const inputEmail = document.createElement("input");

// inputF.classList.add("half");
// inputL.classList.add("half");

// clientForm.append(inputF);
// clientForm.append(inputL);
// clientForm.append(inputPhone);
// clientForm.append(inputEmail);
