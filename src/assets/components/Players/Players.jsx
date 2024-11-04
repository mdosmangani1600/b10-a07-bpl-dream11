import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';


const Players = ({addToSelected}) => {
    const [players, setPlayers] = useState([]);
    

    useEffect( () =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])



    return (
        <div>
            <div>
            <h2 className="font-bold text-2xl">Available Players</h2>
            </div>
            
        <div className="mt-10 grid grid-cols-3 gap-5 w-full p-5 ">
        {
                players.map(player => <Player key={player.playerId} addToSelected={addToSelected}
                 player={player}></Player>)
            }
        </div>
        </div>
    );
};

Players.propTypes ={
    addToSelected:PropTypes.func,
    handleAvailable:PropTypes.func,
    handleSelected:PropTypes.func
}

export default Players;