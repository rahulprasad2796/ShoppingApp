
  var imgArr = [];
  var nxhttp = new XMLHttpRequest();
  nxhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product/3", true);
  nxhttp.send();
  nxhttp.onreadystatechange = function(){
    if(this.readyState === 4){
      var productData = JSON.parse(this.response);

      var section = document.createElement("section"); //section to put the two div
      section.id = "product";
      var divLeft = document.createElement("div"); //div to hold preview image
      divLeft.id = "left";
      var img = document.createElement("img"); //preview image
      img.src = productData.preview;
      divLeft.appendChild(img);

      var divRight = document.createElement("div"); //div to hold product info
      divRight.id = "right";
      var h1 = document.createElement("h1"); 
      h1.innerHTML = productData.name;
      var h2 = document.createElement("h2");
      h2.innerHTML = productData.brand;
      var h3 = document.createElement("h3");
      h3.innerHTML = "Price: Rs ";
      var span = document.createElement("span");
      span.innerHTML = productData.price;
      h3.appendChild(span);
      var h4 = document.createElement("h4");
      h4.innerHTML = "Description";
      var h5 = document.createElement("h5");
      h5.innerHTML = productData.description;

      var prevDiv = document.createElement("div"); //div to hold small images
      prevDiv.id = "preview";
      var p = document.createElement("p");
      p.innerHTML = "Product Preview";




      for(var i = 0; i < productData.photos.length; i++) { 
        var imgSmall = document.createElement("img");
        imgSmall.src = productData.photos[i];
        imgSmall.className = "imgSmall"; //adds boundary on load page
        if(i === 0) {
        imgSmall.classList.add("active-class");
        }
        prevDiv.appendChild(imgSmall);
        imgArr.push(imgSmall);
      }

      $(document).ready(function(){

        var imgBorder = $(".imgSmall");

        $(imgBorder).click(function(){  //boundary effect on photos click by jquery
          img.src = $(this).attr("src");
          $(imgBorder).removeClass(); //remove all boundary
          $(imgBorder).addClass("imgSmall"); //adds no / default boundary

          if($(this).attr("class") === "imgSmall active-class") { //again verifies if have color boundary
            $(this).removeClass();
            $(this).addClass("imgSmall")
          } else if($(this).attr("class") === "imgSmall") { //add color boundary
            $(this).addClass("active-class");
          }
        })
      })
      

      var button = document.createElement("button");
      button.innerHTML = "Add to Cart";

      button.addEventListener("click", function(){ //add button event

        var cartC = document.getElementById("cart-count"); //gets default cart no. if present and adds on click
        var cartNum = cartC.innerText;
        cartNum++;
        cartC.innerText = cartNum;

        var productArr = [productData];

        if(localStorage.getItem("product")) { //if data present in local storage
          var getProduct = JSON.parse(localStorage.getItem("product")); //gets the data
          getProduct.push(productData); //adds current data
          localStorage.removeItem("product"); //removes old one
          localStorage.setItem("product", JSON.stringify(getProduct)); //adds old + existing data
        } else if (!getProduct) { //if no data in local
          localStorage.setItem("product", JSON.stringify(productArr)); //adds existing one
        }
      })


      divRight.appendChild(h1);
      divRight.appendChild(h2);
      divRight.appendChild(h3);
      divRight.appendChild(h4);
      divRight.appendChild(h5);
      divRight.appendChild(p);

      divRight.appendChild(prevDiv);
      divRight.appendChild(button);

      section.appendChild(divLeft);
      section.appendChild(divRight);
      bdyy[0].appendChild(section);

      
    }
  }
  var bdyy = document.getElementsByTagName("main");

  var getStore = localStorage.getItem("product");
  var againStore = JSON.parse(getStore);


  var setCount = document.getElementById("cart-count"); //if old data in local then returns the no of data
  var co = parseInt(setCount.innerText);
  
  co += againStore.length; // add to the cart no.

  setCount.innerHTML = co;


 