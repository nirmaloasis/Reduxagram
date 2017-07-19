// 1 the action
// 2 copy of current state
function posts(state = [],action){
    switch(action.type){
        case "INCEREMENT_LIKES":
        console.log("reached")
          const i = action.index
            return[
                ...state.slice(0,i),
                {...state[i],likes:state[i].likes+1 },
                ...state.slice(i+1)
            ]
        default:
          return state;
    }

}
export default posts