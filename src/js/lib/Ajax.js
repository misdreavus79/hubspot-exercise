export default class Ajax {
	get(url){
		return new Promise((resolve, reject) => {
			let req = new XMLHttpRequest();
			
			req.open('GET', url);

			req.onload = () => {
				if(req.status == 200){
					resolve(req.response);
				} else{
					reject(Error(req.statusText));
				}
			};

			req.onerror = () => {
				reject(Error('Network Error'));
			};

			req.send();

		});

	}

	getJson(url) {
		return this.get(url).then(JSON.parse);
	}
}