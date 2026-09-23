const addBtn = document.querySelector("#add-btn");
const removeBtn = document.querySelector("#remove-btn");
const closeBtn = document.querySelector("#close-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const taskDetail = document.querySelector(".textArea-cont");
const taskcont = document.querySelector(".task-container");
const submitBtn = document.querySelector("#submit-btn");
const priorityTaskColors = document.querySelectorAll(".priority-color");
const toolboxColors = document.querySelectorAll(".color");
const nightBtn = document.getElementById("night-btn");
const icon = nightBtn.querySelector("i");

//Variables
let ogtickets = [];
let DEFAULT_COLOR = "lightblue";
let activeprioritycolor = DEFAULT_COLOR;
let activetoolboxcolor = "all";
let deleteMode = false;
const colors = ["lightblue", "lightcoral", "purple", "darkgreen"];

const ticketFromLs = localStorage.getItem("ogTickets");
if(ticketFromLs){
  ogtickets = JSON.parse(ticketFromLs);
  refreshMainContainer();
}

function getFilteredTickets() {
  if (activetoolboxcolor === "all") {
    return ogtickets;
  }
  return ogtickets.filter(({ color }) => color === activetoolboxcolor);
}

function refreshMainContainer() {
  mainCont.innerHTML = "";
  const filteredTickets = getFilteredTickets();
  filteredTickets.forEach(({ id, color, task }) => {
    createticket({
      ticketColor: color,
      ticketId: id,
      ticketTask: task,
    });
  });
}

function handleColor(ticketId, ticketElem) {
  const ticketColorElement = ticketElem.querySelector(".ticket-color");
  ticketColorElement.addEventListener("click", function () {
    const currentColor = ticketColorElement.classList[1];
    let currentColorIdx = colors.findIndex((color) => color === currentColor);

    console.log(currentColor, currentColorIdx);

    const newColorIdx = ++currentColorIdx % colors.length;
    const newColor = colors[newColorIdx];

    console.log(newColor, newColorIdx);

    ticketColorElement.classList.remove(currentColor);
    ticketColorElement.classList.add(newColor);

    let index = ogtickets.findIndex((ticket) => ticket.id === ticketId);
    console.log(index);

    ogtickets[index].color = newColor;
    updateLocalStorage();
  });
}

function handleDelete(ticketId, ticketElem) {
  ticketElem.addEventListener("click", () => {
    if (deleteMode) {
      ticketElem.remove();
      ogtickets = ogtickets.filter((ticket) => {
        return ticket.id !== ticketId;
      });
      updateLocalStorage()
    } else {
      console.log("Ignore");
    }
  });
}

function toggleDelete() {
  deleteMode = !deleteMode;

  if (deleteMode) {
    alert("Delete Mode Activated!!");
    removeBtn.style.color = "darkred";
    removeBtn.style.webkitTextStroke = "0.5px gold";
  } else {
    alert("Delete Mode DeActivated!!");
    removeBtn.style.color = "white";
    removeBtn.style.webkitTextStroke = "";
  }
}

function createticket({ ticketTask, ticketColor, ticketId }) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor} "></div>
        <div class="ticket-id">${ticketId}</div>
        <div class="ticket-area">${ticketTask}</div>
        <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;

  mainCont.append(ticketCont);

  handleLock(ticketId, ticketCont);
  handleColor(ticketId, ticketCont);
  handleDelete(ticketId, ticketCont);
}

function handleLock(ticketId, ticketElem) {
  const lockClass = "fa-lock";
  const unlockClass = "fa-unlock";

  const ticketLockElement = ticketElem.querySelector(".ticket-lock i");
  const ticketTaskArea = ticketElem.querySelector(".ticket-area");

  ticketLockElement.addEventListener("click", () => {
    if (ticketLockElement.classList.contains(lockClass)) {
      ticketLockElement.classList.remove(lockClass);
      ticketLockElement.classList.add(unlockClass);

      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockElement.classList.remove(unlockClass);
      ticketLockElement.classList.add(lockClass);

      ticketTaskArea.setAttribute("contenteditable", "false");
      let index = ogtickets.findIndex((ticket) => ticket.id === ticketId);
      console.log(index);

      ogtickets[index].task = ticketTaskArea.textContent;
      updateLocalStorage()
    }
  });
}

// dark mode and light mode
nightBtn.addEventListener("click", function () {
  if (document.body.classList.toggle("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "yellow";
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "black";
  }
});

//submit button function
function handleSubmit() {
  if (taskDetail.value && activeprioritycolor) {
    ogtickets.push({
      task: taskDetail.value,
      color: activeprioritycolor,
      id: shortid(),
    });
    console.log(ogtickets);
    closeModal();
    clearSelectedPriorityColor();
    taskDetail.value = "";
    activeprioritycolor = DEFAULT_COLOR;
  }
  updateLocalStorage()
  refreshMainContainer();
}

function clearSelectedPriorityColor() {
  priorityTaskColors.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
}

function onPriorityColorClickInModal(event) {
  clearSelectedPriorityColor();
  const elem = event.target;
  activeprioritycolor = elem.classList[1];
  elem.classList.add("active");
}

function clearSelectedToolboxColor() {
  toolboxColors.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
}

function onClickToolboxColors(event) {
  clearSelectedToolboxColor();
  const elem = event.target;
  activetoolboxcolor = elem.classList[1];
  elem.classList.add("active");

  refreshMainContainer();
}

//Model open & close
function openModal() {
  modalCont.style.display = "flex";
}
function closeModal() {
  modalCont.style.display = "none";
}

function updateLocalStorage() {
  localStorage.setItem("ogTickets", JSON.stringify(ogtickets));
}

addBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
priorityTaskColors.forEach(function (elem) {
  elem.addEventListener("click", onPriorityColorClickInModal);
});
submitBtn.addEventListener("click", handleSubmit);

toolboxColors.forEach(function (elem) {
  elem.addEventListener("click", onClickToolboxColors);
});

removeBtn.addEventListener("click", toggleDelete);
