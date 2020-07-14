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

class Foreign extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          "name": "Batam - Bintan",
          "destination_url": "https://drive.google.com/file/d/1Afc7SwJ0rwTb72calezQUrUkCBPivjOe/view?usp=sharing",
          "photo": Batam
        },
        {
          "name": "Aceh",
          "destination_url": "https://drive.google.com/file/d/1TIVhR3LZc9xcrqoNlI5DZBm5sUbymZ2F/view?usp=sharing",
          "photo": Aceh
        },
        {
          "name": "Bali",
          "destination_url": "https://drive.google.com/file/d/1sl_NQLQVbcPy5qLP6jwK2Xyaf9Ff_Tp8/view?usp=sharing",
          "photo": Bali
        },
        {
          "name": "Belitung",
          "destination_url": "https://drive.google.com/file/d/1Mn2SZiDEVqD_2IAfMlMT_bTyqyWUnGYV/view?usp=sharing",
          "photo": Belitung
        },
        {
          "name": "Bengkulu",
          "destination_url": "https://drive.google.com/file/d/1WCIxZUKvTTYgn2IZkC49Ffjg7nTvnn7O/view?usp=sharing",
          "photo": Bengkulu
        },
        {
          "name": "Jogja",
          "destination_url": "https://drive.google.com/file/d/1F5Pe6AZ0UEq7R0JdBwY_VwFAuSBkZOgT/view?usp=sharing",
          "photo": Jogja
        },
        {
          "name": "Labuan Bajo",
          "destination_url": "https://drive.google.com/file/d/1aG3qHLQzozWLVWKbwv0tTwBrBtMsrVTD/view?usp=sharing",
          "photo": Labuan
        },
        {
          "name": "Lampung",
          "destination_url": "https://drive.google.com/file/d/1oX_Uou367cOfzutPdkcV3PvfGEJH0l4g/view?usp=sharing",
          "photo": Lampung
        },
        {
          "name": "Lombok",
          "destination_url": "https://drive.google.com/file/d/1Vwb5XzaQFx8u9aTJEW-Y8xsQ1NRI3Qih/view?usp=sharing",
          "photo": Lombok
        },
        {
          "name": "Malang Raya",
          "destination_url": "https://drive.google.com/file/d/1SLCMxRfqdZIRErl3cMNnEGozCtSQpib0/view?usp=sharing",
          "photo": Malang
        },
        {
          "name": "Manado",
          "destination_url": "https://drive.google.com/file/d/1mSF-RmFXyftRnaDMcGG1B6qNRQ5C5Jau/view?usp=sharing",
          "photo": Manado
        },
        {
          "name": "Medan",
          "destination_url": "https://drive.google.com/file/d/1pH0Hn13uvoJiSmgwrl30RE8dMhLbCII1/view?usp=sharing",
          "photo": Medan
        },
        {
          "name": "Padang",
          "destination_url": "https://drive.google.com/file/d/1q5COLTlrwcdraBaYumqtxVtilnFdl4ad/view?usp=sharing",
          "photo": Padang
        },
        {
          "name": "Palembang",
          "destination_url": "https://drive.google.com/file/d/17XV3FwD0lIDZMaVCHnridh2daZ9-R3Zl/view?usp=sharing",
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
      );
    })
    return (
      <section className="hero-domestic">
        <div className="hero-domestic--inner">
          <h2>Tour Indonesia for Foreign Market</h2>
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

export default Foreign;
