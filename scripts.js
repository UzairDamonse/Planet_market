// nav functions
let ul = document.getElementById("list");

function collapse() {
  ul.classList.toggle("active");
}

const forSale = [
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
    resourcesAvailable: "Ocean of liquid hydrocarbons and other minerals",
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
      "Deposits of heavy and rare metals and other minerals such as sulfur with calcium deposits",
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
    surfaceArea: "1.34 X 10^9 km²",
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
      "Deposits of light metals and rare elements, HOWEVER, BEWARE that geth activity has been spotted in the area",
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
    resourcesAvailable:
      "Helium-3 refining and0 deuterium and other mineral mining",
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
      "Deposits of light metal and extensive deposits of rare elements such as uranium and occasional lodes of plutonium",
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
    resourcesAvailable:
      "Deposits of argon and is a another terraforming prospect",
    price: 448000000000,
  },
];

const forSaleContainer = document.getElementById("cards");

function showForSale(forSale) {
  forSaleContainer.innerHTML = "";
  forSale.forEach((planet) => {
    forSaleContainer.innerHTML += `
    <div class="card rounded-2 col-md-4 my-4 px-0 border shadow" style="width:28rem">
      <img
        src=${planet.image}
        class="card-img-top w-100"
        alt="Image of ${planet.title}"
      />
      <div class="card-body">
        <div class="card-text">
          <h3 id="title">${planet.title}</h3>
          <h4 id="location" class="text-muted">
            <i class="fa-solid fa-location-dot me-1" title="Location of planet"></i>
            ${planet.location}
          </h4>
          <div id="surfaceArea" class="d-flex align-items-baseline">
            <i class="fa-solid fa-globe me-1" title="Surface Area"></i>
            <p id="surfaceAreaOutput">${planet.surfaceArea}</p>
          </div>
          <div id="temperature" class="d-flex align-items-baseline">
            <i class="fa-solid fa-temperature-empty me-1" title="Temperature"></i>
            <p id="temperatureOutput">${planet.temperature}°C</p>
          </div>
          <div id="orbitTime" class="d-flex align-items-baseline">
            <i class="fa-solid fa-circle-notch me-1" title="Orbit Time"></i>
            <p id="orbitTimeOutput">${planet.orbitTime} Earth Years</p>
          </div>
          <div id="resourcesAvailable" class="d-flex align-items-baseline">
            <i
              class="fa-solid fa-hand-holding-droplet me-1"
              title="Resources Available"
            ></i>
            <p id="resourcesAvailableOutput">${planet.resourcesAvailable}</p>
          </div>
          <div id="price" class="d-flex align-items-baseline">
            <i class="fa-solid fa-coins me-1" title="Price"></i>
            <p id="priceOutput">${planet.price}</p>
          </div>
        </div>
      </div>
    </div>
    
    `;
  });
  console.log(forSale);
}

showForSale(forSale);

const filterLocation = (e) => {
  const location = e.target.value;

  const filteredLocation = forSale.filter((planet) => {
    return planet.location.toLowerCase().includes(location.toLowerCase());
  });

  return showForSale(filteredLocation);
};

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
