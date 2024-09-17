

const reducer = (globalState, action) => {

	switch (action.type) {

		case "GET_BOOK":
		case "UPDATE_BOOKS":
			return {
				...globalState,
				singleBook: action.payload
			}

		case "GET_BOOKS":
			return {
				...globalState,
				books: action.payload
			}

		default:
			return globalState

	}

}

export default reducer