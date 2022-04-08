// 1.select the input[text],form,,grid elements
const form = document.querySelector("form")
const input = document.querySelector("#textBox")
const grid = document.querySelector("#grid")
// 2.add event listener to form and take the input from input[text]
//  create the gift boxes according to the number given
form.addEventListener("submit", e => {
  grid.innerHTML = ""
  e.preventDefault()
  if (!input.value || parseInt(input.value) <= 0) return
  const totalBoxes = parseInt(input.value)
  for (let box = 1; box <= totalBoxes; box++) {
    const gift = document.createElement("div")
    gift.classList.add("gift")
    const giftNo = document.createElement("p")
    giftNo.innerText = box
    gift.appendChild(giftNo)
    grid.appendChild(gift)
  }
})
