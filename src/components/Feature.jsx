const Feature = () =>  {
    const cardContent = [
        {title: 'First Class Service', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?'},
        {title: 'Quality at Min', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?'},
        {title: '24/7 assistance', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?'},
        {title: 'Free pickup', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?'},
    ]
    return (
        <section className="feature padding">
            <h2 className="text-center">Central <span>Features</span></h2>
            <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consequatur accusantium tempora debitis. Hic, id officiis? Harum ducimus eos, quasi aspernatur earum nulla aliquid inventore saepe omnis corporis. Ratione, dolorem!</p>
            <div className="cards">
                <div className="card">
                    <img src="https://themewagon.github.io/Cental/img/features-img.png" alt="car-image" />
                </div>
                {cardContent.map(car => <div className="card"><h3>{car.title}</h3><p>{car.content}</p></div>)}
            </div>
        </section>
    )
}

export default Feature;