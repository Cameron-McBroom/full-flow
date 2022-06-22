export default function (to, from, savedPosition) {
  console.log("to: ", to)
  console.log("from: ", from)
  console.log("savedPosition: ", savedPosition)

  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return { el: to.hash, behavior: "smooth" }
  }
  else {
    document.getElementById("main-layout").scrollTo(0, 0)
  }
}
