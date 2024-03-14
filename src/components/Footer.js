import React from "react";

const Footer = () => {
    return (
        <section className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Trương Công Quốc Cường</h2>
                        <h3>VN</h3>
                        <div className="footer-menu">
                            <p>+(84) 937195913</p>
                            <p>truongcongquoccuong@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/in/tr%C6%B0%C6%A1ng-c%C3%B4ng-qu%E1%BB%91c-c%C6%B0%E1%BB%9Dng-47101b16b/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="#">TigerPortfolio</a>, All Right Reserved | Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                </div>
            </div>

            {/*  Back to top button */}
            <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up"></i></a>
        </section>
    )
}

export default Footer;