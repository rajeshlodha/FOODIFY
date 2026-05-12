// Comprehensive Restaurant and Food Data
const restaurantsDatabase = [
  {
    id: 'mcdonalds',
    name: "McDonald's",
    cuisine: ['Burgers', 'Fast Food'],
    rating: 4.4,
    minOrder: 150,
    deliveryFee: 30,
    deliveryTime: '25 min',
    address: '123 Food Street, Downtown Mall',
    phone: '9876543210',
    openingHours: '10:00 AM - 11:00 PM',
    isOpen: true,
    image: 'https://i.pinimg.com/1200x/55/64/8a/55648a45dfcccebeb534d18c2078811d.jpg',
    isVegOnly: false,
    ratingBreakdown: { 5: 45, 4: 30, 3: 15, 2: 8, 1: 2 },
    reviews: [
      { user: 'Raj Kumar', rating: 5, text: 'Great taste and quick delivery!', date: '2025-05-01' },
      { user: 'Priya Singh', rating: 4, text: 'Good food, slightly pricey', date: '2025-04-28' }
    ],
    foods: [
      { name: "Big Mac", price: 249, category: "burger", veg: false, img: "https://images.pexels.com/photos/30500743/pexels-photo-30500743.jpeg", available: true },
      { name: "Crispy Fries", price: 79, category: "sides", veg: true, img: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg", available: true },
      { name: "Chicken McNuggets", price: 149, category: "chicken", veg: false, img: "https://images.pexels.com/photos/11710530/pexels-photo-11710530.jpeg", available: true },
      { name: "McSpicy Burger", price: 199, category: "burger", veg: false, img: "https://imgs.search.brave.com/pgDFbux-RRL3lSQckW_2e1GCs9Is97oG9TZJ5JtOfQo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZXRy/by5jby51ay93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNy9T/RUNfODY2OTc2NTMu/anBnP3F1YWxpdHk9/OTAmc3RyaXA9YWxs/Jnc9NjQ2", available: true },
      { name: "Coca Cola", price: 49, category: "drinks", veg: true, img: "https://imgs.search.brave.com/FHa5wZPNrzP5kdNd5x-cOYOJlagpAqvIxgLOWuUj7Zw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC8y/MjEtMjIxNDE5NF9z/b2Z0LWRyaW5rcy1t/Y2RvbmFsZHMtY29r/ZS5wbmc", available: true }
    ]
  },
  {
    id: 'martinoz',
    name: "Martinoz",
    cuisine: ['Pizza', 'Italian'],
    rating: 4.6,
    minOrder: 200,
    deliveryFee: 40,
    deliveryTime: '30 min',
    address: '456 Pizza Avenue, City Center',
    phone: '9876543211',
    openingHours: '11:00 AM - 11:30 PM',
    isOpen: true,
    image: 'https://imgs.search.brave.com/kmEdhfEnANCfo7ePQVgPFaQ1ojkEz9qCvbevlTFn5a8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dm9pY2VvZnNhcC5v/cmcvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjYvMDEvZmlsZTAt/NTcuanBn',
    isVegOnly: false,
    ratingBreakdown: { 5: 50, 4: 28, 3: 15, 2: 5, 1: 2 },
    reviews: [
      { user: 'Amit Patel', rating: 5, text: 'Best pizza in town!', date: '2025-05-02' }
    ],
    foods: [
      { name: "Margherita Pizza", price: 349, category: "pizza", veg: true, img: "https://images.pexels.com/photos/20115306/pexels-photo-20115306.jpeg", available: true },
      { name: "Pepperoni Pizza", price: 399, category: "pizza", veg: false, img: "https://imgs.search.brave.com/4MThpWNc8g65-eMYOytPHEOlXsPTCVhdOZGbYmdWZv4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dWVuZ2FnZS5pby91/cGxvYWRzLzUvaW1h/Z2UtNjk0OTI1LTE3/MTU2Nzg5MDgucG5n", available: true },
      { name: "Veggie Supreme", price: 329, category: "pizza", veg: true, img: "https://imgs.search.brave.com/5Gx6CdgoybXvMIBdWgtcL1y9nqhLFtXMF20WBuDd66w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGh1cnNkYXluaWdo/dHBpenphLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Ni92ZWdnaWUtcGl6/emEtb3ZlcmhlYWQt/c2xpY2VkLTcyMHg5/MDAucG5n", available: true },
      { name: "Four Cheese Pizza", price: 449, category: "pizza", veg: true, img: "https://i.pinimg.com/1200x/c3/aa/22/c3aa22b1d73e65c59cd98316df03078e.jpg", available: true },
      { name: "Garlic Bread", price: 149, category: "sides", veg: true, img: "https://i.pinimg.com/736x/38/19/a1/3819a163d2ae93ea60f4a3c85d821cf1.jpg", available: true }
    ]
  },
  {
    id: 'farzi_cafe',
    name: "Farzi Cafe",
    cuisine: ['Indian', 'North Indian'],
    rating: 4.5,
    minOrder: 250,
    deliveryFee: 50,
    deliveryTime: '35 min',
    address: '789 Heritage Road, Old Town',
    phone: '9876543212',
    openingHours: '12:00 PM - 12:00 AM',
    isOpen: true,
    image: 'https://imgs.search.brave.com/fQPKs9hSJjJe-ltk2Ol0kfNQqXDbvzq4z7q6AOeID1s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iLnpt/dGNkbi5jb20vZGF0/YS9waWN0dXJlcy8w/LzE4NzIyNDgwLzc4/MDhjZDU3NzRiYjM4/Y2Q5ZjdlMmFhZDhi/MjdlNDQ5LmpwZw',
    isVegOnly: false,
    ratingBreakdown: { 5: 48, 4: 32, 3: 12, 2: 5, 1: 3 },
    reviews: [],
    foods: [
      { name: "Butter Chicken", price: 349, category: "chicken", veg: false, img: "https://i.pinimg.com/1200x/a7/12/b3/a712b30ad8fcf3b5d1329ff3233f99d1.jpg", available: true },
      { name: "Butter Naan", price: 69, category: "bread", veg: true, img: "https://i.pinimg.com/1200x/c3/98/b1/c398b1367a78955ae6f7edd80107cf18.jpg", available: true },
      { name: "Chicken Tikka", price: 299, category: "chicken", veg: false, img: "https://i.pinimg.com/736x/18/93/b1/1893b1414f45ace82f2de43015d4c990.jpg", available: true },
      { name: "Dal Makhani", price: 249, category: "vegetarian", veg: true, img: "https://i.pinimg.com/1200x/98/ae/52/98ae52634a80a52054bf9aff67bfef34.jpg", available: true },
      { name: "Paneer Tikka Masala", price: 299, category: "paneer", veg: true, img: "https://i.pinimg.com/736x/59/81/85/5981859da80c1d8580654daf371d0ffe.jpg", available: true }
    ]
  },
  {
    id: 'starbucks',
    name: "Starbucks",
    cuisine: ['Coffee', 'Beverages'],
    rating: 4.3,
    minOrder: 100,
    deliveryFee: 20,
    deliveryTime: '28 min',
    address: '321 Coffee Lane, Shopping District',
    phone: '9876543213',
    openingHours: '7:00 AM - 10:00 PM',
    isOpen: true,
    image: 'https://imgs.search.brave.com/EcsdhOuPf2M1J2U0Xx4HmM4tF9psKLytbnhRTMkIe1Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/MjQ4MDg3OS9waG90/by9vdXRkb29yLXNl/YXRpbmctYXJlYS1v/Zi1hLXN0YXJidWNr/cy1jb2ZmZWUtc2hv/cC1vbi1hLWJ1c3kt/c3RyZWV0LXdpdGgt/dmlicmFudC1zdG9y/ZWZyb250LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1XdUJ6/S251c2hTVDZ5d0Ew/cVp1UjRoS3haQng3/ZU9fUC1JWFZXNF81/R2JVPQ',
    isVegOnly: true,
    ratingBreakdown: { 5: 42, 4: 35, 3: 15, 2: 5, 1: 3 },
    reviews: [],
    foods: [
      { name: "Caffe Latte", price: 249, category: "beverage", veg: true, img: "https://i.pinimg.com/736x/f8/56/1e/f8561ea80e14bd1989b4fe87736e1468.jpg", available: true },
      { name: "Cappuccino", price: 249, category: "beverage", veg: true, img: "https://i.pinimg.com/736x/4d/e4/0c/4de40c8bbd7ca5c9a76587faf386d444.jpg", available: true },
      { name: "Iced Mocha", price: 299, category: "beverage", veg: true, img: "https://i.pinimg.com/736x/4d/e0/68/4de068124212961d6481e6c631774053.jpg", available: true },
      { name: "Butter Croissant", price: 129, category: "dessert", veg: true, img: "https://i.pinimg.com/1200x/92/ab/c7/92abc79ba42ba38955d1623c0f0c39f0.jpg", available: true },
      { name: "Matcha Green Tea", price: 189, category: "beverage", veg: true, img: "https://i.pinimg.com/736x/9f/19/41/9f19411347b2a4a41a56fd8c23349500.jpg", available: true }
    ]
  },
  {
    id: 'indigo_cafe',
    name: "Indigo Cafe",
    cuisine: ['Indian', 'North Indian'],
    rating: 4.7,
    minOrder: 200,
    deliveryFee: 35,
    deliveryTime: '22 min',
    address: '654 Flavors Street, Downtown',
    phone: '9876543214',
    openingHours: '11:00 AM - 11:00 PM',
    isOpen: true,
    image: 'https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?auto=compress&cs=tinysrgb&w=500',
    isVegOnly: false,
    ratingBreakdown: { 5: 55, 4: 30, 3: 10, 2: 3, 1: 2 },
    reviews: [],
    foods: [
      { name: "Chicken Biryani", price: 329, category: "biryani", veg: false, img: "https://i.pinimg.com/1200x/f3/ff/2e/f3ff2e4d2e96a0ad9838e8241c554fc2.jpg", available: true },
      { name: "Tandoori Naan", price: 79, category: "bread", veg: true, img: "https://i.pinimg.com/1200x/c3/98/b1/c398b1367a78955ae6f7edd80107cf18.jpg", available: true },
      { name: "Shahi Tukda", price: 149, category: "dessert", veg: true, img: "https://i.pinimg.com/736x/5f/b4/63/5fb4638b9d47571dd2416a4dea924492.jpg", available: true },
      { name: "Chole Bhature", price: 249, category: "vegetarian", veg: true, img: "https://i.pinimg.com/736x/d6/60/25/d660255e0ac13e20bc3c674ee3d11ac4.jpg", available: true },
      { name: "Samosa (4 pcs)", price: 79, category: "snacks", veg: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop", available: true }
    ]
  },
  {
    id: 'dhaba_royalty',
    name: "Dhaba Royalty",
    cuisine: ['Indian', 'Authentic'],
    rating: 4.6,
    minOrder: 200,
    deliveryFee: 40,
    deliveryTime: '32 min',
    address: '987 Village Road, Outskirts',
    phone: '9876543215',
    openingHours: '10:00 AM - 11:00 PM',
    isOpen: true,
    image: 'https://i.pinimg.com/736x/11/82/96/1182969ff7c16db40f998969db776a9c.jpg',
    isVegOnly: false,
    ratingBreakdown: { 5: 50, 4: 32, 3: 12, 2: 4, 1: 2 },
    reviews: [],
    foods: [
      { name: "Rajma Chawal", price: 199, category: "vegetarian", veg: true, img: "https://i.pinimg.com/1200x/4e/70/b9/4e70b9a62f5334ed8219d337b8aba65e.jpg", available: true },
      { name: "Makki Roti with Butter", price: 59, category: "bread", veg: true, img: "https://i.pinimg.com/736x/0b/3f/78/0b3f780cd1ccadb90fec6b5feabae158.jpg", available: true },
      { name: "Aloo Gobi", price: 189, category: "vegetarian", veg: true, img: "https://i.pinimg.com/736x/d1/c5/0a/d1c50a4b55e421f7c28978b6cc7cda5d.jpg", available: true },
      { name: "Mango Lassi", price: 99, category: "beverage", veg: true, img: "https://i.pinimg.com/736x/34/38/ae/3438ae36525fa205186a85d44881f4af.jpg", available: true },
      { name: "Vegetable Pakora", price: 129, category: "vegetarian", veg: true, img: "https://i.pinimg.com/1200x/20/4f/44/204f445ab7277c9fce8114fdd421b432.jpg", available: true }
    ]
  },
  {
    id: 'saffron_kitchen',
    name: "Saffron Kitchen",
    cuisine: ['Indian', 'South Indian'],
    rating: 4.8,
    minOrder: 150,
    deliveryFee: 30,
    deliveryTime: '28 min',
    address: '321 Spice Market, South Zone',
    phone: '9876543216',
    openingHours: '9:00 AM - 11:00 PM',
    isOpen: true,
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=500',
    isVegOnly: false,
    ratingBreakdown: { 5: 60, 4: 25, 3: 10, 2: 3, 1: 2 },
    reviews: [],
    foods: [
      { name: "Masala Dosa", price: 179, category: "vegetarian", veg: true, img: "https://i.pinimg.com/1200x/d4/d0/55/d4d05510d95f793fd27855bbe5851f20.jpg", available: true },
      { name: "Idli (3 pcs)", price: 99, category: "vegetarian", veg: true, img: "https://i.pinimg.com/736x/6e/ce/8d/6ece8d9a9ad234ea9813cd29397ae44f.jpg", available: true },
      { name: "Sambar Rice", price: 159, category: "vegetarian", veg: true, img: "https://i.pinimg.com/1200x/c9/50/f4/c950f41036fd2171b857eea04b58dc42.jpg", available: true },
      { name: "Vegetable Uttapam", price: 149, category: "vegetarian", veg: true, img: "https://i.pinimg.com/736x/0a/4b/91/0a4b91c8acb10d03394c4c99e6c4d3b0.jpg", available: true },
      { name: "Coconut Chutney", price: 59, category: "vegetarian", veg: true, img: "https://i.pinimg.com/1200x/45/1a/24/451a24a5d7ce55f0a92178160404c3c9.jpg", available: true }
    ]
  },
  {
    id: 'tandoor_palace',
    name: "Tandoor Palace",
    cuisine: ['Indian', 'Mughlai'],
    rating: 4.5,
    minOrder: 250,
    deliveryFee: 50,
    deliveryTime: '35 min',
    address: '555 Royal Lane, Premium Area',
    phone: '9876543217',
    openingHours: '12:00 PM - 12:00 AM',
    isOpen: true,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=500',
    isVegOnly: false,
    ratingBreakdown: { 5: 48, 4: 30, 3: 15, 2: 5, 1: 2 },
    reviews: [],
    foods: [
      { name: "Nihari", price: 399, category: "chicken", veg: false, img: "https://i.pinimg.com/1200x/18/4e/dc/184edc3e0974acb9d8eb28127070631b.jpg", available: true },
      { name: "Tandoori Chicken (1 kg)", price: 599, category: "chicken", veg: false, img: "https://i.pinimg.com/1200x/6d/27/0c/6d270c5961d575b31e79488869e9f363.jpg", available: true },
      { name: "Mughlai Biryani", price: 449, category: "biryani", veg: false, img: "https://i.pinimg.com/1200x/a0/ba/5c/a0ba5c215ead289dd136a6f17b0a51a6.jpg", available: true },
      { name: "Chicken Korma", price: 349, category: "chicken", veg: false, img: "https://i.pinimg.com/1200x/c3/e7/15/c3e7159d14da55878b6d189f8579bd3f.jpg", available: true },
      { name: "Seekh Kebab (4 pcs)", price: 249, category: "kebab", veg: false, img: "https://i.pinimg.com/736x/16/97/f2/1697f230003869651b46ac62c1cf0f0b.jpg", available: true }
    ]
  }
];

// Coupon System
const coupons = {
  'FIRST50': {
    code: 'FIRST50',
    discount: 50,
    type: 'fixed', // 'fixed' or 'percentage'
    minOrder: 200,
    maxDiscount: 100,
    description: '₹50 off on first order'
  },
  'SAVE200': {
    code: 'SAVE200',
    discount: 200,
    type: 'fixed',
    minOrder: 500,
    maxDiscount: 200,
    description: '₹200 off on orders above ₹500'
  },
  'FLAT20': {
    code: 'FLAT20',
    discount: 20,
    type: 'percentage',
    minOrder: 300,
    maxDiscount: 150,
    description: '20% off on orders above ₹300'
  },
  'WELCOME': {
    code: 'WELCOME',
    discount: 100,
    type: 'fixed',
    minOrder: 200,
    maxDiscount: 100,
    description: '₹100 off - Welcome bonus'
  },
  'FAST30': {
    code: 'FAST30',
    discount: 30,
    type: 'fixed',
    minOrder: 250,
    maxDiscount: 30,
    description: '₹30 off on fast delivery'
  }
};

// Default user data structure
const defaultUser = {
  name: '',
  email: '',
  phone: '',
  addresses: [],
  defaultAddress: null,
  favoriteRestaurants: [],
  favoriteFoods: [],
  previousOrders: [],
  savedPaymentMethods: []
};

// Get restaurant by ID
function getRestaurant(restaurantId) {
  return restaurantsDatabase.find(r => r.id === restaurantId);
}

// Get all restaurants
function getAllRestaurants() {
  return restaurantsDatabase;
}

// Search restaurants and foods
function searchFoods(query, restaurants = restaurantsDatabase) {
  const lowerQuery = query.toLowerCase();
  const results = [];
  
  restaurants.forEach(restaurant => {
    const restaurantMatches = restaurant.name.toLowerCase().includes(lowerQuery);
    const cuisineMatches = restaurant.cuisine.some(c => c.toLowerCase().includes(lowerQuery));
    
    if (restaurantMatches || cuisineMatches) {
      results.push({
        type: 'restaurant',
        data: restaurant
      });
    }
    
    const matchingFoods = restaurant.foods.filter(food => 
      food.name.toLowerCase().includes(lowerQuery) || 
      food.category.toLowerCase().includes(lowerQuery)
    );
    
    if (matchingFoods.length > 0) {
      matchingFoods.forEach(food => {
        results.push({
          type: 'food',
          data: food,
          restaurant: restaurant
        });
      });
    }
  });
  
  return results;
}

// Validate coupon
function validateCoupon(code, total) {
  const coupon = coupons[code.toUpperCase()];
  
  if (!coupon) {
    return { valid: false, message: 'Invalid coupon code' };
  }
  
  if (total < coupon.minOrder) {
    return { valid: false, message: `Minimum order of ₹${coupon.minOrder} required` };
  }
  
  return { valid: true, coupon: coupon };
}

// Calculate discount
function calculateDiscount(coupon, total) {
  if (coupon.type === 'fixed') {
    return Math.min(coupon.discount, coupon.maxDiscount);
  } else if (coupon.type === 'percentage') {
    return Math.min(Math.floor(total * coupon.discount / 100), coupon.maxDiscount);
  }
  return 0;
}

// Filter restaurants
function filterRestaurants(restaurants, filters = {}) {
  let filtered = [...restaurants];
  
  if (filters.veg === true) {
    filtered = filtered.filter(r => !r.foods.some(f => !f.veg));
  }
  
  if (filters.nonVeg === true) {
    filtered = filtered.filter(r => r.foods.some(f => !f.veg));
  }
  
  if (filters.rating) {
    filtered = filtered.filter(r => r.rating >= filters.rating);
  }
  
  if (filters.maxPrice) {
    filtered = filtered.filter(r => 
      r.foods.some(f => f.price <= filters.maxPrice)
    );
  }
  
  if (filters.minDelivery === 'fast') {
    filtered = filtered.filter(r => {
      const time = parseInt(r.deliveryTime);
      return time <= 30;
    });
  }
  
  return filtered;
}

// Sort restaurants
function sortRestaurants(restaurants, sortBy = 'rating') {
  const sorted = [...restaurants];
  
  switch(sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => {
        const priceA = Math.min(...a.foods.map(f => f.price));
        const priceB = Math.min(...b.foods.map(f => f.price));
        return priceA - priceB;
      });
    case 'price-high':
      return sorted.sort((a, b) => {
        const priceA = Math.max(...a.foods.map(f => f.price));
        const priceB = Math.max(...b.foods.map(f => f.price));
        return priceB - priceA;
      });
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'delivery-time':
      return sorted.sort((a, b) => {
        const timeA = parseInt(a.deliveryTime);
        const timeB = parseInt(b.deliveryTime);
        return timeA - timeB;
      });
    default:
      return sorted;
  }
}
