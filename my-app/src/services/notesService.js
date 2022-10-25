import { app } from '../api/axiosconfig';

const getAllUrl = '/notes';

const getAll = () => {
	const request = getAll(getAllUrl)
	console.log(request)
	return request.then(response => console.log(response.data))
}

const callFunction = {
	getAll
};

export default callFunction;