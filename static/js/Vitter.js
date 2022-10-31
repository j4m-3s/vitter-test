import TopNav from './components/TopNav.js'
import NewTweet from './components/NewTweet.js'
import TweetTable from './components/TweetTable.js'
import api from './ApiService.js'
export default {
	components: {
		TopNav,
		NewTweet,
		TweetTable
	},
	data() {
		const vitterApi = new api.VitterApi()
		return {
			vitterApi,
			posts: []
		}
	},
	methods: {
		getTweets() {
			this.vitterApi.getTweets().then(response => {
				this.posts = response.data
			})
		},
		postTweet(post, username) {
			this.vitterApi.postTweet({
				post: post,
				username: username
			}).then(response => {
				this.getTweets()
			})
		},
		sortTweets(col, order) {
			this.posts = order ? this.posts.sort((a, b) => a[col].localeCompare(b[col])) : this.posts.sort((a, b) => a[col].localeCompare(b[col])).reverse();
		}
	},
	mounted() {
		this.getTweets()
	},
	template:
`<top-nav />
<div class="container">
  <new-tweet @postTweet="postTweet" />
  <tweet-table :posts="posts" @sortTweets="sortTweets" />
</div>`
}
