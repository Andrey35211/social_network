const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Andrey', status: 'i am a boss', location:{city:'Tomsk', country:'Russia'}},
        {id: 2, followed: true, fullName: 'Dasha', status: 'i am a boss too', location:{city:'Kiev', country:'Ukraine'}},
        {id: 3, followed: false, fullName: 'Alina', status: 'i am a boss too', location:{city:'Moscow', country:'Russia'}},
    ],
    newPostText: 'hello'
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export const followAC = () => { return { type: FOLLOW }
}

export const unfollowAC = () => { return { type: UNFOLLOW}}

export default usersReducer;