// !create Text Node:-----
// var h = document.createElement("h1");
// var myValue = document.createTextNode("Hello World!");
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);
// !------

let ul = document.getElementById("list");
let li;

let addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

let removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function addItem() {
  let input = document.getElementById("input");
  let item = input.value;
  ul = document.getElementById("list");
  let textnode = document.createTextNode(item);

  if (item === "") {
    return false;
    // * Add a P tag and assign a value of "Enter Your Todo..."
  } else {
    //? Its Create Checkbox
    li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");

    // ? Create a Label
    let label = document.createElement("label");
    label.setAttribute("for", "item"); //*Optional

    // ?add these elements to the webpage

    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.className = "visual";
    }, 4);

    input.value = "";
  }
}
function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}
