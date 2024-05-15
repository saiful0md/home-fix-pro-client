import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img className="rounded-lg" src="https://i.ibb.co/ygg4ZgC/Modern-Home-Fix-Construction-Logo-1.png" alt="" />
                <p className="text-2xl font-bold">HomeFixPro</p>
                <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <a className="link link-hover"><FaFacebook className="text-2xl text-blue-700"></FaFacebook></a>
                <a className="link link-hover"><FaTwitter className="text-2xl text-blue-400"></FaTwitter></a>
                <a className="link link-hover"><FaLinkedin className="text-2xl text-blue-600"></FaLinkedin></a>
                <a className="link link-hover"><FaGithub className="text-2xl "></FaGithub></a>
            </nav>
        </footer>
    );
};

export default Footer;