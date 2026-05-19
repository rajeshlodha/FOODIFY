// Cart object and DOM elements
const cart={}
const cartItems=document.getElementById("cartItems")
const total=document.getElementById("total")
const cartCount=document.getElementById("cartCount")
const cartPanel=document.getElementById("cartPanel")
const loginBtn=document.getElementById("loginBtn")
const logoutBtn=document.getElementById("logoutBtn")
const loginModal=document.getElementById("loginModal")
const cartIcon=document.getElementById("cartIcon")
const grid=document.getElementById("foodGrid")

// Check if user is logged in. Keep this scoped away from profile.html's own userProfile state.
const fallbackUserProfile = (typeof defaultUser !== 'undefined')
  ? defaultUser
  : { name: '', email: '', phone: '', addresses: [], defaultAddress: null, favoriteRestaurants: [], favoriteFoods: [], previousOrders: [], savedPaymentMethods: [] }
const storedUserProfile = JSON.parse(localStorage.getItem('userProfile') || JSON.stringify(fallbackUserProfile))
if(storedUserProfile && storedUserProfile.name && loginBtn && logoutBtn){
  loginBtn.style.display = 'none'
  logoutBtn.style.display = 'block'
} else if(logoutBtn && !loginBtn) {
  logoutBtn.style.display = 'block'
} else if(storedUserProfile && storedUserProfile.name && loginBtn) {
  loginBtn.textContent = storedUserProfile.name.split(' ')[0] || 'Profile'
  loginBtn.onclick = () => {
    window.location.href = 'profile.html'
  }
}

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
if(typeof foods === 'undefined') return
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
  cartIcon.onclick = () => {
    if(cartPanel){
      toggleCart()
    } else {
      window.location.href = 'cart.html'
    }
  }
}
if(loginModal){
  setupAuthModal()
}

if(loginBtn && !(storedUserProfile && storedUserProfile.name)){
  loginBtn.onclick=()=>{
    if(loginModal){
      loginModal.style.display="flex"
    }
  }
}

// Search functionality
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')

if(searchBtn && searchInput){
  searchBtn.onclick = () => {
    const query = searchInput.value.trim()
    if(query){
      window.location.href = 'search.html?q=' + encodeURIComponent(query)
    }
  }
  
  searchInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
      const query = searchInput.value.trim()
      if(query){
        window.location.href = 'search.html?q=' + encodeURIComponent(query)
      }
    }
  })
}

function closeLogin(){
  if(loginModal){
    loginModal.style.display="none"
  }
}

function handleLogin(){
  const nameOrEmail = document.getElementById('authLoginId')?.value.trim()
  const password = document.getElementById('authLoginPassword')?.value.trim()

  if(!nameOrEmail || !password){
    showNotification('Please enter login details')
    return
  }

  const existingProfile = JSON.parse(localStorage.getItem('userProfile') || JSON.stringify(fallbackUserProfile))
  if(!existingProfile.name){
    existingProfile.name = nameOrEmail.includes('@') ? nameOrEmail.split('@')[0] : nameOrEmail
    existingProfile.email = nameOrEmail.includes('@') ? nameOrEmail : existingProfile.email
    localStorage.setItem('userProfile', JSON.stringify(existingProfile))
  }

  closeLogin()
  showNotification('Logged in successfully!')
  setTimeout(() => window.location.reload(), 700)
}

function handleRegister(){
  const name = document.getElementById('authRegisterName')?.value.trim()
  const email = document.getElementById('authRegisterEmail')?.value.trim()
  const phone = document.getElementById('authRegisterPhone')?.value.trim()
  const password = document.getElementById('authRegisterPassword')?.value.trim()

  if(!name || !email || !phone || !password){
    showNotification('Please fill all registration fields')
    return
  }

  const profile = {
    ...fallbackUserProfile,
    ...JSON.parse(localStorage.getItem('userProfile') || '{}'),
    name,
    email,
    phone
  }

  localStorage.setItem('userProfile', JSON.stringify(profile))
  closeLogin()
  showNotification('Account created successfully!')
  setTimeout(() => window.location.href = 'profile.html', 800)
}

function switchAuthMode(mode){
  document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'))
  document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'))
  document.querySelector(`[data-auth-tab="${mode}"]`)?.classList.add('active')
  document.getElementById(`${mode}Form`)?.classList.add('active')
}

function setupAuthModal(){
  loginModal.innerHTML = `
    <div class="login-box auth-box">
      <div class="login-header">
        <h3>Welcome to Foodify</h3>
        <button class="modal-close" onclick="closeLogin()">x</button>
      </div>

      <div class="auth-tabs">
        <button class="auth-tab active" data-auth-tab="login" onclick="switchAuthMode('login')">Login</button>
        <button class="auth-tab" data-auth-tab="register" onclick="switchAuthMode('register')">Register</button>
      </div>

      <div id="loginForm" class="auth-form active">
        <input type="text" id="authLoginId" placeholder="Email, phone, or username" required aria-label="Email, phone, or username">
        <input type="password" id="authLoginPassword" placeholder="Password" required aria-label="Password">
        <button onclick="handleLogin()">Login</button>
      </div>

      <div id="registerForm" class="auth-form">
        <input type="text" id="authRegisterName" placeholder="Full name" required aria-label="Full name">
        <input type="email" id="authRegisterEmail" placeholder="Email address" required aria-label="Email address">
        <input type="tel" id="authRegisterPhone" placeholder="Phone number" required aria-label="Phone number">
        <input type="password" id="authRegisterPassword" placeholder="Create password" required aria-label="Create password">
        <button onclick="handleRegister()">Create Account</button>
      </div>
    </div>
  `
}

function checkout(){
if(Object.keys(cart).length === 0){
alert("Your cart is empty!")
return
}

// Redirect to cart page for full checkout process
window.location.href = 'cart.html'
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

