const MobileBanner = () => {
    return (
        <section className="home padding mobile-banner">
            <form>
                <h2 className="text-center">Continue Car Reservation</h2>
                <div className="inputField">
                    <select name="car-type" id="car-type">
                        <option value="">Select Your Car type</option>
                        <option value="Some">Some Cars</option>
                    </select>
                </div>
                <div className="inputField">
                    <label htmlFor="from-city">Pick City</label>
                    <input type="text" id="from-city" placeholder="Enter City"/>
                </div>
                <p>Need a different drop-off location</p>
                <div className="inputField">
                    <label htmlFor="to-city">Drop Off</label>
                    <input type="text" id="to-city" placeholder="Enter City"/>
                </div>
                <div className="date-time">
                    <div className="inpputFiled">
                        <label htmlFor="from-time">Pick Up</label>
                        <input type="date" id="from-time"/>
                    </div>
                    <select className="date-timestamp" name="from-time" id="from-timestamp">
                        <option value=""></option>
                        <option value="12">12:00</option>
                    </select>
                </div>
                <div className="date-time">
                    <div className="inpputFiled">
                        <label htmlFor="to-time">Dropoff</label>
                        <input type="date" id="to-time" />
                    </div>
                    <select className="date-timestamp" name="to-time" id="to-timestamp">
                        <option value=""></option>
                        <option value="12">12:00</option>
                    </select>
                </div>
                <div>
                    <button>Book Now</button>
                </div>
            </form>
        </section>
    )
}

export default MobileBanner;