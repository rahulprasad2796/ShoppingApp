

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
    var productList = [];
    var productList = JSON.parse(this.response);
    for(var i = 0; i < productList.length; i++) {
      var clothDiv = document.createElement("div"); //clothing div card
      clothDiv.className = "clothDiv";
      clothDiv.style.width = "15%";
      clothDiv.style.height = "auto";
      clothDiv.style.margin = "30px 10px";
      clothDiv.style.backgroundColor = "white";
      clothDiv.style.boxShadow =  "0 2px 10px rgb(0 0 0 / 30%)";
  
      var accessDiv = document.createElement("div"); //accessory div card
      accessDiv.className = "accessDiv";
      accessDiv.style.width = "15%";
      accessDiv.style.height = "auto";
      accessDiv.style.margin = "30px 10px";
      accessDiv.style.backgroundColor = "white";
      accessDiv.style.boxShadow =  "0 2px 10px rgb(0 0 0 / 30%)";
  
      var imgDiv = document.createElement("div"); //div holding the image
      imgDiv.className = "imgDiv";
  
      var textDiv = document.createElement("div"); //div holding text
      textDiv.className = "textDiv";
      textDiv.style.paddingLeft = "10px";
      textDiv.style.margin = "10px auto";
  
      var img = document.createElement("img"); //to hold image
      img.style.width = "100%";
  
  
      var h3 = document.createElement("h3"); // to hold the name
      h3.style.textAlign = "left";
      h3.style.fontSize = "16px";
      h3.style.fontWeight = "400";
      h3.style.letterSpacing = "0.5px";
      h3.style.color = "rgb(27, 25, 25)";
  
      var h4 = document.createElement("h4"); // to hold the brand
      h4.style.marginTop = "10px";
      h4.style.textAlign = "left";
      h4.style.fontSize = "12px";
      h4.style.color = "rgb(110, 110, 110)";
  
      var h5 = document.createElement("h5"); // to hold the price
      h5.style.marginTop = "10px";
      h5.style.textAlign = "left";
      h5.style.fontSize = "15px";
      h5.style.letterSpacing = "2px";
      h5.style.color = "#009688";
  
      if(productList[i]["isAccessory"] === false) {
          img.src = productList[i]["preview"];
          h3.innerHTML = productList[i]["name"];
          h4.innerHTML = productList[i]["brand"];
          h5.innerHTML = "Rs " + productList[i]["price"];
          clothDiv.id = productList[i].id;
          clothDiv.style.cursor = "pointer";
          imgDiv.appendChild(img);
          textDiv.appendChild(h3);
          textDiv.appendChild(h4);
          textDiv.appendChild(h5);
          clothDiv.appendChild(imgDiv);
          clothDiv.appendChild(textDiv);
          clothDiv.addEventListener("click", function() {
            if(this.id == 1) {
              window.location.assign("id1/index.html");
            }
            if(this.id == 2) {
              window.location.assign("id2/index.html");
            }
            if(this.id == 3) {
              window.location.assign("id3/index.html");
            }
            if(this.id == 4) {
              window.location.assign("id4/index.html");
            }
            if(this.id == 5) {
              window.location.assign("id5/index.html");
            }
          })
          clothingSection.appendChild(clothDiv);
          
      } else if (productList[i]["isAccessory"] === true) {
          img.src = productList[i]["preview"];
          h3.innerHTML = productList[i]["name"];
          h4.innerHTML = productList[i]["brand"];
          h5.innerHTML = "Rs " + productList[i]["price"];
          accessDiv.id = productList[i].id;
          accessDiv.style.cursor = "pointer";
          imgDiv.appendChild(img);
          textDiv.appendChild(h3);
          textDiv.appendChild(h4);
          textDiv.appendChild(h5);
          accessDiv.appendChild(imgDiv);
          accessDiv.appendChild(textDiv);
          accessDiv.addEventListener("click", function() {
            if(this.id == 6) {
              window.location.assign("id6/index.html");
            }
            if(this.id == 7) {
              window.location.assign("id7/index.html");
            }
            if(this.id == 8) {
              window.location.assign("id8/index.html");
            }
            if(this.id == 9) {
              window.location.assign("id9/index.html");
            }
            if(this.id == 10) {
              window.location.assign("id10/index.html");
            }
          })
          accessorySection.appendChild(accessDiv);
      }
    }
  }
}


  var body = document.getElementsByTagName("body");// get to add the section inside it

  var headClothing = document.createElement("h2"); //to add heading to the sections
  headClothing.innerHTML = "Clothing for Men and Women";
  headClothing.id = "clothinghead";

  var headAccessory = document.createElement("h2");
  headAccessory.innerHTML = "Accessory for Men and Women";
  headAccessory.id = "accessoryhead";

  var clothingSection = document.createElement("section"); //section for all clothing
  clothingSection.id = "clothing";
  clothingSection.style.display = "flex";
  clothingSection.style.flexWrap = "wrap";
  clothingSection.style.justifyContent = "center";
  clothingSection.style.padding = "0 4%";

  var accessorySection = document.createElement("section"); //section for all accessories
  accessorySection.id = "accessory";
  accessorySection.style.display = "flex";
  accessorySection.style.flexWrap = "wrap";
  accessorySection.style.justifyContent = "center";
  accessorySection.style.padding = "0 4%";

  body[0].appendChild(headClothing);
  body[0].appendChild(clothingSection);
  body[0].appendChild(headAccessory);
  body[0].appendChild(accessorySection);

  var cardCount = document.getElementById("cart-count");

  var store = localStorage.getItem("product");
  var storeArr = JSON.parse(store);
  cardCount.innerHTML = storeArr.length;