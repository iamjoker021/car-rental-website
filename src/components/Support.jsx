const Support = () => {
    const carContent = [
        {name: 'martin', title: 'Profession', imgUrl: 'https://themewagon.github.io/Cental/img/team-1.jpg'},
        {name: 'martin', title: 'Profession', imgUrl: 'https://themewagon.github.io/Cental/img/team-1.jpg'},
        {name: 'martin', title: 'Profession', imgUrl: 'https://themewagon.github.io/Cental/img/team-1.jpg'},
        {name: 'martin', title: 'Profession', imgUrl: 'https://themewagon.github.io/Cental/img/team-1.jpg'},
    ]

    return (
        <section className="central-support padding text-center">
            <h2>Customer <span>Support</span> Cental</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos perspiciatis architecto dolor deserunt hic nostrum molestiae rem excepturi necessitatibus corrupti natus temporibus, nam molestias accusamus consectetur unde! Beatae, distinctio voluptatum?</p>
            <div className="cards">
                {carContent.map(card => (
                    <div className="card">
                        <img src={card.imgUrl} alt="" />
                        <h3>{card.name}</h3>
                        <p>{card.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Support