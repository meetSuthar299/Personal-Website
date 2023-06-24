function Header() {
    return (
        <div className="nav-bar">
            <img alt="logo" className="logo" />
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
            <label htmlFor="menu-icon"></label>
            <nav className="nav">
                <ul className="pt-5">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li>
                        <a href="#">Contact</a>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100008195223641"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/meetsuthar/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/meetsuthar/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.linkedin.com/in/meetsuthar/"><i className="fab fa-github"></i></a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;