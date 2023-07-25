const buttonOpenHour = document.querySelector(".button-hour")
const buttonRemoveHour = document.querySelector(".close-hour")
const body = document.querySelector("body")

buttonOpenHour.addEventListener("click", () => {
  body.classList.add("show")
})

buttonRemoveHour.addEventListener("click", () => {
  body.classList.remove("show")
})
