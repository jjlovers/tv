import createMediaApi from '~/api/media'

export default ({ $axios }, inject) => {
  const api = {
    media: createMediaApi($axios)
  }

  inject('api', api)
}
