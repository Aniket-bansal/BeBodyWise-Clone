var productData = [
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1635160165/staging/products/pms-gummies/PRODUCT%20IMAGES/PMS%20Gummies_1000x750.png",
    name: "PMS Gummies",
    price: "₹999",
    uses: "Managing PMS Symptoms",
    details: "Chasteberry Extract, L-tryptophan, St. John's wort",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1629302467/staging/products/PCOS%20Balance%20Capsule/Carousel/Updated/PCOS_product_image_NEW.jpg",
    name: "PCOS Balance Capsules",
    price: "₹599",
    uses: "Irregular Periods",
    details: "Shatavari, Ashoka, Lodhra, Chandan",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1623500692/staging/products/PCOS%20Superfood/New%20Carousel/superdood_1000x750.jpg",
    name: "Multivitamin Gummies",
    price: "₹539",
    uses: "Managing PCOS Symptoms",
    details: "Myo-Inositol, D-chiro-inositol, Multivitamins",
  }, 

  
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1621260455/staging/products/Period%20Pain%20Relief%20Patch/Carousel/1000x750.jpg",
    name: "Period Pain Relief Patch",
    price: "₹355",
    uses: "Menstrual Cramps",
    details: "Eucalyptus, Boswellia, Evening Primrose Oil, Menthol",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637158873/staging/products/PCOS%20Superfood/Pack%20of%202/1000x750-Pack_of_2.png",
    name: "PCOS Superfood - 15 Sachet - Pack of 2",
    price: "₹999",
    uses: "Managing PCOS Symptoms",
    details: "Myo-Inositol, D-chiro-inositol, Multivitamins",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1631868631/staging/products/buying-options/pcos%20support%20kit/Period-pain-relief-patch-_-PCOS-capsules_1000X750.jpg",
    name: "PCOS Support Kit",
    price: "₹799",
    uses: "Menstrual Cramps, Irregular Periods",
    details: "Period Pain Relief Patches, Shatavari PCOS Balance Capsules",
  }, 



  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1631868664/staging/products/buying-options/pcos%20control%20kit/Period-pain-relief-patch-_-PCOS-capsules_1600X1200.jpg",
    name: "PCOS Control kit",
    price: "₹899",
    uses: "Menstrual Cramps, Managing PCOS Symptoms",
    details: "Period Pain Relief Patches, PCOS Superfood",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1631868728/staging/products/buying-options/pcos%20360%C2%B0%20kit/PCOS-Capsules-_-PCOS-Superfood_1000X750.jpg",
    name: "PCOS 360° kit",
    price: "₹999",
    uses: "Irregular Periods, Managing PCOS Symptoms",
    details: "Shatavari PCOS Balance Capsules, PCOS Superfood",
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
    
