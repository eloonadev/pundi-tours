import React from 'react';
import '../../../scss/Indonesia.scss';

import Aceh from "../../../assets/tour_indonesia/ACEH.jpg";
import Batam from "../../../assets/tour_indonesia/BATAM.jpg";
import Bali from "../../../assets/tour_indonesia/BALI.jpg";
import Belitung from "../../../assets/tour_indonesia/BELITUNG.jpg";
import Bengkulu from "../../../assets/tour_indonesia/BENGKULU.jpg";
import Jogja from "../../../assets/tour_indonesia/JOGJA.jpg";
import Labuan from "../../../assets/tour_indonesia/LABUAN-BAJO.jpg";
import Lampung from "../../../assets/tour_indonesia/LAMPUNG.jpg";
import Lombok from "../../../assets/tour_indonesia/LOMBOK.jpg";
import Malang from "../../../assets/tour_indonesia/MALANG.jpg";
import Manado from "../../../assets/tour_indonesia/MANADO.jpg";
import Medan from "../../../assets/tour_indonesia/MEDAN.jpg";
import Padang from "../../../assets/tour_indonesia/PADANG.jpg";
import Palembang from "../../../assets/tour_indonesia/PALEMBANG.jpg";

class Indonesia extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          "name": "Batam - Bintan",
          "destination_url": "https://drive.google.com/file/d/1btIYs162dBdMLTh1BTwyCf9pVi-Nbww7/view?usp=sharing",
          "photo": Batam
        },
        {
          "name": "Aceh",
          "destination_url": "https://drive.google.com/file/d/1sgv4w3filOtICsdhiOjJHPtH73wKQ8ao/view?usp=sharing",
          "photo": Aceh
        },
        {
          "name": "Bali",
          "destination_url": "https://drive.google.com/file/d/1TXUZO9jvpBWoGwZsghWMP61c94yDfTuG/view?usp=sharing",
          "photo": Bali
        },
        {
          "name": "Belitung",
          "destination_url": "https://drive.google.com/file/d/13ZOWz56iDaPrTq6QdKl5uMdbc25cnh4I/view?usp=sharing",
          "photo": Belitung
        },
        {
          "name": "Bengkulu",
          "destination_url": "https://drive.google.com/file/d/1bzFCgO7GugZ5T0VImfgbPSymam3ZFp4j/view?usp=sharing",
          "photo": Bengkulu
        },
        {
          "name": "Jogja",
          "destination_url": "https://drive.google.com/file/d/1bzFCgO7GugZ5T0VImfgbPSymam3ZFp4j/view?usp=sharing",
          "photo": Jogja
        },
        {
          "name": "Labuan Bajo",
          "destination_url": "https://drive.google.com/file/d/1mwOnqZISaTyO32s03W5jKYPBLLjCaH7n/view?usp=sharing",
          "photo": Labuan
        },
        {
          "name": "Lampung",
          "destination_url": "https://drive.google.com/file/d/1mwOnqZISaTyO32s03W5jKYPBLLjCaH7n/view?usp=sharing",
          "photo": Lampung
        },
        {
          "name": "Lombok",
          "destination_url": "https://drive.google.com/file/d/1mwOnqZISaTyO32s03W5jKYPBLLjCaH7n/view?usp=sharing",
          "photo": Lombok
        },
        {
          "name": "Malang",
          "destination_url": "https://drive.google.com/file/d/10kE6FvTCJ6m0-gJhIiPbHTyyJHpBFbLu/view?usp=sharing",
          "photo": Malang
        },
        {
          "name": "Manado",
          "destination_url": "https://drive.google.com/file/d/1QF2vtXu_AxdhS8Qm9ku53N2vKX-_eTrn/view?usp=sharing",
          "photo": Manado
        },
        {
          "name": "Medan",
          "destination_url": "https://drive.google.com/file/d/1LmPDoZf0tVCQbOHbD2fPyRVAF0Jh0fSQ/view?usp=sharing",
          "photo": Medan
        },
        {
          "name": "Padang",
          "destination_url": "https://drive.google.com/file/d/1nUJ6_6ET1wTR2cGHUQEgI2rGWw6EWCen/view?usp=sharing",
          "photo": Padang
        },
        {
          "name": "Palembang",
          "destination_url": "https://drive.google.com/file/d/1deuYE-Sgt3B6cxUfu7Q8tUUV9lfAr0Uu/view?usp=sharing",
          "photo": Palembang
        },
      ]
    }
  }

  render() {
    const Maps = this.state.data.map(item => {
      return (
        <li className="grid-service--list">
          <div className="card-wrapper">
            <img src={item.photo} style={{ width: "240px", height: "200px" }} alt={item.name} />
            <a href={item.destination_url} className="title-wrapper" target="_blank" rel="noopener noreferrer">
              <p>{item.name}</p>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </li>
      )
    })
    return (
      <section className="hero-domestic">
        <div className="hero-domestic--inner">
          <h2>Tour Indonesia for Domestic Market</h2>
          <div className="pundi-tour-places">
            <ul className="grid-servive">
              {Maps}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Indonesia;
