const About = () => {
    return (
        <section className="about padding">
            <div>
                <h2>Central <span>About</span></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod repellat eius fugit sunt exercitationem, temporibus qui, blanditiis natus officiis tempore molestias? Corporis debitis obcaecati magnam aliquam eum quisquam hic maxime?</p>
                <div className="cards">
                    <div className="card">
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="card">
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className="notes">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempore quo minus iusto adipisci, rerum ducimus asperiores illum similique pariatur neque blanditiis eos nesciunt voluptas assumenda veniam consequuntur incidunt provident.</p>
                </div>
                <div>
                    <div>
                        17 Years of Exp
                    </div>
                    <div>
                        <ul>
                            <li>List1</li>
                            <li>List2</li>
                            <li>List3</li>
                            <li>List4</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button>More About Us</button>
                    <div className="founder">
                        <div className="image">
                            <img src="https://themewagon.github.io/Cental/img/testimonial-1.jpg" alt="" />
                        </div>
                        <div>
                            <h3>Founders Name</h3>
                            <p>Profession</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="https://themewagon.github.io/Cental/img/about-img.jpg" alt="car-image" />
            </div>
        </section>
    )
}

export default About;