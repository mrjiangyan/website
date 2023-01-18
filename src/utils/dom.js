/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  console.log(el)
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

export { select }
