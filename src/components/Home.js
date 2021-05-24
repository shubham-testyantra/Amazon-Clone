import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div
          id="carouselExampleControls"
          className="carousel slide image_carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg"
                className="d-block w-100 home_image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/May21/Covid_Slot/02_1500x600_pc_Fresh._CB669786696_.jpg"
                className="d-block w-100 home_image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Store/2021/essen_revamp/gw/DesktopTallHero_1500x600._CB668071022_.jpg"
                className="d-block w-100 home_image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600_V2._CB670004437_.jpg"
                className="d-block w-100 home_image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg"
                className="d-block w-100 home_image"
                alt="..."
              />
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
        <div className="home_row">
          <Product
            id="1"
            title="New Apple Watch Series 6 (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
            price={70.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/71OGgziqWvL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
            price={50.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2Bxfz79pWL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="3"
            title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
            price={2240.45}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="4"
            title=" Alienware 34 inch (86.36cm) Curved WQHD Gaming Monitor with HDMI and DP Ports, IPS Panel, 120Hz, 2ms, NVIDIA G-Sync, Tilt, Swivel, Height-Adjustable - AW3420DW (Black)"
            price={2070.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71NJAl4Jz0L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="5"
            title="ASUS ROG Zephyrus Duo 15, 15.6 FHD 300Hz/3ms, Intel Core i7-10875H 10th Gen, RTX 2070 Super Max-Q 8GB Graphics, Gaming Laptop (32GB/1TB SSD/Office 2019/Windows 10/Gray/2.48 Kg), GX550LWS-HF130TS"
            price={2500.49}
            image="https://images-na.ssl-images-amazon.com/images/I/8189czxRlUL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="6"
            title="Echo Studio - Smart speaker with high-fidelity audio, Dolby Atmos and Alexa (Black)"
            price={299.9}
            image="https://images-na.ssl-images-amazon.com/images/I/61Bq3LQhDSL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="7"
            title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Silver)"
            price={285.5}
            image="https://m.media-amazon.com/images/I/714WUJlhbLS._AC_SX522_.jpg"
            rating={5}
          />
          <Product
            id="9"
            title="Marvel's Spider Man (PS4)"
            price={30}
            image="https://images-na.ssl-images-amazon.com/images/I/51ndxZcdt%2BL._AC_.jpg"
            rating={5}
          />
          <Product
            id="10"
            title="F Gear Burner 26 Ltrs Grey Black Casual Backpack (2449) & F Gear Repel Rain & Dust Cover for Laptop Bags and Backpacks"
            price={13.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91NeR40vv0L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
