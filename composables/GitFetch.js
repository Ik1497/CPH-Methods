let AUTH_KEY = ``

if (process.client)
  AUTH_KEY = localStorage.getItem(`CPH_METHODS_GITHUB_AUTH_KEY`)

export default async function (url, method = `GET`, body = undefined) {
  const data = await fetch(`https://api.github.com${url}`, {
    method,
    body,
    headers: {
      Accept: `application/vnd.github+json`,
      Authorization: `Bearer ${AUTH_KEY}`,
      "X-GitHub-Api-Version": `2022-11-28`,
    },
  })
  const returnData = await data.json()
  return returnData
}
