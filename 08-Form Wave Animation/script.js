const labels = document.querySelectorAll('.form-control label')
const delayUnit = 50

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((char, idx) => `<span style="transition-delay: ${idx * delayUnit}ms">${char}</span>`)
    .join('')
})
