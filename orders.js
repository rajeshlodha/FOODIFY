// Orders tracking system
const orderStatuses = {
  confirmed: { label: 'Confirmed', icon: '✓', color: '#FF4D3D' },
  preparing: { label: 'Preparing', icon: '👨‍🍳', color: '#FF6B5B' },
  outForDelivery: { label: 'Out for Delivery', icon: '🛵', color: '#FF8B7B' },
  delivered: { label: 'Delivered', icon: '✓', color: '#52C41A' }
};

class Order {
  constructor(items, total, restaurant) {
    this.id = 'ORD' + Date.now().toString().slice(-6);
    this.items = items;
    this.total = total;
    this.restaurant = restaurant;
    this.status = 'confirmed';
    this.timestamp = new Date();
    this.estimatedTime = 25; // minutes
    this.deliveryPartner = this.generateDeliveryPartner();
    this.currentDistance = 5.2; // km
    this.currentSpeed = 0; // km/h
    this.statusTimeline = {
      confirmed: new Date(),
      preparing: null,
      outForDelivery: null,
      delivered: null
    };
  }

  generateDeliveryPartner() {
    const partners = [
      { name: 'Rajesh Kumar', rating: 4.8 },
      { name: 'Priya Singh', rating: 4.9 },
      { name: 'Amit Patel', rating: 4.7 },
      { name: 'Neha Sharma', rating: 4.8 },
      { name: 'Vikas Verma', rating: 4.6 }
    ];
    return partners[Math.floor(Math.random() * partners.length)];
  }

  updateStatus(newStatus) {
    this.status = newStatus;
    this.statusTimeline[newStatus] = new Date();
    
    if (newStatus === 'preparing') {
      this.estimatedTime = 20;
    } else if (newStatus === 'outForDelivery') {
      this.estimatedTime = 15;
      this.currentSpeed = Math.random() * 30 + 35; // 35-65 km/h
    } else if (newStatus === 'delivered') {
      this.estimatedTime = 0;
      this.currentDistance = 0;
      this.currentSpeed = 0;
    }
  }

  updateDistance() {
    if (this.status === 'outForDelivery' && this.currentDistance > 0) {
      this.currentDistance -= Math.random() * 0.1 + 0.05; // Decrease distance
      if (this.currentDistance < 0) {
        this.currentDistance = 0;
        this.updateStatus('delivered');
      }
      
      // Update estimated time
      if (this.currentSpeed > 0) {
        this.estimatedTime = Math.ceil((this.currentDistance / this.currentSpeed) * 60);
      }
    }
  }
}

let allOrders = [];

// Load orders from localStorage
function loadOrders() {
  const saved = localStorage.getItem('foodifyOrders');
  if (saved) {
    const parsed = JSON.parse(saved);
    allOrders = parsed.map(o => Object.assign(new Order([], 0), o));
  }
}

// Save orders to localStorage
function saveOrders() {
  localStorage.setItem('foodifyOrders', JSON.stringify(allOrders));
}

// Create new order after checkout
function createOrder(cartItems, total, restaurant = 'McDonald\'s') {
  const order = new Order(cartItems, total, restaurant);
  allOrders.unshift(order); // Add to beginning
  saveOrders();
  simulateOrderProgress(order);
  return order;
}

// Simulate order progress
function simulateOrderProgress(order) {
  let currentStatusIndex = 0;
  const statuses = ['confirmed', 'preparing', 'outForDelivery', 'delivered'];

  const interval = setInterval(() => {
    if (currentStatusIndex < statuses.length - 1) {
      currentStatusIndex++;
      order.updateStatus(statuses[currentStatusIndex]);
      saveOrders();
      
      // Update UI if tracking modal is open
      if (document.getElementById('trackingModal').classList.contains('active')) {
        displayOrderTracking(order);
      }
    } else {
      clearInterval(interval);
    }
  }, 8000); // Change status every 8 seconds

  // Update distance every 2 seconds
  const distanceInterval = setInterval(() => {
    order.updateDistance();
    saveOrders();
    
    if (document.getElementById('trackingModal').classList.contains('active')) {
      displayOrderTracking(order);
    }
    
    if (order.status === 'delivered') {
      clearInterval(distanceInterval);
    }
  }, 2000);
}

