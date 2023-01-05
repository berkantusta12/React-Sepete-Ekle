import "./App.css";
import { createElement, useState } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Kot Pantolon",
      image: "https://static.bershka.net/4/photos2/2022/I/0/1/p/5048/665/400/3e1e1c41a4690034a822111e8b481ec3-5048665400_2_4_0.jpg?imwidth=563&impolicy=bershka-itxmediumhigh&imformat=chrome",
      info: "Açık Mavi 29 Beden",
      adet: 1,
    },
    {
      id: 2,
      title: "Tişört",
      image:
        "https://cdn.cimri.io/image/240x240/columbia-am0126-utilizer-polo-erkek-tisort_67335606.jpg",
      info: "Kırmızı M beden",
      adet: 1,
    },
    {
      id: 3,
      title: "Şapka",
      image:
        "https://productimages.hepsiburada.net/l/27/600-800/10212878090290.jpg",
      info: "Siyah",
      adet: 1,
    },
    {
      id: 4,
      title: "Ayakkabı",
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b79b114b16e544c9b6b3aeb4015f9dbe_9366/futurevulc-lifestyle-skateboarding-ayakkab%C4%B1.jpg",
      info: "39 Numara Adidas",
      adet: 1,
    },
  ]);

  const [basket, setBasket, ] = useState([]);
  return (
    <div className="App">
      <h1> Reactyol</h1>
      <h2> Haftanın Trendleri</h2>
      <div className="urunler">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                if (
                  arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1
                ) {
                  arr.push(eleman);
                  setBasket(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === eleman.id) {
                      return (eleman.adet += 1);
                    }
                    setBasket(arr);
                  });
                }

                console.log(basket);
              }}
              key={index}
              title={eleman.title}
              image={eleman.image}
              info={eleman.info}
            />
          );
        })}
      </div>
      <div className="sepet">
        <h2>SEPETİMİZ</h2>
        <ul className="sepet">
          {basket.map((eleman, index) => {
            return (
              <li>
                {eleman.title + "---->" + eleman.info + " Adet: "}{""}
                <b id="b" style={{ fontSize: "24px", color: "#283c86" }}>
                  {eleman.adet}
                </b>
              </li>
            );
          })}
        </ul>
        {basket.length > 0 ? (
          <button className="button"
            onClick={() => {
              setBasket([])
              
              

              

              
              
            }}
            

            
           >
            Sepeti Temizle
          </button>
          

        ) : (
          <h2> Sepetinizde Ürün Bulunmamaktadır.</h2>
        )}
      </div>
    </div>
  );
}

export default App;
