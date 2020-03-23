export default {
	addCard: (columnIndex, text) => ({
		type: 'CARDS:ADD',
		payload: {
			columnIndex,
			text
		}
	})
}