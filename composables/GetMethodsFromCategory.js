export default function (category = undefined) {
  if (category === undefined) return undefined

  const methods = GetMethods()

  return methods[category]
}
