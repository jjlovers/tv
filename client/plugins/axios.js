export default function ({ store, $axios, app, error, route, redirect }) {
  $axios.onError((e) => {
    const code = parseInt(e.response && e.response.status)

    if (code === 404) {
      error({
        statusCode: 404
      })
    }

    throw e
  })
}
