// NOTES
// REDUCER DOES THE EDITING OF THE STATE
// every time you run/dispatch an action every single reducer is going to run. If it's one of the actions that i'm interested in, then do something. otherwise, return state. 

// PURE FUNCTIONS
// take a copy and return the new state. expect to get the same outcome every single time. 


// a reducer takes in two things:

// 1. the action (information bout what happened)
// 2. copy of current state

function posts(state = [], action) {
    // console.log('the post will change')
    // console.log(state, action)
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log('incrementing likes')
            const i = action.index;
            return [
                ...state.slice(0, i), // before the one we are updating
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1), // after the one we are updating
            ]
        // return the updated state

        default:
            return state;
    }
    return state;
}

export default posts;