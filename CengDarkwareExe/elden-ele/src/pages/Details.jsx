import { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import UserContact from "../components/UserContact";
import VehicleDetails from "./categorizedDetails/VehicleDetails";
import ResidenceDetails from "./categorizedDetails/ResidenceDetails";
import HomeAndGarden from "./categorizedDetails/HomeAndGardenDetails";
import ElektronicDetails from "./categorizedDetails/ElectronicDetails";
import FashionDetails from "./categorizedDetails/FashionDetails";
import Image1 from "../assets/ilan2.jpg";
import Footer from "../components/Footer";

function Details(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div style={{ marginTop: 100 }} className="container">
        <h1>Supra</h1>
        <hr />
        <div className="row">
          <div>
            <b>Kategori: </b>
            <a href="/category">Vasıta</a>
          </div>
          <div className="col-md-6">
            <img src={Image1} style={{ width: "50%", height: "50%" }} />
          </div>
          <div className="col-md-3">
            <h5 className="text-primary">13000</h5>
            <div className="bread">
              <nav aria-label="breadcrumb">
                <ol style={{ backgroundColor: "white" }} class="breadcrumb">
                  <li class="breadcrumb-item">Aydın</li>
                  <li class="breadcrumb-item">Germencik</li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Turanlar Mah.
                  </li>
                </ol>
              </nav>
            </div>
            <Divider />
            <div className="d-flex flex-nowrap justify-content-between">
              <b>İlan No</b>
              <p>201354</p>
            </div>
            <Divider />
            <div className="d-flex flex-nowrap justify-content-between">
              <b>İlan Tarihi</b>
              <p>10 Mayıs 2023</p>
            </div>
            <Divider />

            {/* <FashionDetails
              brand={"Cuggi"}
              color={"Mavi"}
              material={"Pamuk"}
              style={"İspanyol Paça"}
              type={"Alt Giyim"}
            /> */}

            {/* <ElektronicDetails
              marka={"Apple"}
              renk={"Siyah"}
              model={"14 Pro Max"}
              turu={"Telefon"}
              garanti={"evet"}
            /> */}

            {/* <HomeAndGarden
              brand={"Kardeşler"}
              color={"Yeşil"}
              condition={"sifir"}
              material={"Plastik"}
              type={"Kürek"}
              warranty={true}
            /> */}

            {/* <ResidenceDetails
              age={20}
              balcony={true}
              bathCount={1}
              dues={"Yıllık"}
              floor={5}
              furnished={true}
              onSite={true}
              roomCount={5}
              typeOfHeating={"Doğalgaz"}
            /> */}
            <VehicleDetails
              agirhasarkayit={"yok"}
              durumu={"ikinci el"}
              garanti={"yok"}
              kasatipi={"sedan"}
              marka={"Toyota"}
              model={"3.0 Turbo"}
              motorgucu={"319hp"}
              motorhacmi={"3.9v"}
              renk={"kırmızı"}
              seri={"Supra"}
              vites={"Manuel"}
              yil={"2001"}
            />
          </div>

          <UserContact name={"Sezer Karakaş"} phoneNumber={"2565691216"} />
        </div>
        <br />
        <div className="row">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "about" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("about")}
                >
                  İlan Açıklaması
                </a>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "about" ? "show active" : ""
                }`}
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                İlan Detayları
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "specification" ? "show active" : ""
                }`}
                id="specification"
                role="tabpanel"
                aria-labelledby="specification-tab"
              >
                Supra modifiye edilebilir bir arabadır. Her türden modifiye
                yapılabilir.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Divider = styled.div`
  border-top: 1px solid #dbdbdb;
  padding: 2px 0;
`;

export default Details;