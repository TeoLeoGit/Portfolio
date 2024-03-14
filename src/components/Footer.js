import React from "react";

const Footer = () => {
    return (
        <section className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Kate Winslet</h2>
                        <h3>123 Street, New York, USA</h3>
                        <div className="footer-menu">
                            <p>+012 345 67890</p>
                            <p>info@example.com</p>
                        </div>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved | Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                </div>
            </div>

            {/* <!-- Back to top button --> */}
            <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up"></i></a>
            
            {/* <!-- Pre Loader --> */}
            {/* <div id="loader" className="show">
                <div className="loader"></div>
            </div> */}
        </section>
    )
}

export default Footer;