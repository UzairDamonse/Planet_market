// nav functions
let ul = document.getElementById("list");

function collapse() {
  ul.classList.toggle("active");
}

const forSale = [
  {
    title: "Dregir",
    image: "https://i.postimg.cc/9RS3PmXV/Dregir.jpg",
    location: "Voyager Cluster, Yangtze System",
    surfaceArea: "1.02 X 10^8 km²",
    temperature: "-96 °C",
    orbitTime: "23.7 Earth Years",
    resourcesAvailable: "Deposits of light metals",
    price: "678,000,000,000",
  },
  {
    title: "Yunthorl",
    image: "https://i.postimg.cc/p9G3xWF8/Yunthorl.jpg",
    location: "Horse Head Nebula, Strenuus",
    surfaceArea: "4.38 X 10^8 km²",
    temperature: "68 °C",
    orbitTime: "5.8 Earth Years",
    resourcesAvailable: "Ocean of liquid hydrocarbons",
    price: "307,000,000,000",
  },
  {
    title: "Binthu",
    image: "https://i.postimg.cc/ns3fzK6X/Binthu.jpg",
    location: "Voyager Cluster, Yangtze System",
    surfaceArea: "5.79 X 10^8 km²",
    temperature: "94 °C",
    orbitTime: "5 Earth Years",
    resourcesAvailable:
      "Deposits of heavy and rare metals and sulfur with calcium deposits",
    price: "946,000,000,000",
  },
  {
    title: "Faringor",
    image: "https://i.postimg.cc/rz02Vrgp/Faringor.jpg",
    location: "Hades Gamma Cluster, Cacus System",
    surfaceArea: "5.79 X 10^8 km²",
    temperature: "-144 °C",
    orbitTime: "69.8 Earth Years",
    resourcesAvailable:
      "Deposits of rare elements and plentiful water however it is carbon laced",
    price: "684,000,000,000",
  },
  {
    title: "Vemal",
    image: "https://i.postimg.cc/K46SR8sD/Vemal.jpg",
    location: "Hades Gamma Cluster, Antaeus System",
    surfaceArea: "1.34 X 10^9",
    temperature: "-61 °C",
    orbitTime: "37.5 Earth Years",
    resourcesAvailable: "Deposits of calcium, iron, and rare elements",
    price: "787,000,000,000",
  },
  {
    title: "Rayingri",
    image: "https://i.postimg.cc/v4vpqL80/Rayingri.jpg",
    location: "Armstrong Nebula, Gagarin System",
    surfaceArea: "3.36 X 10^8 km²",
    temperature: "46 °C",
    orbitTime: "60.5 Earth Years",
    resourcesAvailable:
      "Deposits of light metals and rare elements, however, beware that geth activity has been spotted in the area",
    price: "998,000,000,000",
  },
  {
    title: "Archanes",
    image: "https://i.postimg.cc/cvWpB5WK/Archanes.jpg",
    location: "Artemis Tau Cluster, Knossos System",
    surfaceArea: "2.66 x 10^9 km²",
    temperature: "Gas giant, therefore, no measurable temperature",
    orbitTime: "470.2 Earth Years",
    resourcesAvailable: "Helium-3 refining and deuterium mining",
    price: "721,000,000,000",
  },
  {
    title: "Ontarom",
    image: "https://i.postimg.cc/H87qBqjM/Ontarom.jpg",
    location: "Kepier Verge Cluster, Newton System",
    surfaceArea: "5.22 X 10^8 km²",
    temperature: "58 °C",
    orbitTime: "1.2 Earth Years",
    resourcesAvailable: "Habitable with deposits of heavy metals",
    price: "495,000,000,000",
  },
  {
    title: "Patatanlis",
    image: "https://i.postimg.cc/9ry3TH65/Patatanlis.jpg",
    location: "Gemini Sigma Cluster, Han System",
    surfaceArea: "10^9 km²",
    temperature: "-174°C",
    orbitTime: "297.4 Earth Years",
    resourcesAvailable:
      "Deposits of light metal and extensive deposits of uranium and occasional lodes of plutonium",
    price: "769,000,000,000",
  },
  {
    title: "Zatorus",
    image: "https://i.postimg.cc/jd19gFc0/Zatorus.jpg",
    location: "Attican Beta Cluster, Hercules System",
    surfaceArea: "3.44 X 10^10 km²",
    temperature: "Gas giant, therefore, no measurable temperature",
    orbitTime: "113.1 Earth Years",
    resourcesAvailable:
      "Deposits of heavy metals and multiple massive clouds of sulfur",
    price: "984,000,000,000",
  },
  {
    title: "Theyar",
    image: "https://i.postimg.cc/qz6PSZxM/Theyar.jpg",
    location: "Argso Rho Cluster, Hydra System",
    surfaceArea: "4.64 X 10^10 km²",
    temperature: "Gas giant, therefore, no measurable temperature",
    orbitTime: "12.8 Earth Years",
    resourcesAvailable:
      "Traces of chlorine, sodium and significant amount of water",
    price: "356,000,000,000",
  },
  {
    title: "Matol",
    image: "https://i.postimg.cc/grjFq0wh/Matol.jpg",
    location: "Keplar Verge Cluster, Herschel System",
    surfaceArea: "2.09 X 10^8 km²",
    temperature: "33°C",
    orbitTime: "207.3 Earth Years",
    resourcesAvailable: "Deposits of argon and is a terraforming prospect",
    price: "448,000,000,000",
  },
];

const forSaleContainer = document.getElementById("cards");

function showForSale() {
  forSaleContainer.innerHTML = "";
  forSale.forEach((planet) => {
    forSaleContainer.innerHTML += `
    <div class="card rounded-2 col-md-4 my-4 px-0" style="width:28rem">
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
            <p id="temperatureOutput">${planet.temperature}</p>
          </div>
          <div id="orbitTime" class="d-flex align-items-baseline">
            <i class="fa-solid fa-circle-notch me-1" title="Orbit Time"></i>
            <p id="orbitTimeOutput">${planet.orbitTime}</p>
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
}

showForSale();
