const reducer = ( state, action ) =>{
    console.log(state.myList);
    console.log(action);
    switch(action.type){
        case 'SET_FAVORITE': 
            return {
                ...state,
                myList: state.myList.filter(i => i.id === action.payload.id).length === 0
                        ? [ ...state.myList, action.payload]
                        : [ ...state.myList ]

            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList : state.myList.filter( items=> items.id !== action.payload)
            }
        default:  return state;
    }
}

export default reducer