import '../../assets/css/Style.css';
import socialicon from '../../assets/images/socialicon.png';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoTwitter } from 'react-icons/bi';
import { FaPinterestP } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
    return (
    <div className="footer">
        <div className='Footer_sec'>
            <div className='Footer_part1'>
                <div className='Footer_Fac'>
                    <img src={socialicon} className='Social_logo' alt="Social_logo" />
                </div>
                <div className='Footer_Fac_desc'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever industry. Lorem Ipsum has been the lorem. </p>
                </div>
                <div className='Footer_Fac_Socialions'>
                    <div className='Social_ions_circle'><FaFacebookF  className='Fb'/></div>
                    <div className='Social_ions_circle'> <BiLogoTwitter className='Fb'/></div>
                    <div className='Social_ions_circle'> <FaPinterestP className='Fb'/></div>
                    <div className='Social_ions_circle'> <FiInstagram className='Fb'/></div>
                    <div className='Social_ions_circle'><AiFillYoutube className='Fb'/></div>
                </div>
            </div>
            <div className='Footer_part2'>
                <div className='Footer_WorkingHours'>
                    <h1>Resent Post</h1>
                    <p>About</p>
                    <p> FAQ</p>
                    <p> Career</p>
                    <p>  Our Team</p>
                    <p>  Services</p>
                </div>
            </div>
            <div className='Footer_part3'>
                <div className='Footer_WorkingHours'>
                    <h1>Working Hours</h1>
                    <p>Monday – Friday: 8am – 6pm EST</p>
                    <p>Saturday: 9am – 5pm EST</p>
                    <p>Sunday: 9am – 4pm EST</p>

                </div>
            </div>
            <div className='Footer_part4'>
                <div className='Footer_Contactus'>
                    <h1>Contact Us</h1>
                    <p>90 St Johns Brooklyn, NY, United States
                        contact.louisvillebeautysalon@gmail.com
                        Phone: (+01)888.999.77</p>
                </div>
            </div>
        </div>
        <div className='Copyright'>
            <div className='Copyright_inn'>
              <h2>© Copyright Louisville Beauty Salon All rights reserved.</h2>
              <h2>Privacy Policy  <span> Terms of Use</span> </h2>
            </div>
         </div>
    </div>
        
    );
}