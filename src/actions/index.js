import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonplaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
// THIS WORKS THE SAME WAY
// export const fetchPosts = () => {
// 	return async function(dispatch, getState) {
// 		const response = await jsonplaceholder.get('/posts')
// 		dispatch({type: 'FETCH_POSTS', payload: response.data})
// 	}
// }

export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonplaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};
