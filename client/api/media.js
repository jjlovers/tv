export default ($axios) => {
  return {
    readCategories(params) {
      return $axios.get(`/api/genre/all/4F5A9C3D9A86FA54EACEDDD635185/`, { params })
    }
  }
}
