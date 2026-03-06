
const foods = [
{
    name:"Pepperoni Pizza",
price:299,
category:"pizza",
img:"https://images.unsplash.com/photo-1601924582975-7e0d0f0a5f08?w=800"
},
{
name:"Cheese Burger",
price:199,
category:"burger",
img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=800"
},
{
name:"Chocolate Cake",
price:149,
category:"dessert",
img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
},
{
name:"Veg Pizza",
price:249,
category:"pizza",
img:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800"
},
{
name:"Double Burger",
price:249,
category:"burger",
img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
}
]

let savedCart = localStorage.getItem("cart")
if(savedCart){
Object.assign(cart, JSON.parse(savedCart))
updateCart()
}
const grid=document.getElementById("foodGrid")
const cart={}
const cartItems=document.getElementById("cartItems")
const total=document.getElementById("total")
const cartCount=document.getElementById("cartCount")
const cartPanel=document.getElementById("cartPanel")

function displayFoods(list){
grid.innerHTML=""
list.forEach((food,i)=>{
grid.innerHTML+=`
<div class="food-card">
<img src="${food.img}">
<h4>${food.name}</h4>
<p>₹${food.price}</p>
<button onclick="addToCart(${i})">Add to Cart</button>
</div>
`
})
}

function addToCart(i){
let item = foods[i]
if(cart[item.name]){
cart[item.name].qty++
}else{
cart[item.name] = {...item, qty:1}
}
updateCart()
}

function updateCart(){
cartItems.innerHTML = ""
let sum = 0
let count = 0
Object.values(cart).forEach(item => {
cartItems.innerHTML += `
<li class="cart-item">
<span>${item.name}</span>
<div class="qty-box">
<button onclick="changeQty('${item.name}',-1)">-</button>
<span>${item.qty}</span>
<button onclick="changeQty('${item.name}',1)">+</button>
</div>
<span>₹${item.price * item.qty}</span>
<button class="remove-btn" onclick="removeItem('${item.name}')">✕</button>
</li>
`
sum += item.price * item.qty
count += item.qty
})
total.innerText = sum
cartCount.innerText = count
localStorage.setItem("cart", JSON.stringify(cart))

}

function toggleCart(){
cartPanel.classList.toggle("active")
}

function changeQty(name,change){
cart[name].qty += change
if(cart[name].qty <= 0){
delete cart[name]
}
updateCart()
}

function removeItem(name){
delete cart[name]
updateCart()
}

function filterCategory(cat){
if(cat==='all'){
displayFoods(foods)
}else{
displayFoods(foods.filter(f=>f.category===cat))
}
}

function clearCart(){
localStorage.removeItem("cart")
location.reload()
}

document.getElementById("cartIcon").onclick = toggleCart 
document.getElementById("loginBtn").onclick=()=>{
document.getElementById("loginModal").style.display="flex"
}

function closeLogin(){
document.getElementById("loginModal").style.display="none"
}

function checkout(){
alert("Order placed successfully!")
}

window.onload = function(){
cartPanel.classList.remove("active")
}

displayFoods(foods)
