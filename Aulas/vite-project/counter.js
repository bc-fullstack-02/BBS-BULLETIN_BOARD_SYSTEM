export function setupCounter(element) {
  let counter = document.getElementById('counter')

  counter.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText || 0) + 1
  })
  let counter2 = document.getElementById('counter2')
  counter2.addEventListener('click', () => {
    counter2.innerText = parseInt(counter2.innerText || 0) - 1
  }
  )
}
