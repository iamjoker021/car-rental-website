const ClientReview = () => {
    const carContent = [
        {name: 'name', title: 'profesion', rating: 3.5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.', imgUrl: 'https://themewagon.github.io/Cental/img/testimonial-1.jpg'},
        {name: 'name', title: 'profesion', rating: 3.5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.', imgUrl: 'https://themewagon.github.io/Cental/img/testimonial-1.jpg'},
        {name: 'name', title: 'profesion', rating: 3.5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.', imgUrl: 'https://themewagon.github.io/Cental/img/testimonial-1.jpg'},
    ]

    return (
        <section className="client-review padding">
            <h2 className="text-center">Our Client <span>Review</span></h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.</p>
            <div className="cards">
                {carContent.map(card => (
                    <div className="card">
                        <img src={card.imgUrl} alt="" />
                        <h3>{card.name}</h3>
                        <p>{card.title}</p>
                        <p>{card.rating}</p>
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ClientReview;