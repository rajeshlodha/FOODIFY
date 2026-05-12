# FOODIFY - Food Delivery Application

A modern, feature-rich food delivery application built with vanilla JavaScript, HTML, and CSS.

## 🚀 Features Implemented

### 1. **Working Search System** ✅
- Search for restaurants by name
- Search for food items by name and category
- Search by cuisine type
- Real-time search with filters
- Dedicated search results page with advanced filtering
- **Location:** `search.html`

### 2. **Real Filters and Sorting** ✅
- **Filter Options:**
  - Vegetarian Only
  - Non-Vegetarian
  - Rating 4.0+
  - Under ₹200
  - Fast Delivery (≤30 min)
- **Sorting Options:**
  - Best Rated
  - Price: Low to High
  - Price: High to Low
  - Fastest Delivery
- **Location:** `restaurant.html`

### 3. **User Profile Page** ✅
Multiple sections with saved data using localStorage:
- **Account Details:** Name, Email, Phone
- **Saved Addresses:** Add, edit, delete addresses with type (Home/Work/Other)
- **Previous Orders:** View order history with items and dates
- **Favorite Restaurants:** Save and view favorite restaurants
- **Payment Methods:** Store payment method details
- **Location:** `profile.html`

### 4. **Enhanced Checkout** ✅
Complete checkout process with:
- Order items summary
- Delivery address selection
- Delivery instructions
- Payment method selection (Card, UPI, Wallet, COD)
- Order summary with calculated totals
- **Location:** `cart.html`

### 5. **Coupon System** ✅
Fully functional coupon system:
- **Available Coupons:**
  - `FIRST50` - ₹50 off on first order
  - `SAVE200` - ₹200 off on orders above ₹500
  - `FLAT20` - 20% off on orders above ₹300
  - `WELCOME` - ₹100 welcome bonus
  - `FAST30` - ₹30 off on fast delivery
- Coupon validation with minimum order checks
- Discount calculation (fixed or percentage)
- Visual feedback for applied coupons
- **Location:** `cart.html`, `data.js`

### 6. **Admin/Restaurant Panel** ✅
Complete admin interface for restaurant management:
- **Dashboard:** Stats showing total items, availability, ratings
- **Manage Menu:** Edit prices, availability, item details
- **Add Menu Items:** Create new dishes with category, price, type
- **Orders:** View recent orders
- **Settings:** Manage restaurant details, hours, delivery fee
- Password protected (password: `admin123`)
- **Location:** `admin.html`

### 7. **Restaurant Detail Page** ✅
Comprehensive restaurant information:
- **Menu Tab:** Browse all items with filters (Veg/Non-Veg)
- **Information Tab:**
  - Opening hours
  - Address
  - Phone number
  - Delivery time
  - Delivery fee
  - Minimum order
- **Reviews Tab:**
  - View existing reviews
  - Add new review with rating
  - Rating summary
- Favorite/Wishlist button
- **Location:** `restaurant_detail.html`

### 8. **Favorites/Wishlist** ✅
Store and manage favorites using localStorage:
- Add/remove favorite restaurants
- View all favorite restaurants in profile
- Heart button on restaurant cards and detail pages
- Persistent storage across sessions
- **Location:** `restaurant.html`, `restaurant_detail.html`, `profile.html`

## 📂 File Structure

```
FOODIFY/
├── index.html              # Home page with search and restaurants
├── restaurant.html         # All restaurants with filters & sorting
├── restaurant_detail.html  # Restaurant details, menu, reviews
├── search.html             # Search results page
├── cart.html               # Enhanced checkout page
├── orders.html             # Order tracking
├── profile.html            # User profile with all sections
├── admin.html              # Admin/Restaurant management panel
├── categories.html         # Food categories
├── script.js               # Main JavaScript functionality
├── orders.js               # Order tracking system
├── data.js                 # Restaurant database & helper functions
├── style.css               # All styling (includes new pages)
└── images/                 # Restaurant and food images
```

## 🍽️ Restaurant Database

The application includes 8 pre-configured restaurants with:
- McDonald's (Burgers, Fast Food)
- Martinoz (Pizza, Italian)
- Farzi Cafe (Indian, North Indian)
- Starbucks (Coffee, Beverages)
- Indigo Cafe (Indian)
- Dhaba Royalty (Authentic Indian)
- Saffron Kitchen (South Indian)
- Tandoor Palace (Mughlai)

Each restaurant has:
- Complete menu with prices
- Opening hours
- Delivery info
- Address & phone
- Rating breakdown
- Review system

## 💾 Data Storage

Using localStorage for persistence:
- `cart` - Shopping cart items
- `foodifyOrders` - Order history
- `userProfile` - User information and addresses
- `favorites` - Favorite restaurants and foods
- `adminData` - Admin panel data

## 🔐 Authentication

- Basic login modal on all pages
- User profile saved locally
- Admin panel protected with password: `admin123`

## 🎯 Key Functions

### Search & Filters (data.js)
- `searchFoods(query)` - Search restaurants and foods
- `filterRestaurants(restaurants, filters)` - Apply filters
- `sortRestaurants(restaurants, sortBy)` - Sort results

### Coupon System (data.js)
- `validateCoupon(code, total)` - Validate coupon code
- `calculateDiscount(coupon, total)` - Calculate discount amount

### Cart Management (script.js)
- `addToCart(item)` - Add item to cart
- `updateCart()` - Update cart display
- `checkout()` - Process checkout
- `clearCart()` - Clear all items

### Order Tracking (orders.js)
- `createOrder(items, total)` - Create new order
- `simulateOrderProgress(order)` - Simulate delivery progress

## 🎨 Responsive Design

- Mobile-first approach
- Responsive grids and layouts
- Touch-friendly buttons and inputs
- Works on all device sizes (320px - 1920px+)

## 🚀 Getting Started

1. Open `index.html` in a web browser
2. Browse restaurants or use search
3. Click on a restaurant to view details
4. Add items to cart
5. Proceed to checkout with address and coupon
6. View orders in "My Orders"
7. Manage profile and saved addresses

## 🔧 Admin Access

1. Navigate to `admin.html`
2. Enter password: `admin123`
3. Manage menu items, prices, and availability
4. View restaurant statistics

## 📝 Features That Can Be Enhanced

- Backend integration for real data persistence
- Payment gateway integration
- Real-time order tracking with maps
- User authentication with server
- Rating and review moderation
- Admin dashboard with analytics
- Email notifications
- SMS notifications
- Push notifications

## 💡 Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Storage:** Browser localStorage
- **Styling:** CSS Grid, Flexbox, Responsive Design
- **Icons & Graphics:** Unicode emojis, Placeholder images

## ✨ Code Quality

- No breaking changes to existing code
- All features implemented seamlessly
- Clear function naming and documentation
- Proper error handling
- Smooth animations and transitions
- Accessible HTML structure

---

**Version:** 1.0.0  
**Last Updated:** May 2026
## SQLite Backend

This project now includes a Node.js + SQLite backend.

Run from the `FOODIFY` folder:

```bash
npm install
npm run seed
npm start
```

Then open:

```text
http://localhost:3000/index.html
```

Useful API routes:

- `GET /api/health`
- `GET /api/restaurants`
- `GET /api/restaurants/:id`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/orders`
- `POST /api/orders`

The SQLite database file is `foodify.db`.
