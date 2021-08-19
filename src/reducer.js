export const initialState={
    basket:[],
    user: null
};

const reducer =(state,action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        case 'REMOVE_FORM_BASKET':
            const rIndex=state.basket.findIndex(({id}) => id===action.id);      
            return {
                ...state,
                basket: state.basket.filter((item,index) => index!==rIndex)
            };
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        default:
            return state;
        
    }
};

export default reducer;