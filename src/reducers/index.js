const reducer = ( state, action ) =>{
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
        case'LOGIN_REQUEST':
        return {
            ...state,
            user: action.payload
        }

        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user:action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing : state.trends.find(f=>f.id ===Number(action.payload)) 
                ||  state.originals.find(f=>f.id === Number(action.payload))
                || []
            }
        case 'SEARCH_VIDEO' :                
                const newArray = [...state.trends, ...state.originals];
                if(action.payload === "") return { ...state, searchResult: [] };
                return {
                    ...state,
                    search: newArray.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
                };
        default:  return state;
    }
}

export default reducer