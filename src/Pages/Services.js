function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fas fa-code"></i>
                        <h2>Web Design</h2>
                        <p>I will design your website</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-camera"></i>
                        <h2>Photography</h2>
                        <p>I will take pics for you</p>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fas fa-crop-alt"></i>
                        <h2>Photo Editing</h2>
                        <p>I will edit yopur photos</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;