// Display all orders
function displayOrders() {
  const container = document.getElementById('ordersContainer');
  
  if (allOrders.length === 0) {
    container.innerHTML = '<p class="no-orders">No orders yet. Start ordering to see your orders here!</p>';
    return;
  }

  let html = '<div class="orders-grid">';
  
  allOrders.forEach(order => {
    const statusInfo = orderStatuses[order.status];
    const time = new Date(order.timestamp).toLocaleDateString();
    
    html += `
      <div class="order-card" onclick="openOrderTracking('${order.id}')">
        <div class="order-header">
          <div>
            <h4>Order #${order.id}</h4>
            <p class="order-restaurant">📍 ${order.restaurant}</p>
          </div>
          <div class="order-status-badge" style="background-color: ${statusInfo.color}">
            ${statusInfo.icon} ${statusInfo.label}
          </div>
        </div>
        
        <div class="order-items-preview">
          ${order.items.slice(0, 2).map(item => `<p>• ${item.name} x${item.qty}</p>`).join('')}
          ${order.items.length > 2 ? `<p>• +${order.items.length - 2} more</p>` : ''}
        </div>
        
        <div class="order-footer">
          <span>₹${order.total}</span>
          <span class="order-time">${time}</span>
        </div>
        
        ${order.status !== 'delivered' ? `
          <div class="tracking-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${getProgressPercentage(order.status)}%"></div>
            </div>
            <p class="eta">${order.estimatedTime > 0 ? order.estimatedTime + ' mins' : 'Delivered!'}</p>
          </div>
        ` : '<p style="color: #52C41A; font-weight: 600; margin-top: 10px;">✓ Delivered</p>'}
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

function getProgressPercentage(status) {
  const statuses = { confirmed: 25, preparing: 50, outForDelivery: 75, delivered: 100 };
  return statuses[status] || 0;
}

// Open order tracking modal
function openOrderTracking(orderId) {
  const order = allOrders.find(o => o.id === orderId);
  if (!order) return;
  
  displayOrderTracking(order);
  document.getElementById('trackingModal').classList.add('active');
}

// Display order tracking details
function displayOrderTracking(order) {
  const modal = document.getElementById('trackingModal');
  const statusInfo = orderStatuses[order.status];
  
  document.getElementById('trackingOrderId').textContent = `Order #${order.id}`;
  document.getElementById('trackingStatus').textContent = statusInfo.label;
  document.getElementById('trackingStatus').style.backgroundColor = statusInfo.color;
  
  // Update timeline
  updateTimeline(order);
  
  // Update delivery partner
  document.getElementById('partnerName').textContent = order.deliveryPartner.name;
  
  // Update stats
  document.getElementById('estimatedTime').textContent = order.estimatedTime > 0 
    ? `${order.estimatedTime} mins` 
    : 'Delivered!';
  document.getElementById('distanceValue').textContent = order.currentDistance.toFixed(1) + ' km';
  document.getElementById('speedValue').textContent = Math.round(order.currentSpeed) + ' km/h';
  
  // Update order summary
  let summaryHtml = '';
  order.items.forEach(item => {
    summaryHtml += `
      <div class="order-item-row">
        <span>${item.name} x${item.qty}</span>
        <span>₹${item.price * item.qty}</span>
      </div>
    `;
  });
  document.getElementById('trackingSummary').innerHTML = summaryHtml;
  document.getElementById('trackingTotal').textContent = '₹' + order.total;
}

function updateTimeline(order) {
  const items = document.querySelectorAll('.timeline-item');
  const statuses = ['confirmed', 'preparing', 'outForDelivery', 'delivered'];
  
  statuses.forEach((status, index) => {
    const statusIdx = statuses.indexOf(status);
    const currentStatusIdx = statuses.indexOf(order.status);
    
    if (statusIdx < currentStatusIdx) {
      items[index].classList.add('completed');
      items[index].classList.remove('active');
    } else if (statusIdx === currentStatusIdx) {
      items[index].classList.remove('completed');
      items[index].classList.add('active');
    } else {
      items[index].classList.remove('completed', 'active');
    }
  });
}

function closeTracking() {
  document.getElementById('trackingModal').classList.remove('active');
}

// Initialize
function initializeOrders() {
  loadOrders();
  displayOrders();
  
  // Close tracking modal
  document.querySelector('.close-tracking').addEventListener('click', closeTracking);
  
  // Start tracking for active orders
  allOrders.forEach(order => {
    if (order.status !== 'delivered') {
      simulateOrderProgress(order);
    }
  });
}

// Call on page load
window.addEventListener('DOMContentLoaded', () => {
  initializeOrders();
});
