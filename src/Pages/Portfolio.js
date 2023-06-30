
function Portfolio() {
    return (
        <div id="portfolio" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="images/work-1.png" />
                        <div className="layer">
                            <h3>Lost and Found for Dogs App</h3>
                            <p>I made this App with a group of 3 students. The app will help people report and find lost dogs.</p>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/work-2.png" />
                        <div className="layer">
                            <h3>Photography</h3>
                            <p>All client photography</p>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/work-3.png" />
                        <div className="layer">
                            <h3>Other Programming Work</h3>
                            <p>All client photography</p>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See More</a>
            </div>
        </div>
    );
}


export default Portfolio;