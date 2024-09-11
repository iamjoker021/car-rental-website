import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientReview = () => {
    const carContent = [
        {name: 'name', title: 'profesion', rating: 3.5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.', imgUrl: 'https://themewagon.github.io/Cental/img/testimonial-1.jpg'},
        {name: 'name', title: 'profesion', rating: 3.5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.', imgUrl: 'https://themewagon.github.io/Cental/img/testimonial-1.jpg'},
        {name: 'name', title: 'profesion', rating: 3.5, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.', imgUrl: 'https://themewagon.github.io/Cental/img/testimonial-1.jpg'},
    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <section className="client-review padding">
            <h2 className="text-center">Our Client <span>Review</span></h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti, fuga dignissimos ipsam minus, reiciendis quaerat delectus libero sint tenetur minima! Nemo animi, asperiores explicabo incidunt maxime blanditiis ipsa omnis.</p>
            <div className="cards">
                <Slider {...settings}>
                {carContent.map(card => (
                    <div className="card">
                        <div>
                            <img src={card.imgUrl} alt="" />
                            <div>
                                <h3>{card.name}</h3>
                                <p>{card.title}</p>
                                <p>{card.rating}</p>
                            </div>
                        </div>
                        <div>
                            <p>{card.content}</p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default ClientReview;