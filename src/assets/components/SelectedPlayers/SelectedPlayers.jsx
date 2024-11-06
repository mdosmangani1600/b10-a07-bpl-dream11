
import PropTypes from 'prop-types';

const SelectedPlayers = ({player,handleRemove}) => {
    const{image, name, role} =player;
    return (
        <div className='flex justify-between space-y-20  '>
            <div className='flex gap-5 items-center'>
            <img className='w-20 h-20 rounded-2xl' src={image} alt="" />
            <div>
                <h4 className=' font-semibold text-2xl'>{name}</h4>
                <h4>{role}</h4>
            </div>
            </div>
            <div className=' text-center items-center'>
                <button className=' ' onClick={() => handleRemove(player.playerId)}><i className="fa-solid fa-trash-can text-red-600"></i></button>
                
                
            </div>
        </div>
    );
};

SelectedPlayers.propTypes ={
    player:PropTypes.object.isRequired,
    handleRemove:PropTypes.object.isRequired
    
}

export default SelectedPlayers;