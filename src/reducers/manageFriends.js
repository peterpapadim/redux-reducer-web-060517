export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let friendIndex = state.friends.findIndex(friend => action.id === friend.id)
      return {friends: [...state.friends.slice(0, friendIndex), ...state.friends.slice(friendIndex + 1)]}
    default:
      return {...state}
  }

}
