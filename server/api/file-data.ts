export default defineEventHandler(async (event) => {
  console.log(event)

  if (window?.location != undefined) {
    return {...(new URLSearchParams(location.search))}
  } else {
    return `SSR`
  }
});