import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import styled from "styled-components";

const HomePage = () => {
  let [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  let catArray = [];
  let url = [
    "https://api.thecatapi.com/v1/images/BDb8ZXb1v",
    "https://api.thecatapi.com/v1/images/B1ERTmgph",
    "https://api.thecatapi.com/v1/images/DbwiefiaY",
    "https://api.thecatapi.com/v1/images/4RzEwvyzz",
    "https://api.thecatapi.com/v1/images/OOD3VXAQn",
    "https://api.thecatapi.com/v1/images/sxIXJax6h",
    "https://api.thecatapi.com/v1/images/-tm9-znzl",
    "https://api.thecatapi.com/v1/images/TuSyTkt2n",
    "https://api.thecatapi.com/v1/images/IFXsxmXLm",
    "https://api.thecatapi.com/v1/images/j6oFGLpRG",
    "https://api.thecatapi.com/v1/images/njK25knLH",
    "https://api.thecatapi.com/v1/images/ai6Jps4sx",
  ];

  useEffect(() => {
    const fetchData = async () => {
      for (let i = 0; i < url.length; i++) {
        try {
          let one = await fetch(url[i]);
          let two = await one.json();
          catArray.push(two);
        } catch (error) {
          console.log("Error");
        } finally {
          console.log(data);
        }
      }
      setisLoading(false);
      setData(catArray);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <LoadingDiv />}
      {data && !isLoading && (
        <div>
          <Rowofcats>
            <div className="column">
              {
                <u>
                  <h2>{data[0].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[0].url}
                  width="200"
                  height="150"
                  alt="Sphynx"
                />
              }
              <Link to={`/product/${data[0].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[1].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[1].url}
                  width="200"
                  height="150"
                  alt="California Spangled"
                />
              }
              <Link to={`/product/${data[1].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[2].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[2].url}
                  width="200"
                  height="150"
                  alt="Korat"
                />
              }
              <Link to={`/product/${data[2].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[3].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[3].url}
                  width="200"
                  height="150"
                  alt="Devon Rex"
                />
              }
              <Link to={`/product/${data[3].id}`}>View More Details</Link>
            </div>
          </Rowofcats>

          <Rowofcats>
            <div className="column">
              {
                <u>
                  <h2>{data[4].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[4].url}
                  width="200"
                  height="150"
                  alt="Maine Coon"
                />
              }
              <Link to={`/product/${data[4].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[5].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[5].url}
                  width="200"
                  height="150"
                  alt="Turkish Van"
                />
              }
              <Link to={`/product/${data[5].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[6].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[6].url}
                  width="200"
                  height="150"
                  alt="Japanese Bobtail"
                />
              }
              <Link to={`/product/${data[6].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[7].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[7].url}
                  width="200"
                  height="150"
                  alt="Egyptian Mau"
                />
              }
              <Link to={`/product/${data[7].id}`}>View More Details</Link>
            </div>
          </Rowofcats>

          <Rowofcats>
            <div className="column">
              {
                <u>
                  <h2>{data[8].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[8].url}
                  width="200"
                  height="150"
                  alt="Bengal"
                />
              }
              <Link to={`/product/${data[8].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[9].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[9].url}
                  width="200"
                  height="150"
                  alt="Chartreux"
                />
              }
              <Link to={`/product/${data[9].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[10].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[10].url}
                  width="200"
                  height="150"
                  alt="Havana Brown"
                />
              }
              <Link to={`/product/${data[10].id}`}>View More Details</Link>
            </div>

            <div className="column">
              {
                <u>
                  <h2>{data[11].breeds[0].name}</h2>
                </u>
              }
              {
                <img
                  className="images"
                  src={data[11].url}
                  width="200"
                  height="150"
                  alt="Siamese"
                />
              }
              <Link to={`/product/${data[11].id}`}>View More Details</Link>
            </div>
          </Rowofcats>
        </div>
      )}{" "}
    </>
  );
};

export default HomePage;

const Rowofcats = styled.div`
  display: flex;
  margin: 2%;
  justify-content: space-evenly;

  .column {
    display: flex;
    padding: 1%;
    width: 50%;
    margin: 0 10px;
    align-items: center;
    flex-direction: column;
    box-shadow: 2px 2px 10px #cccccc;
  }

  .images {
    border: thin solid black;
    border-radius: 10px;
    margin: 3%;
  }
`;

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
