export default {
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			dateOrder: false,
			nameOrder: false,
			logo: '/static/img/logo.svg'
		}
	},
	emits: ['sortTweets'],
	methods: {
		formatDate(dateString) {
			let date = new Date(dateString)
			return date.toLocaleString()
		}
	},
	template:
`<div class="card mt-2">
  <div class="card-body table-responsive">
    <table class="table table-sortable">
      <thead class="table-light">
        <tr>
          <th width="20%" @click="dateOrder = !dateOrder; $emit('sortTweets', 'date', dateOrder);"> Date/Time Posted <i class="asc" v-if="dateOrder"></i>
            <i class="desc" v-if="!dateOrder"></i>
          </th>
          <th width="60%"> Message </th>
          <th width="20%" @click="nameOrder = !nameOrder; $emit('sortTweets', 'username', nameOrder);"> Name <i class="asc" v-if="nameOrder"></i>
            <i class="desc" v-if="!nameOrder"></i>
          </th>
        </tr>
      </thead>
      <tbody>
				<tr v-if="posts.length == 0">
					<td colspan="3">
						<small class="opacity-50 text-nowrap">We don't have any tweets yet.  Will you be the first person to tweet?</small>
					</td>
				</tr>
        <tr v-for="post in posts">
          <td>
            <small class="opacity-50 text-nowrap">{{ formatDate(post.date) }}</small>
          </td>
          <td>
            <div class="card">
              <div class="row card-body">
                <img class="bi me-2 ms-2 col-2" height="12" role="img" :src="logo" />
                <p class="mb-0 col-9">{{ post.post }}</p>
              </div>
            </div>
          </td>
          <td>
            <h6 class="mb-0">{{ post.username }}</h6>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
}
