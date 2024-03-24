import logo from '../../../../src/assets/icons/logo.svg';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_bg footer_col font-poppins'>
         
            <footer className="footer p-10 bg-base-200 text-base-content footer_col text_color">
                <aside>
                    <img src={logo} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav className='text_color'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='text_color'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='text_color'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <footer className="footer footer-center p-8 text-base-content footer_color font-medium text-sm">
                <aside>
                    <p className='text-[#FFFFFF]'> <span className='text-[#E81C2E]'>Copyright</span> © 2023 - All right reserved by- <span className='text-[#E81C2E]'>Rezaul Karim Reaz</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;