import { useEffect, useState } from "react";

export const CatAPI = () => {
  let [data, setData] = useState([]);
  let catArray = [];
  let url = ["https://api.thecatapi.com/v1/images/BDb8ZXb1v", "https://api.thecatapi.com/v1/images/B1ERTmgph", "https://api.thecatapi.com/v1/images/DbwiefiaY", "https://api.thecatapi.com/v1/images/4RzEwvyzz", "https://api.thecatapi.com/v1/images/OOD3VXAQn", "https://api.thecatapi.com/v1/images/sxIXJax6h", "https://api.thecatapi.com/v1/images/-tm9-znzl", "https://api.thecatapi.com/v1/images/TuSyTkt2n", "https://api.thecatapi.com/v1/images/IFXsxmXLm", "https://api.thecatapi.com/v1/images/j6oFGLpRG", "https://api.thecatapi.com/v1/images/njK25knLH", "https://api.thecatapi.com/v1/images/ai6Jps4sx"]

  useEffect(() => {
    const fetchData = async () => {

      for (let i = 0; i < url.length; i++) {
        try {
          let one = await fetch(url[i])
          let two = await one.json()
          catArray.push(two)
        } catch (error) {
          console.log("Error")
        } finally {
          data = catArray
          setData(data)
          console.log(data)
        }
      }
    }
    fetchData();
  }, []);
};
