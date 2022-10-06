import { useEffect, useState } from "react";

export const CatAPI = () => {
  const [data, setData] = useState([]);
  const catArray = [];

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://api.thecatapi.com/v1/images/BDb8ZXb1v" // sphy
      );
      let data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/B1ERTmgph");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/DbwiefiaY");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/4RzEwvyzz");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/OOD3VXAQn");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/sxIXJax6h");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/-tm9-znzl");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/TuSyTkt2n");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/IFXsxmXLm");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/j6oFGLpRG");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/njK25knLH");
      data = await response.json();
      setData(data);
      catArray.push(data);
      response = await fetch("https://api.thecatapi.com/v1/images/ai6Jps4sx");
      data = await response.json();
      setData(data);
      catArray.push(data);

      console.log(catArray);
    };
    fetchData();
  }, []);
};
