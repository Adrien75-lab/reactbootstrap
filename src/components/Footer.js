import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { RiTwitterFill,RiFacebookFill,RiInstagramFill,RiYoutubeFill,RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
    const onSubmitForm = (event) => {
        event.preventDefault()
    }
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Api React<span>.</span></h3>
                            <p>
                                M2i tech<br /><br />
                                <strong>Phone:</strong> 00000000<br />
                                <strong>Email:</strong> adri@gmail.com<br />
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"><BiChevronRight /></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"><BiChevronRight /></i> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"><BiChevronRight /></i> <a href="#">Services</a></li>
                                <li><i className="bx bx-chevron-right"><BiChevronRight /></i> <a href="#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"><BiChevronRight /></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"><BiChevronRight /></i> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"><BiChevronRight /></i> <a href="#">Web Development</a></li>
                             
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Presento</span></strong>. All Rights Reserved
            </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-end pt-3 pt-md-0">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"><RiTwitterFill /></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"><RiFacebookFill /></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"><RiInstagramFill /></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"><RiYoutubeFill /></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"><RiLinkedinFill /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer