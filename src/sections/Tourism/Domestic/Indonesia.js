import React from 'react';
import '../../../scss/Indonesia.scss';

import Aceh from "../../../assets/tour_indonesia/ACEH.jpg";
import Ambon from "../../../assets/tour_indonesia/AMBON.jpg";
import Batam from "../../../assets/tour_indonesia/BATAM.jpg";
import Bali from "../../../assets/tour_indonesia/BALI.jpg";
import Belitung from "../../../assets/tour_indonesia/BELITUNG.jpg";
import Bengkulu from "../../../assets/tour_indonesia/BENGKULU.jpg";
import Jogja from "../../../assets/tour_indonesia/JOGJA.jpg";
import Labuan from "../../../assets/tour_indonesia/LABUAN-BAJO.jpg";
import Lampung from "../../../assets/tour_indonesia/LAMPUNG.jpg";
import Lombok from "../../../assets/tour_indonesia/LOMBOK.jpg";
import Makassar from "../../../assets/tour_indonesia/MAKASSAR.jpg";
import Malang from "../../../assets/tour_indonesia/MALANG.jpg";
import Manado from "../../../assets/tour_indonesia/MANADO.jpg";
import Medan from "../../../assets/tour_indonesia/MEDAN.jpg";
import Padang from "../../../assets/tour_indonesia/PADANG.jpg";
import Palembang from "../../../assets/tour_indonesia/PALEMBANG.jpg";
import RajaAmpat from "../../../assets/tour_indonesia/RAJA AMPAT.jpg";
import Semarang from "../../../assets/tour_indonesia/SEMARANG.jpg";

class Indonesia extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          "name": "Batam - Bintan",
          "destination_url": "https://drive.google.com/file/d/1wDOc29WgceFxAlMbI2qmwVvzBF_t1I-W/view?usp=sharing",
          "photo": Batam
        },
        {
          "name": "Aceh",
          "destination_url": "https://drive.google.com/file/d/1-QYnFR3QQEsB2lbUmsjtXguZSbHlusE4/view?usp=sharing",
          "photo": Aceh
        },
        {
          "name": "Ambon",
          "destination_url": "https://drive.google.com/file/d/1aDByW5dhtZmUjfVqrlq3zwIPoKK47lEC/view?usp=sharing",
          "photo": Ambon
        },
        {
          "name": "Bali",
          "destination_url": "https://drive.google.com/file/d/14y7oBa1VFHHq1dpBWg-IHjlQ781LZAo_/view?usp=sharing",
          "photo": Bali
        },
        {
          "name": "Belitung",
          "destination_url": "https://drive.google.com/file/d/1m778SVA9A2BUyoOvwENBuHi0wYNpPsmH/view?usp=sharing",
          "photo": Belitung
        },
        {
          "name": "Bengkulu",
          "destination_url": "https://drive.google.com/file/d/15IfUFfs-gfPkXCuMi2SBOLISrjIWntd6/view?usp=sharing",
          "photo": Bengkulu
        },
        {
          "name": "Jogja",
          "destination_url": "https://drive.google.com/file/d/1KdFwIycJuVioRHXzOPggc0XWvNbFp_rw/view?usp=sharing",
          "photo": Jogja
        },
        {
          "name": "Labuan Bajo",
          "destination_url": "https://drive.google.com/file/d/1T-kiUB70C8HL80uGXgiX6XkJAAPhWWau/view?usp=sharing",
          "photo": Labuan
        },
        {
          "name": "Lampung",
          "destination_url": "https://drive.google.com/file/d/1h3I4VAOayXgmWKOUO-sfZOTd3PyIQrsI/view?usp=sharing",
          "photo": Lampung
        },
        {
          "name": "Lombok",
          "destination_url": "https://drive.google.com/file/d/1IOTuLiEBlsdVFJpl5iVP02koAPF2ZHJR/view?usp=sharing",
          "photo": Lombok
        },
        {
          "name": "Makassar",
          "destination_url": "https://drive.google.com/file/d/1NlRlwiHXAJEMrQAT-5VYjFGpaP5_q74Y/view?usp=sharing",
          "photo": Makassar
        },
        {
          "name": "Malang Raya",
          "destination_url": "https://drive.google.com/file/d/1ua9a5NMRbiNSkuRt0qSCDxoBaa2QuYGO/view?usp=sharing",
          "photo": Malang
        },
        {
          "name": "Manado",
          "destination_url": "https://drive.google.com/file/d/1F6uc_6kPDms9LevkpFWifF5o-dDTj81k/view?usp=sharing",
          "photo": Manado
        },
        {
          "name": "Medan",
          "destination_url": "https://drive.google.com/file/d/1dcMZIO_2y90RHzl320sRfb5MncCwOkGP/view?usp=sharing",
          "photo": Medan
        },
        {
          "name": "Padang",
          "destination_url": "https://drive.google.com/file/d/16uQZzLjeBr4VNZzbDpI5PZXVLqbs_iJp/view?usp=sharing",
          "photo": Padang
        },
        {
          "name": "Palembang",
          "destination_url": "https://drive.google.com/file/d/12YNgFgZyZGvkKOc1HXQQ2IYcuqh9SOjH/view?usp=sharing",
          "photo": Palembang
        },
        {
          "name": "Raja Ampat",
          "destination_url": "https://drive.google.com/file/d/12qBycw497yU-tQoumIh6C8YWWMzuqqIA/view?usp=sharing",
          "photo": RajaAmpat
        },
        {
          "name": "Semarang",
          "destination_url": "https://drive.google.com/file/d/1kdwCMdaNv0H5-bB0FvV_iCsxdmFr594O/view?usp=sharing",
          "photo": Semarang
        },
      ]
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
