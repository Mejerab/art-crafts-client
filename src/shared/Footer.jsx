import { TbBrandCraft } from "react-icons/tb";
import '../index.css'
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer pl-12 bg-[#95453590] text-white font-medium font-sans p-10">
                <div className="w-full flex">
                    <aside className="w-[40%]">
                        <a href="#navbar" className="flex font-semibold font -ml-1 text-2xl items-center"><TbBrandCraft className="text-4xl -rotate-90 mr-1" /> Craft Mania</a>
                        <p>
                            Craft Mania Industries Ltd.
                            <br />
                            Providing reliable products since 1992
                        </p>
                        <ul className="flex mt-6">
                            <li><Link to='https://facebook.com'><FaFacebook className="text-3xl mr-4 hover:text-[#95453590] transition-[.5s]" /></Link></li>
                            <li><Link to='https://twitter.com'><FaTwitter className="text-3xl mr-4 hover:text-[#95453590] transition-[.5s]" /></Link></li>
                            <li><Link to='https://linkedin.com'><FaLinkedin className="text-3xl mr-4 hover:text-[#95453590] transition-[.5s]" /></Link></li>
                        </ul>
                    </aside>
                    <div className="w-[60%] flex justify-between">
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover mb-1">Branding</a>
                            <a className="link link-hover mb-1">Design</a>
                            <a className="link link-hover mb-1">Marketing</a>
                            <a className="link link-hover mb-1">Advertisement</a>
                        </nav>
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover mb-1">About us</a>
                            <a className="link link-hover mb-1">Contact</a>
                            <a className="link link-hover mb-1">Jobs</a>
                            <a className="link link-hover mb-1">Press kit</a>
                        </nav>
                        <nav className="flex flex-col">
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover mb-1">Terms of use</a>
                            <a className="link link-hover mb-1">Privacy policy</a>
                            <a className="link link-hover mb-1">Cookie policy</a>
                        </nav>
                    </div>
                </div>
            </footer>

            <div className="border-t border-white text-white bg-[#95453590]">
                <p className="py-4 text-center text-sm roboto-slab">©: All rights reserved by Meherab Hossean</p>
            </div>
        </div>
    );
};

export default Footer;