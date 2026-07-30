import React from "react";
import "./App.css";

function App() {
  const exhausts = [
    {
      name: "SC Project",
      image: "https://sc-project.com/wp-content/uploads/2025/11/CRT_Carbonio-1.avif",
      website: "https://www.sc-project.com",
    },
    {
      name: "Arrow",
      image: "https://tse3.mm.bing.net/th/id/OIP.q0G7XEiFEVAwKgcFcGVxkQHaFh?rs=1&pid=ImgDetMain&o=7&rm=3",
      website: "https://www.arrow.it",
    },
    {
      name: "Akrapovic",
      image: "https://th.bing.com/th/id/OIP.7cXCRQpSdHoBs5GjwIUj_AHaFj?w=228&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      website: "https://www.akrapovic.com",
    },
    {
      name: "LeoVince",
      image: "https://tse3.mm.bing.net/th/id/OIP.APvo44uf1PjN3JPiMiFUnwAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
      website: "https://www.leovince.com",
    },
    {
      name: "IXIL",
      image: "https://th.bing.com/th/id/OIP.hx44DicpbvGzNYLEesoEmwHaHa?w=211&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      website: "https://www.ixil.com",
    },
    {
      name: "Austin Racing",
      image: "https://tse4.mm.bing.net/th/id/OIP.HkO9XQ9xfDAY3XB94n11DgHaD8?rs=1&pid=ImgDetMain&o=7&rm=3",
      website: "https://www.austinracing.com",
    },
    {
      name: "Racefit",
      image: "https://tse4.mm.bing.net/th/id/OIP.vkMM0XynWY4ItD1q0Re9yQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
      website: "https://www.racefit.co.uk",
    },
    {
      name: "Spark",
      image: "https://2wheelshero.com/cdn/shop/products/609400b01e4e1_02c08705-0a3e-4100-a77c-fc4451f4e701_580x.jpg?v=1624359531",
      website: "https://www.sparkexhaust.com",
    },
    {
      name: "Yoshimura",
      image: "https://hardracing.com/images/product/13630AP521.jpg",
      website: "https://www.yoshimura-rd.com",
    },
    {
      name: "Brocks",
      image: "https://www.dragbike.com/wp-content/uploads/320273_S1000RR_CT_Single_Full_System_5_Zoom__47046.jpg",
      website: "https://www.brocksperformance.com",
    },
    {
      name: "M4",
      image: "https://m4exhaust.com/wp-content/uploads/Black-RM1-CAT-Delete-3-760x427.jpg",
      website: "https://www.m4exhaust.com",
    },
    {
      name: "GPR",
      image: "https://tse3.mm.bing.net/th/id/OIP.DRn5mHGZilZd9KaMiuGVHQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      website: "https://www.gpr.it",
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>Superbike Exhaust Collection</h1>
        <p>Premium Exhaust Brands For Superbikes</p>
      </header>

      <div className="card-container">
        {exhausts.map((brand, index) => (
          <div className="card" key={index}>
            <img src={brand.image} alt={brand.name} />
            <h2>{brand.name}</h2>
            <a
              href={brand.website}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;