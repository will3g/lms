export const libraryReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const loadingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ACCOUNTS_LOADING':
      return {
        ...state,
        accountsLoading : action.payload
      }
    case 'GET_OWNERDETAILS_LOADING':
      return {
        ...state,
        ownerDetailsLoading : action.payload
      }
    case 'GET_ALL_BOOKS_LOADING':
      return {
        ...state,
        allbooksloading : action.payload
      }
    case 'GET_MY_BOOKS_LOADING':
      return {
        ...state,
        myBooksLoading : action.payload
      }
    case 'GET_ADD_BOOKS_LOADING':
      return {
        ...state,
        addBooksLoading : action.payload
      }
    case 'GET_RETURN_BOOKS_LOADING':
      return {
        ...state,
        returnBooksLoading : action.payload
      }
    case 'GET_BORROW_BOOKS_LOADING':
      return {
        ...state,
        borrowBooksLoading : action.payload
      }
    default:
      return state
  }
}

export const errorReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ACCOUNTS_ERROR':
      return action.payload
    case 'GET_OWNERDETAILS_ERROR':
      return action.payload
    case 'GET_ALL_BOOKS_ERROR':
      return action.payload
    case 'GET_MY_BOOKS_ERROR':
      return action.payload
    case 'GET_ADD_BOOKS_ERROR':
      return action.payload
    default:
      return state
  }
}

export const ownerDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_OWNERDETAILS_SUCCESS':
      let ownerDetails = {
        'name' : action.payload[0],
        'account' : action.payload[1],
        'status' : action.payload[2],
        'dateAdded' : action.payload[3]
      }
      return ownerDetails
    default:
      return state
  }
}

export const allBooksReducers = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_BOOKS_SUCCESS':
      let books = action.payload[0]
      let myBooks = books.split('|').map((book) => {
        book = book.split(';')
        return {
          'id' : book[0],
          'title' : book[1],
          'author' : book[2],
          'publisher' : book[3],
          'owner' : '0x' + book[4],
          'borrower' : '0x' + book[5],
          'state' : book[6],
          'dateAdded' : book[7],
          'dateIssued' : book[8]
        }
      })
      return {
        ...state,
        allBooks : myBooks
      };
    case 'SEARCH_BOOK':
      const filteredBooks = state.allBooks.filter((book) => {
        return book.title.toLowerCase().includes(action.payload.toLowerCase()) || book.author.toLowerCase().includes(action.payload.toLowerCase()) || book.publisher.toLowerCase().includes(action.payload.toLowerCase())
      })
      return {
        ...state,
        filteredBooks : filteredBooks
      };
    default:
      return state
  }
}

export const myBooksReducers = (state = [], action) => {
  switch (action.type) {
    case 'GET_MY_BOOKS_SUCCESS':
      let books = action.payload[0]
      let myBooks = books.split('|').map((book) => {
        book = book.split(';')
        return {
          'id' : book[0],
          'title' : book[1],
          'author' : book[2],
          'publisher' : book[3],
          'owner' : '0x' + book[4],
          'borrower' : '0x' + book[5],
          'state' : book[6],
          'dateAdded' : book[7],
          'dateIssued' : book[8]
        }
      })
      return myBooks
    default:
      return state
  }
}

export const addBookReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_ADD_BOOKS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const returnBookReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_RETURN_BOOKS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export const borrowBookReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_BORROW_BOOKS_SUCCESS':
      return action.payload
    default:
      return state
  }
}
