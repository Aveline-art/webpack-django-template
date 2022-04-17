function component() {
  const element = document.createElement("div");
  element.innerHTML = "Or use a webframework to create html through JS instead";

  return element;
}

document.body.appendChild(component());
