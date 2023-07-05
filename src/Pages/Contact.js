function Contact() {
    return (
        <div id="contact" class="relative flex flex-wrap px-4 py-16 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-25 lg:px-8 lg:py-20">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fab fa-paper-plane"></i>meetsuthar299@gmail.com</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100008195223641"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/meetsuthar/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/meetsuthar/"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <a href="images/my-cv.pdf" download className="btn btn2">Download Resume</a>
                    </div>
                    <div className="contact-right">
                        <form action="">
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="message" rows={6} placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 

      
    );
}

export default Contact;