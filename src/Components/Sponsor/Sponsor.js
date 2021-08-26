import React from 'react';
import './Sponsor.css'

const Sponsor = () => {
    const sponsor = [
        {image: "https://images.squarespace-cdn.com/content/v1/5a459ea9692ebe7dcf9ca9ff/1616586587690-3FQ25CBECPJ0RH8CEP1H/Amazon-logo.png?format=1000w",id: 201},
        {image: "https://iconape.com/wp-content/files/zx/67354/svg/hyperx.svg",id: 202},
        {image: "https://www.leedsfestival.com/wp-content/uploads/2019/02/calsberg-rl-partners-pg.png",id: 203},
        {image: "https://www.pngkit.com/png/full/273-2733102_audi-r8-sponsor-logo.png",id: 204},
        {image: "https://freepikpsd.com/media/2019/10/logo-sponsor-png-6-Transparent-Images.png",id: 205},
        {image: "https://lh3.googleusercontent.com/proxy/WEaUVD-xgJyqRwpYwUSJYPEseilOnohOAb0Uqy72N3eTE_7S2_pE7KcjtnxYsI58Qi7atBfQNWhc3QPmVojtZfkswl94LZz7vmoQL4OUwr2Mk55SN4EHMGQl45EtGAm2Cqzk_SUpXjMgAztrutcZhvMIl6gWnQ",id: 206},
        {image: "https://lh3.googleusercontent.com/proxy/WEaUVD-xgJyqRwpYwUSJYPEseilOnohOAb0Uqy72N3eTE_7S2_pE7KcjtnxYsI58Qi7atBfQNWhc3QPmVojtZfkswl94LZz7vmoQL4OUwr2Mk55SN4EHMGQl45EtGAm2Cqzk_SUpXjMgAztrutcZhvMIl6gWnQ",id: 207},
        {image: "https://freepikpsd.com/media/2019/10/logo-sponsor-png-6-Transparent-Images.png",id: 208},
        {image: "https://www.pngkit.com/png/full/273-2733102_audi-r8-sponsor-logo.png",id: 209},
        {image: "https://www.leedsfestival.com/wp-content/uploads/2019/02/calsberg-rl-partners-pg.png",id: 210},
        {image: "https://iconape.com/wp-content/files/zx/67354/svg/hyperx.svg",id: 211},
        {image: "https://images.squarespace-cdn.com/content/v1/5a459ea9692ebe7dcf9ca9ff/1616586587690-3FQ25CBECPJ0RH8CEP1H/Amazon-logo.png?format=1000w",id: 212}

    ]
    return (
        <div className="sponsor_content">
           {
               sponsor.map(sponsor =>
                <div className="sponsor_item" key={sponsor.id}>
                    <img src={sponsor.image} alt="image" />
               </div>
               )
           } 
        </div>
    );
};

export default Sponsor;