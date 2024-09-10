import NavList from "./NavList";

const Footer = () => {
    return (
        <section className="footer padding">
            <div>
                <h3>About Us</h3>
                <p>or amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
                <form>
                    <input type="text" />
                    <button>Subscribe</button>
                </form>
            </div>
            <div>
                <h3>Qucik Links</h3>
                <NavList />
            </div>
            <div>
                <h3>Business Hours</h3>
                <ul>
                    <li>
                        <p>Mon-Fri</p>
                        <p>9 am to 7 pm</p>
                    </li>
                    <li>
                        <p>Mon-Fri</p>
                        <p>9 am to 7 pm</p>
                    </li>
                    <li>
                        <p>Mon-Fri</p>
                        <p>9 am to 7 pm</p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact Info</h3>
                <ul>
                    <li>Give Phone No</li>
                    <li>Give Phone No</li>
                    <li>Give Phone No</li>
                    <li>Give Phone No</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;