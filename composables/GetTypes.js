export default function () {
  return [
    `string`,
    `int`,
    `double`,
    `float`,
    `void`,
    `bool`,
    `object`,
    `DateTime`,
    `TimeSpan`,
    ...Object.keys(GetClasses()),
  ]
}
