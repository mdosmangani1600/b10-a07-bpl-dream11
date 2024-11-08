
import PropTypes from 'prop-types';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const SelectedPlayer = ({selectedPlayer, handleRemove, setActiveTab}) => {

    
    return (
        <div className='w-11/12 mx-auto pb-28'>
            <h2 className=' font-semibold text-2xl lg:mb-5'>Selected Player:({selectedPlayer.length} /6)</h2>
            {
                selectedPlayer.map(player => <SelectedPlayers key={player.playerId}
                handleRemove={handleRemove} 
                player={player}></SelectedPlayers>)
            }
            <div>
                <button className='p-2 bg-lime-200 text-black font-bold rounded-xl' onClick={ () => setActiveTab(true)} >Add More Player</button>
            </div>
            
        </div>
    );
};

SelectedPlayer.propTypes ={
    selectedPlayer:PropTypes.func,
    handleRemove:PropTypes.func,
    setActiveTab:PropTypes.func
   
}

export default SelectedPlayer;