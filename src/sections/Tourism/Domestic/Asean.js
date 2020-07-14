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

class Asean extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          "name": "Batam - Bintan",
          "destination_url": "https://drive.google.com/file/d/1pZP0BomU_R9Puu07LB7t4pT6Wtuel-bx/view?usp=sharing",
          "photo": Batam
        },
        {
          "name": "Aceh (Malaysian Market)",
          "destination_url": "https://drive.google.com/file/d/1_V9CMR3GUwZFgofe9_C9iA_-NsxSNl7t/view?usp=sharing",
          "photo": Aceh
        },
        {
          "name": "Bali",
          "destination_url": "https://drive.google.com/file/d/1SxqoKife6zDsSerzvSP3iOqgqKsMEyKX/view?usp=sharing",
          "photo": Bali
        },
        {
          "name": "Belitung",
          "destination_url": "https://drive.google.com/file/d/1LHU21alycOjxogsnsibWb3KyqvpGJvbJ/view?usp=sharing",
          "photo": Belitung
        },
        {
          "name": "Bengkulu",
          "destination_url": "https://drive.google.com/file/d/1HQc34PyYJ3WZXfdbEJWuGPhV05t2v0k4/view?usp=sharing",
          "photo": Bengkulu
        },
        {
          "name": "Jogja",
          "destination_url": "https://drive.google.com/file/d/18VqgPUKx1Pn6MNWTAE2nzlFdE85owxoV/view?usp=sharing",
          "photo": Jogja
        },
        {
          "name": "Labuan Bajo",
          "destination_url": "https://drive.google.com/file/d/1UnLknPJzFvLhES2_5zVdC8-vsAc5gp4Z/view?usp=sharing",
          "photo": Labuan
        },
        {
          "name": "Lampung",
          "destination_url": "https://drive.google.com/file/d/1KRE2zwwM1RvPj6m2qb5jRfdkXPlScgl-/view?usp=sharing",
          "photo": Lampung
        },
        {
          "name": "Lombok",
          "destination_url": "https://drive.google.com/file/d/1WHcHBFr2726WJk1chCbVKV6Z35Ouh4pb/view?usp=sharing",
          "photo": Lombok
        },
        {
          "name": "Malang",
          "destination_url": "https://drive.google.com/file/d/1gTM0E837fQY1zkeEemLTRTujgT6D6MO8/view?usp=sharing",
          "photo": Malang
        },
        {
          "name": "Manado",
          "destination_url": "https://drive.google.com/file/d/1zRqMLDbEZtrxicJl87o9RX9HRishente/view?usp=sharing",
          "photo": Manado
        },
        {
          "name": "Medan",
          "destination_url": "https://drive.google.com/file/d/12XraPYijpUR29QcFvH6m1R1d9zPAiVJ8/view?usp=sharing",
          "photo": Medan
        },
        {
          "name": "Padang",
          "destination_url": "https://drive.google.com/file/d/1PgrYCIYtoXq2FE3j5eYVytDL8QJO3dQQ/view?usp=sharing",
          "photo": Padang
        },
        {
          "name": "Palembang",
          "destination_url": "https://drive.google.com/file/d/1ilg-c77YCCqvE1wv6WhBfa36TEK4x40V/view?usp=sharing",
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
          <h2>Tour Indonesia for Asean Market</h2>
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

export default Asean;
