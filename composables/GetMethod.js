export default function (category = undefined, method = undefined) {
  if (category === undefined || method === undefined) return undefined

  const categoryData = GetMethodsFromCategory(category)

  if (categoryData === undefined) return undefined

  const methods = categoryData?.methods

  if (methods === undefined) return undefined

  return methods[method]
}
