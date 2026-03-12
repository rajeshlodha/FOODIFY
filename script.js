// Cart object and DOM elements
const cart={}
const cartItems=document.getElementById("cartItems")
const total=document.getElementById("total")
const cartCount=document.getElementById("cartCount")
const cartPanel=document.getElementById("cartPanel")
const loginBtn=document.getElementById("loginBtn")
const loginModal=document.getElementById("loginModal")
const cartIcon=document.getElementById("cartIcon")

// Load saved cart on page load
let savedCart = localStorage.getItem("cart")
if(savedCart){
try{
Object.assign(cart, JSON.parse(savedCart))
if(cartItems && total && cartCount){
updateCart()
}
}catch(e){
console.error("Failed to load cart:", e)
}
}

function displayFoods(list){
if(!grid) return
grid.innerHTML=""
let html=""
list.forEach((food,i)=>{
html+=`
<div class="food-card">
<img src="${food.img}" alt="${food.name}">
<h4>${food.name}</h4>
<p>₹${food.price}</p>
<button onclick="addToCart(${i})" aria-label="Add ${food.name} to cart">Add to Cart</button>
</div>
`
})
grid.innerHTML=html
if(list.length===0){
grid.innerHTML="<p style='grid-column:1/-1;text-align:center;'>No items found</p>"
}
}

function addToCart(i){
if(i < 0 || i >= foods.length) return
let item = foods[i]
if(cart[item.name]){
cart[item.name].qty++
}else{
cart[item.name] = {...item, qty:1}
}
updateCart()
showNotification(`${item.name} added to cart!`)
}

function updateCart(){
if(!cartItems || !total || !cartCount) return
let html=""
let sum = 0
let count = 0
Object.values(cart).forEach(item => {
const escapedName = item.name.replace(/'/g, "\\'")
html += `
<li class="cart-item">
<span>${item.name}</span>
<div class="qty-box">
<button onclick="changeQty('${escapedName}',-1)" aria-label="Decrease ${item.name} quantity">-</button>
<span>${item.qty}</span>
<button onclick="changeQty('${escapedName}',1)" aria-label="Increase ${item.name} quantity">+</button>
</div>
<span>₹${item.price * item.qty}</span>
<button class="remove-btn" onclick="removeItem('${escapedName}')" aria-label="Remove ${item.name}">✕</button>
</li>
`
sum += item.price * item.qty
count += item.qty
})
cartItems.innerHTML = html
total.innerText = sum
cartCount.innerText = count
try{
localStorage.setItem("cart", JSON.stringify(cart))
}catch(e){
console.error("Failed to save cart:", e)
}
}

function toggleCart(){
if(!cartPanel) return
cartPanel.classList.toggle("active")
}

function changeQty(name,change){
if(cart[name]){
const newQty = cart[name].qty + change
if(newQty <= 0){
delete cart[name]
updateCart()
showNotification(`Removed from cart`, true)
}else{
cart[name].qty = newQty
updateCart()
showNotification(`Quantity updated!`)
}
}
}

function removeItem(name){
delete cart[name]
updateCart()
showNotification(`Removed from cart`, true)
}

function filterCategory(cat){
if(cat==='all'){
displayFoods(foods)
}else{
displayFoods(foods.filter(f=>f.category===cat))
}
}

function clearCart(){
  for(let key in cart){
    delete cart[key]
  }
  updateCart()
  localStorage.removeItem("cart")
}

function showNotification(message, isRemove=false){
  const notification = document.getElementById("notification")
  if(!notification) return
  
  notification.textContent = message
  notification.classList.remove("show", "show-remove")
  notification.classList.add("show")
  
  if(isRemove){
    notification.classList.add("show-remove")
  }
  
  setTimeout(()=>{
    notification.classList.remove("show", "show-remove")
  }, 2000)
}

if(cartIcon){
  cartIcon.onclick = toggleCart
}
if(loginBtn){
  loginBtn.onclick=()=>{
    if(loginModal){
      loginModal.style.display="flex"
    }
  }
}

function closeLogin(){
  if(loginModal){
    loginModal.style.display="none"
  }
}

function checkout(){
if(Object.keys(cart).length === 0){
alert("Your cart is empty!")
return
}
alert("Order placed successfully!")
clearCart()
showNotification("Order placed successfully! 🎉")
}

window.onload = function(){
  if(cartPanel){
    cartPanel.classList.remove("active")
  }
  // Only call displayFoods if foods array exists (for categories page)
  if(typeof foods !== 'undefined' && grid){
    displayFoods(foods)
  }
  
  // Initialize FAQ functionality
  initializeFAQ()
}

function initializeFAQ(){
  const faqItems = document.querySelectorAll('.faq-item')
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(otherItem => {
        if(otherItem !== item && otherItem.classList.contains('active')){
          otherItem.classList.remove('active')
        }
      })
      // Toggle current item
      item.classList.toggle('active')
    })
  })
}
