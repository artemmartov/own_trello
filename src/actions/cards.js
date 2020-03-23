export default {
	addCard: (columnIndex, text) => ({
		type: 'CARDS:ADD',
		payload: {
			columnIndex,
			text
		}
	}),
	reorderCards: ({columnIndex, sourceIndex, destinationIndex}) => ({
		type: 'CARDS:REORDER',
		payload: {
			columnIndex, 
			sourceIndex, 
			destinationIndex
		}
	})
}