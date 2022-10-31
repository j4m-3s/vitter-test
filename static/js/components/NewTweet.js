export default {
	data() {
		return {
			tweetContent: '',
			username: '',
			validTweet: '',
			validUser: ''
		}
	},
	emits: ['postTweet'],
	methods: {
		resetPost() {
			this.tweetContent = ''
			this.username = ''
			this.validTweet = ''
			this.validUser = ''
		},
		validatePost() {
			this.tweetContent.length > 0 && this.tweetContent.length < 51 ? this.validTweet = 'is-valid' : this.validTweet = 'is-invalid'
			this.username.length > 0 && this.username.length < 51 ? this.validUser = 'is-valid' : this.validUser = 'is-invalid'
			if (this.validUser == 'is-valid' && this.validTweet == 'is-valid') {
				this.$emit('postTweet', this.tweetContent, this.username);
				this.resetPost();
			}
		}
	},
	template:
`<div class="card">
  <div class="card-body">
    <form class="row g-3 needs-validation w-100" novalidate>
      <div class="col-md-6">
        <input type="text" class="form-control" :class="validTweet" id="newTweet" v-model="tweetContent" size="50" placeholder="Try share what you think in only fifty characters!" required />
        <div v-if="validTweet == 'is-invalid'" class="invalid-feedback" style="display: block"> Your tweet must have between 1 and 50 characters. </div>
      </div>
      <div class="col-md-4">
        <div class="input-group">
          <input class="form-control" :class="validUser" id="username" placeholder="username" type="text" size="20" v-model="username" required />
        </div>
        <div v-if="validUser == 'is-invalid'" class="invalid-feedback" style="display: block"> Your username must have between 1 and 50 characters. </div>
      </div>
      <div class="col-md-2">
        <button class="w-100 btn btn-primary" @click="validatePost();">Tweet</button>
      </div>
    </form>
  </div>
</div>`
}
