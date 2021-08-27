

const localStorageKey = 'favouriteList';

const getByKey = (key) => {
	const result = localStorage.getItem(localStorageKey);
	if(result){
		try {
			try {
				const json = JSON.parse(result);
				return json;
			} catch(e) {
				return {}
			}
		} catch(e) {
			return {}
		}
	}else {
		return {}
	}
}

const setToLS = (payload) => {
	localStorage.setItem(localStorageKey, JSON.stringify(payload));
}

const checkLength = (obj) => {
	let index = 0;
	for(let i in obj){
		if(obj.hasOwnProperty(i)){
			index++;
		}
	}
	return index;
}


export {
	getByKey,
	setToLS,
	checkLength
}