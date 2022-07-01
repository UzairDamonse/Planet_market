const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  alert("The form has been submitted");
});

const editTitle = document.getElementById("Modal");

const forSale = JSON.parse(localStorage.getItem("Items"))
  ? JSON.parse(localStorage.getItem("Items"))
  : [
      {
        id: 1,
        title: "Dregir",
        image: "https://i.postimg.cc/9RS3PmXV/Dregir.jpg",
        location: "Voyager Cluster, Yangtze System",
        surfaceArea: "1.02 X 10^8 km²",
        temperature: -96,
        orbitTime: 23.7,
        resourcesAvailable: "Deposits of light metals",
        price: 678000000000,
      },
      {
        id: 2,
        title: "Yunthorl",
        image: "https://i.postimg.cc/p9G3xWF8/Yunthorl.jpg",
        location: "Horse Head Nebula, Strenuus",
        surfaceArea: "4.38 X 10^8 km²",
        temperature: 68,
        orbitTime: 5.8,
        resourcesAvailable: "Ocean of liquid hydrocarbons",
        price: 307000000000,
      },
      {
        id: 3,
        title: "Binthu",
        image: "https://i.postimg.cc/ns3fzK6X/Binthu.jpg",
        location: "Voyager Cluster, Yangtze System",
        surfaceArea: "5.79 X 10^8 km²",
        temperature: 94,
        orbitTime: 5,
        resourcesAvailable:
          "Deposits of heavy and rare metals and sulfur with calcium deposits",
        price: 946000000000,
      },
      {
        id: 4,
        title: "Faringor",
        image: "https://i.postimg.cc/rz02Vrgp/Faringor.jpg",
        location: "Hades Gamma Cluster, Cacus System",
        surfaceArea: "5.79 X 10^8 km²",
        temperature: -144,
        orbitTime: 69.8,
        resourcesAvailable:
          "Deposits of rare elements and plentiful water however it is carbon laced",
        price: 684000000000,
      },
      {
        id: 5,
        title: "Vemal",
        image: "https://i.postimg.cc/K46SR8sD/Vemal.jpg",
        location: "Hades Gamma Cluster, Antaeus System",
        surfaceArea: "1.34 X 10^9",
        temperature: -61,
        orbitTime: 37.5,
        resourcesAvailable: "Deposits of calcium, iron, and rare elements",
        price: 787000000000,
      },
      {
        id: 6,
        title: "Rayingri",
        image: "https://i.postimg.cc/v4vpqL80/Rayingri.jpg",
        location: "Armstrong Nebula, Gagarin System",
        surfaceArea: "3.36 X 10^8 km²",
        temperature: 46,
        orbitTime: 60.5,
        resourcesAvailable:
          "Deposits of light metals and rare elements, however, beware that geth activity has been spotted in the area",
        price: 998000000000,
      },
      {
        id: 7,
        title: "Archanes",
        image: "https://i.postimg.cc/cvWpB5WK/Archanes.jpg",
        location: "Artemis Tau Cluster, Knossos System",
        surfaceArea: "2.66 x 10^9 km²",
        temperature: "Gas giant, therefore, no measurable temperature",
        orbitTime: 470.2,
        resourcesAvailable: "Helium-3 refining and deuterium mining",
        price: 721000000000,
      },
      {
        id: 8,
        title: "Ontarom",
        image: "https://i.postimg.cc/H87qBqjM/Ontarom.jpg",
        location: "Kepier Verge Cluster, Newton System",
        surfaceArea: "5.22 X 10^8 km²",
        temperature: 58,
        orbitTime: 1.2,
        resourcesAvailable: "Habitable with deposits of heavy metals",
        price: 495000000000,
      },
      {
        id: 9,
        title: "Patatanlis",
        image: "https://i.postimg.cc/9ry3TH65/Patatanlis.jpg",
        location: "Gemini Sigma Cluster, Han System",
        surfaceArea: "10^9 km²",
        temperature: -174,
        orbitTime: 297.4,
        resourcesAvailable:
          "Deposits of light metal and extensive deposits of uranium and occasional lodes of plutonium",
        price: 769000000000,
      },
      {
        id: 10,
        title: "Zatorus",
        image: "https://i.postimg.cc/jd19gFc0/Zatorus.jpg",
        location: "Attican Beta Cluster, Hercules System",
        surfaceArea: "3.44 X 10^10 km²",
        temperature: "Gas giant, therefore, no measurable temperature",
        orbitTime: 113.1,
        resourcesAvailable:
          "Deposits of heavy metals and multiple massive clouds of sulfur",
        price: 984000000000,
      },
      {
        id: 11,
        title: "Theyar",
        image: "https://i.postimg.cc/qz6PSZxM/Theyar.jpg",
        location: "Argso Rho Cluster, Hydra System",
        surfaceArea: "4.64 X 10^10 km²",
        temperature: "Gas giant, therefore, no measurable temperature",
        orbitTime: 12.8,
        resourcesAvailable:
          "Traces of chlorine, sodium and significant amount of water",
        price: 356000000000,
      },
      {
        id: 12,
        title: "Matol",
        image: "https://i.postimg.cc/grjFq0wh/Matol.jpg",
        location: "Keplar Verge Cluster, Herschel System",
        surfaceArea: "2.09 X 10^8 km²",
        temperature: 33,
        orbitTime: 207.3,
        resourcesAvailable: "Deposits of argon and is a terraforming prospect",
        price: 448000000000,
      },
    ];

