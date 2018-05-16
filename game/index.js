import {Map} from 'immutable'

let board = Map()
const MOVE = 'MOVE'

export default function reducer(state = {}, action) {

  switch (action.type){
    case MOVE:
      return { board: state.board.set(position),
        turn: state.player === 'X' ? 'O' : 'X'}
    default:
      return state
    }

}




export const move = (player, position) =>{
  return { type: MOVE,
           player: player,
           position: position
        }
        console.log(player, position)
}
