export default {
	data() {
		return {
			logo: '/static/img/logo-full.svg'
		}
	},
	template:
`<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  <a href="/" class="d-flex align-items-center col-md-3 mb-2 md-0 text-dark text-decoration-none">
    <img class="bi me-2 ms-2" height="32" role="img" :src="logo" />
  </a>
</header>`
}
