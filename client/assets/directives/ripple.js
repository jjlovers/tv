const Ripple = {
  inserted(el, binding, vnode) {
    el.addEventListener('mousedown', function (event) {
      add(event)
    })

    const container = document.createElement('div')
    container.classList = 'v-ripple'
    el.prepend(container)

    function add(e) {
      if (vnode.context.disabled || vnode.context.loading) {
        return
      }

      const diameter = Math.max(el.offsetWidth, el.offsetHeight) * 2

      const item = document.createElement('span')
      item.classList = 'v-ripple__item'

      const { left, top } = el.getBoundingClientRect()
      const rippleId = Date.now()

      item.id = rippleId
      item.style.width = `${diameter}px`
      item.style.height = `${diameter}px`
      item.style.left = `${e.clientX - left - diameter / 2}px`
      item.style.top = `${e.clientY - top - diameter / 2}px`

      container.append(item)

      setTimeout(() => {
        item.classList.add('v-ripple__item--active')
      }, 10)

      setTimeout(() => {
        container.removeChild(item)
      }, 1210)
    }
  }
}

export default Ripple
