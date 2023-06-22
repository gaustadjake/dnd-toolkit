const qryItems = document.querySelectorAll(".item");
console.log(qryItems)
var container = document.querySelector(".container");

class classItem {
  constructor() {
    this.item = null;
    // this.active = false;
    this.currentX = 0
    this.currentY = 0
    this.initialX = 0
    this.initialY = 0
    this.xOffset = 0
    this.yOffset = 0
  }
}

var items = []
for (let i = 0; i < qryItems.length; i++) {
  const item = new classItem
  item.item = qryItems[i]
  items[i] = item
}
console.log(items)

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  for (let i = 0; i < items.length; i++) {
    items[i].initialX = e.clientX - items[i].xOffset;
    items[i].initialY = e.clientY - items[i].yOffset;

    if (e.target === items[i].item) {
      items[i].item.active = true;
    }
  }
  console.log(items)
}

function dragEnd(e) {
  for (let i = 0; i < items.length; i++) {
    items[i].initialX = items[i].currentX;
    items[i].initialY = items[i].currentY;
    items[i].item.active = false;
  }
  console.log(items)
}

function drag(e) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].item.active) {
      e.preventDefault();
  
      items[i].currentX = e.clientX - items[i].initialX;
      items[i].currentY = e.clientY - items[i].initialY;

      items[i].xOffset = items[i].currentX;
      items[i].yOffset = items[i].currentY;

      setTranslate(items[i].currentX, items[i].currentY, items[i].item);
      console.log(items)
    }
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
