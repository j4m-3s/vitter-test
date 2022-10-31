export default {
	name: 'api',
	VitterApi: class VitterApi {
		constructor() {
			this.url = '/api/';
			this.headers = {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			};
		}
		async handleResponse(res) {
			if (res.status == 200) {
				let data = await res.json();
				return await {
					'status_code': res.status,
					'data': data
				};
			} else {
				// not found
				return {
					'status_code': res.status,
					'text': res.statusText
				}
			}
		}
		async getTweets() {
			try {
				var url = `${this.url}`
				let res = await fetch(url, {
					method: 'GET',
					headers: this.headers
				})
				return await this.handleResponse(res);
			} catch (e) {
				console.log(e)
			}
		}
		async postTweet(bodyData) {
			try {
				var url = `${this.url}`
				let res = await fetch(url, {
					method: 'POST',
					headers: this.headers,
					body: JSON.stringify(bodyData)
				})
				return await this.handleResponse(res);
			} catch (e) {
				console.log(e)
			}
		}
	}
}
