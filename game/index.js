import {Map} from 'immutable'

let board = Map()
const MOVE = 'MOVE'

export default function reducer(state = {board, turn: 'O'}, action) {

  switch (action.type){
    case MOVE:

      return { board: state.board.setIn(action.position, action.player),
               turn: action.player === 'X' ? 'O' : 'X'}
      default:
      return state
    }



}


export const move = (player, position) =>{
  return { type: MOVE,
           player: player,
           position: position
        }

}
