var orderForm = document.querySelector('.coffeeOrderForm'); 

orderForm.addEventListener('submit', function (event){ 
    event.preventDefault();
    var newOrder = document.createElement('li');
    var orderSize = document.querySelector('[name="size"]:checked')
    newOrder.textContent = coffeeOrder.value + ", " + emailInput.value + ", " + orderSize.value + ", " + flavorShot.value + ", " + strengthLevel.value + "mg of Caffeine.";
    var orderList = document.querySelector('.orderList');
    
    
    var removeButton = document.createElement('button');
    removeButton.textContent = "Remove"; 
    
    var removeOrder = function (){
        newOrder.remove()
    }
    removeButton.addEventListener("click", removeOrder)

    newOrder.appendChild(removeButton);
    orderList.appendChild(newOrder);
    
})
