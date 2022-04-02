var productData = [
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1624343637/staging/products/Intimate%20Wash/New%20Carousel/1600x1200.jpg",
    name: "pH Balancing Intimate Wash",
    price: "₹349",
    uses: "Maintaining ph balance & hygiene",
    details: "1% Niacinamide, Lactic Acid, Tea Tree",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1614334593/staging/products/UTI%20shield%20capsule/Carousel/vitamic_C_serum_product_image.jpg",
    name: "Apple Cider Vinegar Gummies (60)",
    price: "₹599",
    uses: "UTI Prevention",
    details: "D - Mannose, Cranberry Extract, Hibiscus Extract, Probiotics",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1617507488/staging/products/UTI%20Detection%20Strips/Carousel/1600x1200.jpg",
    name: "UTI Test Kit",
    price: "₹399",
    uses: "UTI Detection",
    details: "Detection Reagents for Leukocyte & Nitrite",
  }, 

  
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1619692195/staging/products/Intimate%20Care%20Serum/Carousel/1000x750.jpg",
    name: "Intimate Care Serum",
    price: "₹399",
    uses: "Maintaining intimate hygiene",
    details: "3% Manjakani Extract, 2% Niacinamide, Kojic Acid",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1622127981/staging/products/Chafing%20Guard%20Gel/Carousel/2.png",
    name: "Anti Rash and Chafing Gel",
    price: "₹399",
    uses: "Intimate area rashes & chafing",
    details: "Olive oil, Jojoba oil, Vitamin E",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1622127929/staging/products/Intimate%20Powder/Carousel/1.png",
    name: "Clotrimazole Intimate Powder",
    price: "₹349",
    uses: "Intimate area sweat, infections",
    details:  "1% Clotrimazole, Zinc Oxide, Peppermint",
  }, 



  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1641384277/staging/products/buying-options/complete%20hygiene%20combo/PRODUCT%20IMAGES/CHC_1000x750.jpg",
    name: "Complete Hygiene Combo",
    price: "₹599",
    uses: "Intimate area sweat, rashes & chafingt",
    details: "Clotrimazole Intimate Powder, Anti Rash and Chafing Gel",
  },

 

];



productData.map(function(elem)
{
  var box = document.createElement("div")

  var img = document.createElement("img")
  img.src = elem.image_url

  var name = document.createElement("p")
  name.textContent=elem.name

  var price = document.createElement("p")
  price.innerText = elem.price

  var use =  document.createElement("p")
  use.innerText = elem.uses
  use.setAttribute("id", "word1");

  var details=  document.createElement("p")
  details.innerText = elem.details
  details.setAttribute("id", "word2");

  var btn = document.createElement("button")
  btn.innerText = "Add to Cart"
  btn.style.cursor="pointer";
  

  box.append(img,name,price, use, details, btn)

  document.querySelector("#allproducts").append(box)

});

document.querySelector("#hair").addEventListener("click", hairfunction)
    function hairfunction(){
        
        window.location.href = "hair.html"
    }

    document.querySelector("#skin").addEventListener("click", skinfunction)
    function skinfunction(){
        window.location.href = "skin.html"
    }

    document.querySelector("#weight").addEventListener("click", weightfunction)
    function weightfunction(){
        window.location.href = "weight.html"
    }

    document.querySelector("#pcos").addEventListener("click", pcosfunction)
    function pcosfunction(){
        window.location.href = "pcos.html"
    }

    document.querySelector("#feminine").addEventListener("click", femfunction)
    function femfunction(){
        window.location.href = "feminine.html"
    }
    

