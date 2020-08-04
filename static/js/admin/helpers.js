
export const requestGetData = async (url) => {
  const resp = await fetch(url, {method: "GET"})
  const text = await resp.text()
  return text
}

export const sendPostData = (url, data) => {
  return fetch(url, {
          method: "POST",
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(data)
        })
}
