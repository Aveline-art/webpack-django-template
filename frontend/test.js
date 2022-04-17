function component() {
  const element = document.createElement("div");
  element.innerHTML = "This is used with test.html";

  return element;
}

document.body.appendChild(component());
