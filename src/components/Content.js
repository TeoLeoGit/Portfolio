import React from "react";

const Content = () => {
    return (
        <div className="content">
        {/* <!-- Hero Start --> */}
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Trương Công Quốc Cường</h1>
                                <h2></h2>
                                <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="#portfolio">My works</a>
                                <a className="btn" href="https://www.linkedin.com/in/tr%C6%B0%C6%A1ng-c%C3%B4ng-qu%E1%BB%91c-c%C6%B0%E1%BB%9Dng-47101b16b/">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="img/tigerman.png" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}


        {/* <!-- About Start --> */}
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="img/mindsetcat.jpg" alt="Image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>2 Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Over a year experienced in developing mobile casual games. Implemented many gamification features such as achievement, mission and reward, tutorial.
                                </p>
                                <p>
                                    Worked with peer-to-peer online game made ultilizing PUN technology. Supports up to 8 players per match with reconnection, lag compensation and buffered RPCs.
                                </p>
                                <p>
                                    Developed gamificaition features on Microsoft Playfab: Storing player achievements, rewards and tracking player events. Auto refresh, lock event contents.
                                </p>

                            </div>
                            
                            <a className="btn" href="https://www.linkedin.com/in/tr%C6%B0%C6%A1ng-c%C3%B4ng-qu%E1%BB%91c-c%C6%B0%E1%BB%9Dng-47101b16b/">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
        
        
        {/* <!-- Service Start --> */}
        <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My skills</p>
                    <h2>Software engineering and game development</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-gamepad"></i>
                            </div>
                            <div className="service-text">
                                <h3>Game Design</h3>
                                <p>
                                    My favorite game genre is RTS. So I'm really interested in balancing characters, character counter charts and designing actions for player to do base on the fase of the game.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <div className="service-text">
                                <h3>Game Development</h3>
                                <p>
                                    I'm familiar with game development in Unity and programming in general. My most used programming language is C#.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-code"></i>
                            </div>
                            <div className="service-text">
                                <h3>Software development</h3>
                                <p>
                                    I have general knowledge with database systems and programming patterns, principles (SOLID, OOP design patterns)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}
        
        
        {/* <!-- Experience Start --> */}
        <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header>
                <div className="timeline">
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">05/2022 - 03/2023</div>
                            <h2>Unity Developer</h2>
                            <h4>Tego Global, Ho Chi Minh, VN</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">06/2023 - 10/2023</div>
                            <h2>Unity Developer</h2>
                            <h4>MGIF, Ho Chi Minh, VN</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">01/2023 - Present</div>
                            <h2>Unity Developer</h2>
                            <h4>BHO Media, Buon Ma Thuot, VN</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Job Experience End --> */}
        
        
        {/* <!-- Banner Start --> */}
        <div className="banner wow zoomIn" data-wow-delay="0.1s">
        
            <div className="container">
                <div className="section-header text-center">
                    {/* <p>Presentation!</p> */}
                    <h2>Come see my <span>works</span></h2>
                </div>
            </div>
        </div>
        {/* <!-- Banner End --> */}


        {/* <!-- Portfolio Start --> */}
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-1">Web Design</li>
                            <li data-filter=".filter-2">Mobile Apps</li>
                            <li data-filter=".filter-3">Game Dev</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/portfolio-1.jpg" alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>eCommerce Website</h3>
                                <a className="btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/portfolio-2.jpg" alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Product Landing Page</h3>
                                <a className="btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/portfolio-3.jpg" alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript quiz game</h3>
                                <a className="btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/portfolio-4.jpg" alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript drawing</h3>
                                <a className="btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/portfolio-5.jpg" alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Social Mobile Apps</h3>
                                <a className="btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="img/portfolio-6.jpg" alt="Image"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Company Website</h3>
                                <a className="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio End --> */}

        {/* <!-- Banner Start --> */}
            <div className="banner wow zoomIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="section-header text-center">
                        {/* <p>Presentation!</p> */}
                        <h2>These are my <span>games</span></h2>
                    </div>
                </div>
            </div>
        {/* <!-- Banner End --> */}


        {/* <!-- Blog Start --> */}
        <div className="blog" id="blog">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Projects</p>
                    <h2>My personal projects</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
                            <div className="blog-img">
                                <img src="img/blog-1.jpg" alt="Blog"/>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Web Design</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>5</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.3s">
                            <div className="blog-img">
                                <img src="img/blog-2.jpg" alt="Blog"/>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Apps Design</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>10</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}
        </div>
    )
}

export default Content;