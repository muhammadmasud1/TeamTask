let nav = document.getElementById("navbar");
let shownav = document.getElementById("showName");

shownav.addEventListener("click", function () {
  nav.classList.toggle("toggle-nav");
});


const domainData = [
  { id: 1, domainPrice: ".com $9.26" },
  { id: 2, domainPrice: ".sg $7.26" },
  { id: 3, domainPrice: ".space $12.96" },
  { id: 4, domainPrice: ".info $14.06" },
  { id: 5, domainPrice: ".net $11.50" },
  { id: 6, domainPrice: ".xyz $8.43" },
  { id: 7, domainPrice: "More" },
];

const domainPriceDisplay = () => {
  const domainContainer = document.getElementById("priceDomainSelect");

  for (let domain of domainData) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "javascript:void";
    a.textContent = domain.domainPrice;

    li.appendChild(a);
    domainContainer.appendChild(li);
  }
};
domainPriceDisplay();




const servicesData = [
  {
    entry: "Entry",
    price: "$14",
    duration: "Month",
    discount: "10% Off",
    description: "Easy Start On the Cloud",
    benefits: [
      "Unlimited Website",
      "Unlimited BrandWidth",
      "100 GB SSD Storage",
      "3 GB RAM",
      "3 GB RAM", 
    ],
  },
  {
    entry: "Bussiness",
    price: "$24",
    duration: "Month",
    discount: "20% Off",
    description: "Optical Start On the Cloud",
    benefits: [
      "Unlimited Website",
      "Unlimited BrandWidth",
      "100 GB SSD Storage",
      "3 GB RAM",
      "3 GB RAM",
      
    ],
  },
  {
    entry: "Business Plus",
    price: "$56",
    duration: "Month",
    discount: "10% Off",
    description: "Easy Start On the Cloud",
    benefits: [
      "Unlimited Website",
      "Unlimited BrandWidth",
      "100 GB SSD Storage",
      "3 GB RAM",
      "3 GB RAM", 
    ],
  },
];

function createServiceElement(service) {
  const container = document.getElementById("priceingService");
  const serviceContainer = document.createElement("div");
  serviceContainer.classList.add("priceServiceContainer");

  const discountContainer = document.createElement("div");
  discountContainer.classList.add("discountContainer");
  discountContainer.innerHTML = `
        <div class="priceList">
            <p>${service.entry}</p>
            <div class="servicePrice">
                <h1>${service.price} <span>/ ${service.duration}</span></h1>
                <h3>${service.discount}</h3>
            </div>
            <p>${service.description}</p>
        </div>
    `;
  const benefitList = document.createElement("div");
  benefitList.classList.add("benifitList");

  service.benefits.forEach((benefit) => {
    const list = document.createElement("div");
    list.classList.add("list");
    list.innerHTML = `
            <i class="ri-check-line"></i>
            <p>${benefit}</p>
        `;
    benefitList.appendChild(list);
  });

  const buyNowButton = document.createElement("button");
  buyNowButton.textContent = "Buy Now";

  serviceContainer.appendChild(discountContainer);
  serviceContainer.appendChild(benefitList);
  serviceContainer.appendChild(buyNowButton);
  container.appendChild(serviceContainer);
}
servicesData.forEach((service) => createServiceElement(service));

 
/* ======================dynamic control panel ===================*/

const controlData = [
  {
    iconClass: "ri-image-line",
    title: "Easy Start & Managed Updates",
    description:
      "Seamless Beginnings, Hassle-Free Growth. Effortless Start with Easy Management and Automatic Updates for a Smooth Experience. Get Started Today!",
  },
  {
    iconClass: "ri-sort-asc",
    title: "Another Title",
    description: "Another Description",
  },
  {
    iconClass: "ri-wordpress-fill",
    title: "Yet Another Title",
    description: "Yet Another Description",
  },
];


