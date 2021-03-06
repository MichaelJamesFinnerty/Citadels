import play from './play';
import testSurroundings from './test_surroundings';

function human_player(i, playing,squares,teams, boardSize, aStyles, bStyles, updateCB) {
    //console.log("human player!");
    //console.log(this.state.nextTeam);
        
    const play_result = play(i, playing,squares,teams, boardSize, aStyles,bStyles);
    //console.log(play_result);
    
    updateCB(play_result[0],play_result[1],play_result[2],play_result[3]);
}

export default human_player;