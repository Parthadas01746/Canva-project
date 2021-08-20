function updateProduct(number){
    var currentImage = document.getElementById("art");
    currentImage.src = "images/" + number + ".jpg";
    
}

document.getElementById("first").addEventListener("click", function(){
    updateProduct(1);
    var description = document.getElementById("desc");
    description.innerText = "first ---Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?"
    var price = document.getElementById("price");
    price.innerText = "550"
})
document.getElementById("second").addEventListener("click", function(){
    updateProduct(2);
    var description = document.getElementById("desc");
    description.innerText = "second ---Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?"
    var price = document.getElementById("price");
    price.innerText = "650"
})
document.getElementById("third").addEventListener("click", function(){
    updateProduct(3);
    var description = document.getElementById("desc");
    description.innerText = "Third ---Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?"
    var price = document.getElementById("price");
    price.innerText = "750"
})




document.getElementById("Inside Dhaka").addEventListener("click", function(){
    var shipping = document.getElementById("shipping");
    var shippingText = parseInt(shipping.innerText);
    shipping.innerText = "50";
    var price = document.getElementById("price");
    var priceText = parseInt(price.innerText);
    
    var total = document.getElementById("total");
    total.innerText = shippingText +priceText;
})
