var productData = [
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1640076363/staging/products/active-assist-acv-gummies/0_ACV/CAROUSEL/0.jpg",
    name: "Apple Cider Vinegar Gummies (30)",
    price: "₹599",
    uses: "Gut health improvement",
    details: "Apple Cider Vinegar, Inulin",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637312363/staging/products/active-assist-acv-gummies/Cylindrical%20Pack%20%2860%29/1N-1000x750.png",
    name: "Apple Cider Vinegar Gummies (60)",
    price: "₹999",
    uses: "Gut health improvement",
    details: "Apple Cider Vinegar, Inulin",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1648532927/staging/products/multivitamin-gummies/PRODUCT%20IMAGES/MG_1000x750.jpg",
    name: "Multivitamin Gummies",
    price: "₹799",
    uses: "Boost energy levels, Promote immunity",
    details: "Multivitamins, Zinc",
  }, 

  
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1637905761/staging/products/apple-cider-vinegar-effervescent-tablets/PRODUCT%20IMAGES/1000x750_ACVET.jpg",
    name: "ACV Effervescent Tablets (15)",
    price: "₹399",
    uses: "Weight Loss, Gut Health",
    details: "Apple Cider Vinegar, Vitamin B6 and B12",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1638857876/staging/products/apple-cider-vinegar-effervescent-tablets/PACK%20OF%202/acv-pack-of-2.png",
    name: "ACV Effervescent Tablets (30)",
    price: "₹599",
    uses: "Weight Loss, Gut Health",
    details: "Apple Cider Vinegar, Vitamin B6 and B12",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1626765615/staging/products/Protein/1600x1200.jpg",
    name: "Vegan Plant Protein Powder + Shaker",
    price: "₹1299",
    uses: "Muscle toning, Bone Density Improvement",
    details:  "4-Plant Based Proteins, 28 Vitamins and Minerals, 9 Amino Acids",
  }, 



  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1636541751/staging/products/Protein/1_1000x750.png",
    name: "Vegan Plant Protein Powder",
    price: "₹1199",
    uses: "Muscle toning, Bone Density Improvement",
    details: "4-Plant Based Proteins, 28 Vitamins and Minerals, 9 Amino Acids",
  },
  {
    image_url:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1644488397/staging/products/active-assist-weight-tea/30%20Pack/PRODUCT%20IMAGES/AAT30_1000x750.jpg",
    name: "Active Assist Tea",
    price: "₹499",
    uses: "Curbing appetite",
    details: "Green Tea, Garcinia, Turmeric, Ginger",
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
    