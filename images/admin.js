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

function showRows() {
  tableValues.innerHTML = "";
  forSale.forEach((tableValue) => {
    tableValues.innerHTML += `
    <tr>
      <th scope="row">${tableValue.id}</th>
      <td>${tableValue.title}</td>
      <td>${tableValue.image}</td>
      <td>${tableValue.location}</td>
      <td>${tableValue.surfaceArea}</td>
      <td>${tableValue.temperature}</td>
      <td>${tableValue.orbitTime}</td>
      <td>${tableValue.resourcesAvailable}</td>
      <td>${tableValue.price}</td>
      <td>
        <div>
          <i class="fa-solid fa-pen-fancy m-1 fs-5" id="edit"></i>
          <i class="fa-solid fa-trash-can m-1 fs-5" id="delete"></i>
        </div>
      </td>
    </tr>`;
  });
}
showRows();
