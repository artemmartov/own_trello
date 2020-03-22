const initialState = {
	items: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CARDS: ADD'
		return {
			...state,
			items: action.payload
		}
		default: 
		return state;
	}
}