const tableValues = document.getElementById("tableRow");

function showRows(forSale) {
  tableValues.innerHTML = "";
  forSale.forEach((tableValue) => {
    tableValues.innerHTML += `
    <tr>
      <th scope="row">${tableValue.id}</th>
      <td><input class="form-control" id="title${tableValue.id}"${tableValue.title} value="${tableValue.title}" disabled/></td>
      <td><input class="form-control" id="image${tableValue.id}"${tableValue.image} value="${tableValue.image}" disabled/></td>
      <td><input class="form-control" id="location${tableValue.id}"${tableValue.location} value="${tableValue.location}" disabled/></td>
      <td><input class="form-control" id="surfaceArea${tableValue.id}"${tableValue.surfaceArea} value="${tableValue.surfaceArea}" disabled/></td>
      <td><input class="form-control" id="temperature${tableValue.id}"${tableValue.temperature} value="${tableValue.temperature}" disabled/></td>
      <td><input class="form-control" id="orbitTime${tableValue.id}"${tableValue.orbitTime} value="${tableValue.orbitTime}" disabled/></td>
      <td><input class="form-control" id="resourcesAvailable${tableValue.id}"${tableValue.resourcesAvailable} value="${tableValue.resourcesAvailable}" disabled/></td>
      <td><input class="form-control" id="price${tableValue.id}"${tableValue.price} value="${tableValue.price}" disabled/></td>
      <td>
        <div>
          <i title="Edit" class="functionality fa-solid fa-pen-fancy m-1 fs-5" id="edit" onclick="editPlanet(${tableValue.id})"></i>
          <i title="Save" class="functionality fa-solid fa-box-archive m-1 fs-5" id="save" onclick="saveChangesForPlanet(${tableValue.id})"></i>
          <i title="Delete" class="functionality fa-solid fa-trash-can m-1 fs-5" id="delete" onclick="deletePlanet(${tableValue.id})"></i>
        </div>
      </td>
    </tr>`;
  });
}
localStorage.setItem("tableRow", JSON.stringify(forSale));

showRows(forSale);

const addNewPlanetForSale = (e) => {
  const newPlanet = {
    id: forSale.length + 1,
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    location: document.getElementById("location").value,
    surfaceArea: document.getElementById("surfaceArea").value,
    temperature: document.getElementById("temperature").value,
    orbitTime: document.getElementById("orbitTime").value,
    resourcesAvailable: document.getElementById("resourcesAvailable").value,
    price: document.getElementById("price").value,
  };
  forSale.push(newPlanet);
  localStorage.setItem("tableRow", JSON.stringify(forSale));

  showRows(forSale);
  console.log(forSale);
};

function editPlanet(id) {
  document.querySelector(`#title${id}`).disabled = false;
  document.querySelector(`#image${id}`).disabled = false;
  document.querySelector(`#location${id}`).disabled = false;
  document.querySelector(`#surfaceArea${id}`).disabled = false;
  document.querySelector(`#temperature${id}`).disabled = false;
  document.querySelector(`#orbitTime${id}`).disabled = false;
  document.querySelector(`#resourcesAvailable${id}`).disabled = false;
  document.querySelector(`#price${id}`).disabled = false;
}

