
import logo from '../Image/logo-footer.png'

const Footer = () => {
    return (
        <div className="bg-slate-950 w-full pt-40 flex flex-col justify-center items-center  ">

            <div className=''>
                <img src={logo} alt="" />
            </div>

            <div className='w-full'>
            <div className="text-white p-10 md:flex justify-between w-11/12 mx-auto">
            <div className=" space-y-4">
                <h4 className=" font-semibold text-lg">About Us</h4>
                <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
            </div>
            <div className=" space-y-4">
                <h4 className=" font-semibold text-lg">Quick Links</h4>
                <div>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
                </div>
            </div>
            <div className=" space-y-4">
                <h3 className=" font-semibold text-lg">Subscribe</h3>
                <p>Subscribe to our newsletter for <br /> the latest updates.</p>
                <div className=' text-black'>
               <input className='p-2 text-center items-center rounded-s-lg' type="text" placeholder='Enter your email'/>
               <button className='font-bold bg-amber-400 p-2 px-4 rounded-e-lg'>Subscribe</button>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;