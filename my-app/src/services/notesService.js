//import axios from 'axios';
import {app} from '../api/axiosconfig';

const getAllUrl = '/api/notes';

const getAll = () => {
	const request = app.getAll(getAllUrl)
	return request.then(response => response.data)
};

/*const callFunction = {
	getAll
};*/

export default getAll;