function saveChangesForPlanet(id) {
  const planet = forSale.find((planet) => {
    return planet.id === id;
  });
  const titleBox = document.querySelector(`#title${id}`);
  const imageBox = document.querySelector(`#image${id}`);
  const locationBox = document.querySelector(`#location${id}`);
  const surfaceAreaBox = document.querySelector(`#surfaceArea${id}`);
  const temperatureBox = document.querySelector(`#temperature${id}`);
  const orbitTimeBox = document.querySelector(`#orbitTime${id}`);
  const resourcesAvailableBox = document.querySelector(
    `#resourcesAvailable${id}`
  );
  const priceBox = document.querySelector(`#price${id}`);

  document.querySelector(`#title${id}`).disabled = true;
  document.querySelector(`#image${id}`).disabled = true;
  document.querySelector(`#location${id}`).disabled = true;
  document.querySelector(`#surfaceArea${id}`).disabled = true;
  document.querySelector(`#temperature${id}`).disabled = true;
  document.querySelector(`#orbitTime${id}`).disabled = true;
  document.querySelector(`#resourcesAvailable${id}`).disabled = true;
  document.querySelector(`#price${id}`).disabled = true;

  planet.title = titleBox.value;
  planet.image = imageBox.value;
  planet.location = locationBox.value;
  planet.surfaceArea = surfaceAreaBox.value;
  planet.temperature = temperatureBox.value;
  planet.orbitTime = orbitTimeBox.value;
  planet.resourcesAvailable = resourcesAvailableBox.value;
  planet.price = priceBox.value;
}

showRows(forSale);
localStorage.setItem("tableRow", JSON.stringify(forSale));

function deletePlanet(id) {
  let deletePlanet = forSale.filter((planet) => {
    return planet.id !== id;
  });

  localStorage.setItem("tableRow", JSON.stringify(forSale));

  showRows(deletePlanet);
}

const filterSurfaceArea = (e) => {
  const surfaceArea = e.target.value;
  const filteredSurfaceArea = forSale.filter((planet) =>
    planet.surfaceArea.toLowerCase().includes(surfaceArea.toLowerCase())
  );

  if (surfaceArea === "all") {
    const originalSort = forSale.sort((a, b) => a.id - b.id);
    return showForSale(originalSort);
  }
  return showForSale(filteredSurfaceArea);
};

const filterTemperature = (e) => {
  const temperature = e.target.value;

  const temperatureFiltered = forSale.sort(
    (a, b) => a.temperature - b.temperature
  );

  if (temperature === "temperatureAcsending") {
    return showForSale(temperatureFiltered);
  } else if (temperature === "temperatureDescsending") {
    return showForSale(temperatureFiltered.reverse());
  } else if (temperature === "all") {
    const originalSort = forSale.sort((a, b) => a.id - b.id);
    return showForSale(originalSort);
  }
};

const filterOrbitTime = (e) => {
  const orbitTime = e.target.value;

  const orbitTimeFiltered = forSale.sort((a, b) => a.orbitTime - b.orbitTime);

  if (orbitTime === "orbitTimeAscending") {
    return showForSale(orbitTimeFiltered);
  } else if (orbitTime === "orbitTimeDescending") {
    return showForSale(orbitTimeFiltered.reverse());
  } else if (orbitTime === "all") {
    const originalSort = forSale.sort((a, b) => a.id - b.id);
    return showForSale(originalSort);
  }
};

const filterResourcesAvailable = (e) => {
  const resourcesAvailable = e.target.value;
  const filteredResourcesAvailable = forSale.filter((planet) =>
    planet.resourcesAvailable
      .toLowerCase()
      .includes(resourcesAvailable.toLowerCase())
  );
  if (resourcesAvailable === "all") {
    const originalSort = forSale.sort((a, b) => a.id - b.id);
    return showForSale(originalSort);
  }
  return showForSale(filteredResourcesAvailable);
};

const filterPrice = (e) => {
  const Price = e.target.value;

  const priceFiltered = forSale.sort((a, b) => a.price - b.price);

  if (Price === "priceAcsending") {
    return showForSale(priceFiltered);
  } else if (Price === "priceDescsending") {
    return showForSale(priceFiltered.reverse());
  } else if (Price === "all") {
    const originalSort = forSale.sort((a, b) => a.id - b.id);
    return showForSale(originalSort);
  }
};
