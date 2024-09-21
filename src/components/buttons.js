export const getButton = (text, parent, cb) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", cb);
  parent.append(button);
};
