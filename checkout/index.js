$(document).ready(function() {
    var cartCount = $("#cart-count"); //store coun at top
    var store = localStorage.getItem("product"); //access the local storage
    var getStore = JSON.parse(store);
    
    var main = $("main"); //access the main html
    var h1 = $("<h1>").html("Checkout");
    var h2 = $("<h2>").html("Total Items: " + String(getStore.length));
    var mainDiv1 = $("<div>");
    $(mainDiv1).attr("id", "mainDiv1")


    var sectionLeft = $("<section>"); //holds the products cards
    $(sectionLeft).attr("id","left");
    
    var sectionRight = $("<section>"); //total amount card
    $(sectionRight).attr("id","right");

    var button = $("<button>").html("Place Order"); //data sent through post
    $(button).click(function(){
        $.post("https://5d76bf96515d1a0014085cf9.mockapi.io/order", store, function() {
            confirm("order placed");
            localStorage.clear();
            window.location.assign("../order success/index.html");//goes to page success
        })
    })


    var p4 = $("<p>").html("Total Amount");
    var p5 = $("<p>");

    var cardC = parseInt($(cartCount).text()); // to get the cart at top



    var compStore = getStore.sort((a,b)=>a.id-b.id); //sorts in increasing id order


    
    for(let i = 0; i < compStore.length - 1; i++) {
        if(compStore[i].id === compStore[i + 1].id) {
            delete compStore[i];
        }
    }

    var finStore = compStore.filter(v => v !== ""); //give out the unique items in store


    var totPrice = 0; //set to global to add on count


    for(var i = 0; i < finStore.length; i++) { //left side cards are created
        var mainDiv = $("<div>");
        $(mainDiv).attr("class", "cardDiv")
        var textDiv = $("<div>");
        var img = $("<img>")
        $(img).attr("src", finStore[i].preview)
        var p1 = $("<p>")
        $(p1).html(finStore[i].name)
        var p2 = $("<p>")


        let agnStore = JSON.parse(store);
        cardC = agnStore.length; // no of store items

        let amntCount = 0; //to store the no. of each product
        for(let k = 0; k < agnStore.length; k++) {
            if(agnStore[k].id === finStore[i].id) {
                amntCount ++;
            }
        }

        let price = finStore[i].price;


        totPrice += amntCount * price; //add each price to total amount


        $(p2).html(amntCount); //no. of each products out

        $(cartCount).html(cardC);

        var p3 = $("<p>")
        $(p3).html("Amount Rs: " + price);

        $(p5).html("Amount Rs: " + totPrice);

        amntCount = 0; //set to 0 after each itteration to give new values
        price = 0;


        $(textDiv).append(p1, p2, p3);
        $(mainDiv).append(img);
        $(mainDiv).append(textDiv);
        $(sectionLeft).append(mainDiv);

    }


    



    $(sectionRight).append(p4, p5, button);
    $(mainDiv1).append(sectionLeft, sectionRight);
    $(main).append(h1, h2, mainDiv1);

})

