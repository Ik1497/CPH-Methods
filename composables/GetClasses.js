import Classes from "./Classes/index.js"

export default function () {
  return Object.fromEntries(
    Object.entries(Classes).map((item) => {
      return [item[0], GetReturnClass(item[0])]
    })
  )
}
