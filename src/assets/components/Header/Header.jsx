
import PropTypes from 'prop-types';
import logo from '../image/logo.png'

const Header = ({freeCredit}) => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto'>
            <img className="" src={logo} alt="" />
            <div className='space-x-10'>
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Teams</a>
                <a href="">Schedules</a>
                <button className='font-bold text-xl border-2 p-2 rounded-xl'> {freeCredit} Coin <i className="fa-brands fa-bitcoin text-yellow-300"></i></button>
            </div>
            
        </div>
    );
};

Header.propTypes = {
    freeCredit:PropTypes.number
}

export default Header;

