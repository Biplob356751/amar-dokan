import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./ShopSlider.css"

const ShopSlider = () => {
    const shopSliderData = [
        {
            image: "https://i.pinimg.com/564x/9a/88/02/9a88025df52fc9ec9159420a059c212b.jpg",
            id: "product1",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"

        },
        {
            image: "https://i.pinimg.com/564x/de/36/d7/de36d7a7c1ea78ee5decdb3ccac6b693.jpg",
            id: "product2",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
        },
        {
            image: "https://i.pinimg.com/564x/57/ef/2f/57ef2f937e22adfe1f40ad0e957fbcc9.jpg",
            id: "product3",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
        },
        {
            image: "https://i.pinimg.com/564x/5f/9a/15/5f9a1537110b1f14d81c990ee385617b.jpg",
            id: "product4",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
        },
        {
            image: "https://i.pinimg.com/564x/e4/0f/74/e40f7443d68c6a7f6cafe02f0480717f.jpg",
            id: "product5",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
        },
        {
            image: "https://i.pinimg.com/564x/85/ec/d9/85ecd999e9747fb917212ce0571dcb4f.jpg",
            id: "product6",
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
        }
    ];


    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 500
    };
    return (
        <div className="shop_slider_content">
            <div className="container">
                <Slider {...settings}>
                    {
                        shopSliderData.map(slider =>
                            <div className="slider_img" key={slider.id}>
                                <img src={slider.image} alt="" />
                                <div className="slider_description">
                                    <p>{slider.description}</p>
                                </div>
                            </div>

                        )
                    }
                </Slider>
            </div>
            <div className="container">
                <div className="delivary_info">
                    <div className="shop_delivary_content">
                        <div className="delivary_item">
                            <i class="fas fa-people-carry"></i>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy
                                text used in laying out print, graphic or web designs. The
                                passage is attributed to an unknown </p>
                        </div>
                        <div className="delivary_item">
                            <i class="fas fa-truck"></i>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy
                                text used in laying out print, graphic or web designs. The
                                passage is attributed to an unknown </p>
                        </div>
                        <div className="delivary_item">
                            <i class="fas fa-street-view"></i>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy
                                text used in laying out print, graphic or web designs. The
                                passage is attributed to an unknown </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSlider;