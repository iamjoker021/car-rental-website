const Services = () => {

    const carContent = [
        {title: 'Phone reserve', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit exercitationem sequi corporis in accusantium nobis adipisci, inventore tempora cum vel commodi possimus, aut nostrum. A autem consequatur consectetur provident!'},
        {title: 'Phone reserve', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit exercitationem sequi corporis in accusantium nobis adipisci, inventore tempora cum vel commodi possimus, aut nostrum. A autem consequatur consectetur provident!'},
        {title: 'Phone reserve', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit exercitationem sequi corporis in accusantium nobis adipisci, inventore tempora cum vel commodi possimus, aut nostrum. A autem consequatur consectetur provident!'},
        {title: 'Phone reserve', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit exercitationem sequi corporis in accusantium nobis adipisci, inventore tempora cum vel commodi possimus, aut nostrum. A autem consequatur consectetur provident!'},
        {title: 'Phone reserve', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit exercitationem sequi corporis in accusantium nobis adipisci, inventore tempora cum vel commodi possimus, aut nostrum. A autem consequatur consectetur provident!'},
        {title: 'Phone reserve', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis suscipit exercitationem sequi corporis in accusantium nobis adipisci, inventore tempora cum vel commodi possimus, aut nostrum. A autem consequatur consectetur provident!'},
    ]

    return (
        <section className="services padding text-center">
            <h2>Central <span>Services</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos perferendis voluptatum sint exercitationem voluptatem? Id asperiores illum quisquam laudantium beatae dolorum quasi a, ullam omnis, odit, necessitatibus repellat. Aliquam, ex.</p>
            <div className="cards">
                {carContent.map(card => (
                    <div className="card">     
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;