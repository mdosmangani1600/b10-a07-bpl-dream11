
import PropTypes from 'prop-types';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const SelectedPlayer = ({selectedPlayer, handleRemove}) => {

    
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className=' font-semibold text-2xl lg:mb-5'>Selected Player:({selectedPlayer.length} /6)</h2>
            {
                selectedPlayer.map(player => <SelectedPlayers key={player.playerId}
                handleRemove={handleRemove} 
                player={player}></SelectedPlayers>)
            }
            <div>
                
            </div>
            
        </div>
    );
};

SelectedPlayer.propTypes ={
    selectedPlayer:PropTypes.func,
    handleRemove:PropTypes.func
}

export default SelectedPlayer;