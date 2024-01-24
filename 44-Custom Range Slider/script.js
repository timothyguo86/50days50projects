const range = document.querySelector('#range')

range.addEventListener('input', e => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
  const labelWidth = getComputedStyle(label).getPropertyValue('width')
  const numRangeWidth = +rangeWidth.slice(0, rangeWidth.length - 2)
  const numLabelWidth = +labelWidth.slice(0, labelWidth.length - 2)

  const max = +e.target.max

  const left = value * (numRangeWidth / max) - numLabelWidth / 2

  label.style.left = `${left}px`
  label.innerText = value
})
