import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";

const Hero = () => {
  const bannerContent = [
    {
      id: 1,
      image: 'https://themewagon.github.io/Cental/img/carousel-1.jpg',
      heading: "WE PLACESS SPACES IN BEST POLICY",
      description:
        'Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer against him and their dangers work to do.',
      buttonText: {
        buttonText: "view details",
        buttonLink: "https://www.google.com",
      },
    },
    {
      id: 2,
      image: 'https://themewagon.github.io/Cental/img/carousel-2.jpg',
      heading: "202 PARK NOW LEASING",
      description:
        "Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer against him and their dangers work to do.",
      buttonText: {
        buttonText: "view Apartment",
        buttonLink: "/Apartment",
      },
    },
  ];

  return (
    <BannerContainer>
      <StyledCarousel autoplay>
        {bannerContent.map((item) => (
          <CarouselItem key={item.id} bgImage={item.image}>
            <CarouselText>
              <h2>{item.heading}</h2>
              <p>{item.description}</p>
            </CarouselText>
          </CarouselItem>
        ))}
      </StyledCarousel>
    </BannerContainer>
  );
};

export default Hero;

const BannerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    text-align: left;
  }
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 500px;
  color: #fff;

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 425px) {
    height: 200px;
  }

  @media (max-width: 375px) {
    height: 180px;
  }

  @media (max-width: 320px) {
    height: 150px;
  }
`;

const CarouselText = styled.div`
  padding: 20px;
  text-align: left;
  max-width: 600px;

  h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
      font-size: 1.75rem;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 425px) {
      font-size: 1.25rem;
    }

    @media (max-width: 375px) {
      font-size: 1.1rem;
    }

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #fff;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 425px) {
      font-size: 0.8rem;
    }

    @media (max-width: 375px) {
      font-size: 0.75rem;
    }

    @media (max-width: 320px) {
      font-size: 0.7rem;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f98866;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62828;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
    padding: 5px 10px;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
    padding: 4px 8px;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
    padding: 3px 6px;
  }
`;