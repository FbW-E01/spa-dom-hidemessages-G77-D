

const cards = document.querySelector("#container");
container.addEventListener("click", (e) => {
  let x = e.target.closest(".pane")
  x.remove ()
});