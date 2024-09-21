export const createForm = (parent, array) => {
  const form = document.createElement("form");
  console.log(array);
  if (Array.isArray(array)) {
    array.forEach((item) => {
      if (typeof item === "string") {
        const input = document.createElement("input");
        input.classList.add(item.split(" ").length === 2 ? "half" : "input");
        input.placeholder = item;
        form.append(input);
      } else if (Array.isArray(item)) {
        const select = document.createElement("select");
        select.classList.add("half");
        item.forEach((i) => {
          const option = document.createElement("option");
          option.value = i;
          option.textContent = i;
          select.append(option);
        });
        form.append(select);
      }
    });
    parent.append(form);
  }
};
