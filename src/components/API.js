/*
First draft of API component
Will need refactoring once looked over but all works
Commented out breed array to gather all cat breeds + way to gather 10 images of cats
^lines 23+24 & 182-200

Page should list column of cats with associated data
Will also need CSS styling once refactored
*/

import { useEffect, useState } from "react";

export const CatAPI = () => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [data6, setData6] = useState();
  const [data7, setData7] = useState();
  const [data8, setData8] = useState();
  const [data9, setData9] = useState();
  const [data10, setData10] = useState();
  const [data11, setData11] = useState();
  const [data12, setData12] = useState();
  // const [breedData, setbreedData] = useState();
  // const [catData, setcatData] = useState()

  useEffect(() => {
    // Breed 1
    const fetchData = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/BDb8ZXb1v" // sphy
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 2
    const fetchData = async () => {
      const response2 = await fetch(
        "https://api.thecatapi.com/v1/images/B1ERTmgph" // cspa
      );
      const data2 = await response2.json();
      setData2(data2);
      console.log(data2);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 3
    const fetchData = async () => {
      const response3 = await fetch(
        "https://api.thecatapi.com/v1/images/DbwiefiaY" // kora
      );
      const data3 = await response3.json();
      setData3(data3);
      console.log(data3);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 4
    const fetchData = async () => {
      const response4 = await fetch(
        "https://api.thecatapi.com/v1/images/4RzEwvyzz" // drex
      );
      const data4 = await response4.json();
      setData4(data4);
      console.log(data4);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 5
    const fetchData = async () => {
      const response5 = await fetch(
        "https://api.thecatapi.com/v1/images/OOD3VXAQn" // mcoo
      );
      const data5 = await response5.json();
      setData5(data5);
      console.log(data5);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 6
    const fetchData = async () => {
      const response6 = await fetch(
        "https://api.thecatapi.com/v1/images/sxIXJax6h" // tvan
      );
      const data6 = await response6.json();
      setData6(data6);
      console.log(data6);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 7
    const fetchData = async () => {
      const response7 = await fetch(
        "https://api.thecatapi.com/v1/images/-tm9-znzl" // jbob
      );
      const data7 = await response7.json();
      setData7(data7);
      console.log(data7);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 8
    const fetchData = async () => {
      const response8 = await fetch(
        "https://api.thecatapi.com/v1/images/TuSyTkt2n" // emau
      );
      const data8 = await response8.json();
      setData8(data8);
      console.log(data8);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 9
    const fetchData = async () => {
      const response9 = await fetch(
        "https://api.thecatapi.com/v1/images/IFXsxmXLm" // chee
      );
      const data9 = await response9.json();
      setData9(data9);
      console.log(data9);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 10
    const fetchData = async () => {
      const response10 = await fetch(
        "https://api.thecatapi.com/v1/images/j6oFGLpRG" // char
      );
      const data10 = await response10.json();
      setData10(data10);
      console.log(data10);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 11
    const fetchData = async () => {
      const response11 = await fetch(
        "https://api.thecatapi.com/v1/images/njK25knLH" // hbro
      );
      const data11 = await response11.json();
      setData11(data11);
      console.log(data11);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Breed 12
    const fetchData = async () => {
      const response12 = await fetch(
        "https://api.thecatapi.com/v1/images/ai6Jps4sx" // siam
      );
      const data12 = await response12.json();
      setData12(data12);
      console.log(data12);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   // Breeds
  //   const fetchData1 = async () => {
  //     const response1 = await fetch("https://api.thecatapi.com/v1/breeds");
  //     const breedData = await response1.json();
  //     setbreedData(breedData);
  //     console.log(breedData);
  //   };
  //   fetchData1();
  // }, []);

  // useEffect(() => {
  //   const fetchCats = async () => {
  //       const retrievedCats = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  //       const catData = await retrievedCats.json()
  //       setcatData(catData)
  //   }
  //   fetchCats()
  // }, [])

  return (
    <div>
      <h1>CAT API</h1>
      {data && <h2>Breed: {data.breeds[0].name}</h2>}
      {data && <h3>Alt names: {data.breeds[0].alt_names}</h3>}
      {data && <img src={data.url} height="150px" width="200px" alt="sphynx" />}
      {data && <h3>Lifespan: {data.breeds[0].life_span} years</h3>}
      {data && <h5>Temperament: {data.breeds[0].temperament} years</h5>}
      {data && <p>{data.breeds[0].description}</p>}

      {data2 && <h2>Breed: {data2.breeds[0].name}</h2>}
      {data2 && <h3>Alt names: {data2.breeds[0].alt_names}</h3>}
      {data2 && (
        <img
          src={data2.url}
          height="150px"
          width="200px"
          alt="california spangled"
        />
      )}
      {data2 && <h3>Lifespan: {data2.breeds[0].life_span} years</h3>}
      {data2 && <h5>Temperament: {data2.breeds[0].temperament}</h5>}
      {data2 && <p>{data2.breeds[0].description}</p>}

      {data3 && <h2>Breed: {data3.breeds[0].name}</h2>}
      {data3 && <h3>Alt names: {data3.breeds[0].alt_names}</h3>}
      {data3 && (
        <img src={data3.url} height="150px" width="200px" alt="korat" />
      )}
      {data3 && <h3>Lifespan: {data3.breeds[0].life_span} years</h3>}
      {data3 && <h5>Temperament: {data3.breeds[0].temperament}</h5>}
      {data3 && <p>{data3.breeds[0].description}</p>}

      {data4 && <h2>Breed: {data4.breeds[0].name}</h2>}
      {data4 && <h3>Alt names: {data4.breeds[0].alt_names}</h3>}
      {data4 && (
        <img src={data4.url} height="150px" width="200px" alt="devon rex" />
      )}
      {data4 && <h3>Lifespan: {data4.breeds[0].life_span} years</h3>}
      {data4 && <h5>Temperament: {data4.breeds[0].temperament}</h5>}
      {data4 && <p>{data4.breeds[0].description}</p>}

      {data5 && <h2>Breed: {data5.breeds[0].name}</h2>}
      {data5 && <h3>Alt names: {data5.breeds[0].alt_names}</h3>}
      {data5 && (
        <img src={data5.url} height="150px" width="200px" alt="maine coon" />
      )}
      {data5 && <h3>Lifespan: {data5.breeds[0].life_span} years</h3>}
      {data5 && <h5>Temperament: {data5.breeds[0].temperament}</h5>}
      {data5 && <p>{data5.breeds[0].description}</p>}

      {data6 && <h2>Breed: {data6.breeds[0].name}</h2>}
      {data6 && <h3>Alt names: {data6.breeds[0].alt_names}</h3>}
      {data6 && (
        <img src={data6.url} height="150px" width="200px" alt="turkish van" />
      )}
      {data6 && <h3>Lifespan: {data6.breeds[0].life_span} years</h3>}
      {data6 && <h5>Temperament: {data6.breeds[0].temperament}</h5>}
      {data6 && <p>{data6.breeds[0].description}</p>}

      {data7 && <h2>Breed: {data7.breeds[0].name}</h2>}
      {data7 && <h3>Alt names: {data7.breeds[0].alt_names}</h3>}
      {data7 && (
        <img
          src={data7.url}
          height="150px"
          width="200px"
          alt="japanese bobtail"
        />
      )}
      {data7 && <h3>Lifespan: {data7.breeds[0].life_span} years</h3>}
      {data7 && <h5>Temperament: {data7.breeds[0].temperament}</h5>}
      {data7 && <p>{data7.breeds[0].description}</p>}

      {data8 && <h2>Breed: {data8.breeds[0].name}</h2>}
      {data8 && <h3>Alt names: {data8.breeds[0].alt_names}</h3>}
      {data8 && (
        <img src={data8.url} height="150px" width="200px" alt="egyptian mau" />
      )}
      {data8 && <h3>Lifespan: {data8.breeds[0].life_span} years</h3>}
      {data8 && <h5>Temperament: {data8.breeds[0].temperament}</h5>}
      {data8 && <p>{data8.breeds[0].description}</p>}

      {data9 && <h2>Breed: {data9.breeds[0].name}</h2>}
      {data9 && <h3>Alt names: {data9.breeds[0].alt_names}</h3>}
      {data9 && (
        <img src={data9.url} height="150px" width="200px" alt="bengal" />
      )}
      {data9 && <h3>Lifespan: {data9.breeds[0].life_span} years</h3>}
      {data9 && <h5>Temperament: {data9.breeds[0].temperament}</h5>}
      {data9 && <p>{data9.breeds[0].description}</p>}

      {data10 && <h2>Breed: {data10.breeds[0].name}</h2>}
      {data10 && <h3>Alt names: {data10.breeds[0].alt_names}</h3>}
      {data10 && (
        <img src={data10.url} height="150px" width="200px" alt="chartreux" />
      )}
      {data10 && <h3>Lifespan: {data10.breeds[0].life_span} years</h3>}
      {data10 && <h5>Temperament: {data10.breeds[0].temperament}</h5>}
      {data10 && <p>{data10.breeds[0].description}</p>}

      {data11 && <h2>Breed: {data11.breeds[0].name}</h2>}
      {data11 && <h3>Alt names: {data11.breeds[0].alt_names}</h3>}
      {data11 && (
        <img src={data11.url} height="150px" width="200px" alt="havana brown" />
      )}
      {data11 && <h3>Lifespan: {data11.breeds[0].life_span} years</h3>}
      {data11 && <h5>Temperament: {data11.breeds[0].temperament}</h5>}
      {data11 && <p>{data11.breeds[0].description}</p>}

      {data12 && <h2>Breed: {data12.breeds[0].name}</h2>}
      {data12 && <h3>Alt names: {data12.breeds[0].alt_names}</h3>}
      {data12 && (
        <img src={data12.url} height="150px" width="200px" alt="siamese" />
      )}
      {data12 && <h3>Lifespan: {data12.breeds[0].life_span} years</h3>}
      {data12 && <h5>Temperament: {data12.breeds[0].temperament}</h5>}
      {data12 && <p>{data12.breeds[0].description}</p>}
    </div>
  );
};
