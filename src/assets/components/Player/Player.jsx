import PropTypes from 'prop-types';

const Player = ({player, addToSelected}) => {
    const {name, country, image, role, battingType, bowlingType, biddingPrice} = player;
    return (
        <div className=' border p-5 rounded-xl space-y-3'>
            <img className=' w-full rounded-xl h-60' src={image} alt="" />
            <h2 className=' font-semibold text-xl' > <i className="fa-solid fa-user-tie"></i> {name}</h2>
            <div className='flex justify-between border-b pb-2'>
                <h5><i className="fa-regular fa-flag"></i> {country}</h5>
                <h4 className='bg-slate-100 px-3 p-1 rounded-xl'>{role}</h4>
            </div>
            <h3 className=' font-bold'>Rating</h3>
            <div className='flex justify-between font-semibold'>
                <h5>{battingType}</h5>
                <h5>{bowlingType}</h5>
            </div>
            <div className='flex justify-between font-semibold'>
                <h4>{biddingPrice}</h4>
                <button 
                onClick={() => addToSelected(player)}
                className='p-1 border rounded-xl px-3'>Choose Player</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player:PropTypes.object.isRequired,
    addToSelected:PropTypes.func
}

export default Player;