var orderForm = document.querySelector('.coffeeOrderForm'); 
var url = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders'
var savedOrders = [];
var orderList = document.querySelector('.orderList');
console.log(savedOrders)
orderForm.addEventListener('submit', function (event){ 
    event.preventDefault();
    var newOrder = document.createElement('li');
    var orderSize = document.querySelector('[name="size"]:checked')
    newOrder.textContent = coffeeOrder.value + ", " + emailInput.value + ", " + orderSize.value + ", " + flavorShot.value + ", " + strengthLevel.value + "mg of Caffeine.";
    
    var saveForLocalStorage = coffeeOrder.value + ", " + emailInput.value + ", " + orderSize.value + ", " + flavorShot.value + ", " + strengthLevel.value + "mg of Caffeine."; 
    // savedOrders.push(saveForLocalStorage); 
    // var index = savedOrders.length - 1

    var order = {coffee: coffeeOrder.value,
        flavor: flavorShot.value,
        strength: strengthLevel.value,
        size: orderSize.value,
        emailAddress: emailInput.value}

    
    createOrder(order)

    $.ajax({
        url: url,
        method: "POST",
        data: JSON.stringify(order)
    })

    
    

    // newOrder.appendChild(removeButton);
    orderList.appendChild(newOrder);

    localStorage.setItem('savedOrder', savedOrders);

})

var createOrder = function(order){
    var newOrderA = document.createElement('li');
    newOrderA.textContent = order.coffee + ", " + order.emailAddress + ", " + order.flavor + ", " + order.strength + ", " + order.size + ", " + order.__v + ", " + order._id;

    var removeOrder = function (){
        newOrderA.remove()
        // savedOrders.splice(index, 1);
        // localStorage.setItem('savedOrder', JSON.stringify(savedOrders));
        console.log(order.emailAddress);
        $.ajax(`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${order.emailAddress}`, {
            method: "DELETE",
        });
    } 

    var removeButton = document.createElement('button');
    removeButton.textContent = "Remove"; 
   
   
    
    // var removeOrder = function (){
    //     newOrderA.remove()
    // }
    removeButton.addEventListener("click", removeOrder)

    newOrderA.appendChild(removeButton);

    orderList.appendChild(newOrderA);
    
}
var savedItem = localStorage.getItem('savedOrder');
$.ajax(url, {
    method: "GET", 
    success: function(data){
        Object.values(data).forEach(function (order){
            console.log(order)
            createOrder(order);
        })
     
    }


})
