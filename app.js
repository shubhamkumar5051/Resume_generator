function addNewWork() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("userWorkExp");
  newNode.classList.add("mt-1");
  newNode.setAttribute("rows", 5);
  newNode.setAttribute("placeholder", "Enter Here");
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("btnAddWe");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAcademic() {
  let newItem = document.createElement("textarea");
  newItem.classList.add("form-control");
  newItem.classList.add("userAq");
  newItem.classList.add("mt-1");
  newItem.setAttribute("rows", 5);
  newItem.setAttribute("placeholder", "Enter Here");
  let AqOb = document.getElementById("AqRef");
  let aqAdbtnOb = document.getElementById("btnAddAq");
  AqOb.insertBefore(newItem, aqAdbtnOb);
}
