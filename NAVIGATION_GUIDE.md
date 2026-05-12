# Quick Navigation Guide - FOODIFY

## 🏠 Main Pages

### Home Page
**URL:** `index.html`
- Hero section with search bar
- Working search functionality
- Popular restaurants showcase
- Features section
- Promotions & offers
- Customer reviews
- FAQ section

### Restaurants Page
**URL:** `restaurant.html`
- All restaurants with filters
- **Filters Available:**
  - Vegetarian Only
  - Non-Vegetarian
  - Rating 4.0+
  - Under ₹200
  - Fast Delivery (≤30 min)
- **Sort Options:**
  - Best Rated
  - Price: Low to Highs
  - Price: High to Low
  - Fastest Delivery
- Favorite button for each restaurant

### Search Results Page
**URL:** `search.html` (or navigate from home search)
- Filter results by type (All/Restaurants/Foods)
- Show veg only option
- Sort results
- View both restaurants and individual food items

### Restaurant Detail Page
**URL:** `restaurant_detail.html?id=[restaurantId]`
- **Menu Tab:**
  - Browse all items
  - Filter by Veg/Non-Veg
  - Add items to cart
- **Information Tab:**
  - Opening hours
  - Address & phone
  - Delivery time & fee
  - Minimum order
  - Cuisine types
- **Reviews Tab:**
  - View existing reviews
  - Add new review with rating
  - See rating summary
- Favorite button to save restaurant

### Cart & Checkout
**URL:** `cart.html` (click Checkout from any page)
- **Order Items Summary:**
  - View all items
  - See prices and quantities
- **Delivery Address:**
  - Select from saved addresses
  - Add new address option
- **Delivery Instructions:**
  - Text field for special requests
- **Coupon Code:**
  - Apply coupon
  - View available coupons (quick apply)
  - See discount calculation
- **Payment Method:**
  - Card
  - UPI
  - Wallet
  - Cash on Delivery
- **Order Total:**
  - Subtotal
  - Discount
  - Delivery fee
  - Taxes
  - Final total

## 👤 User Profile
**URL:** `profile.html`

### Account Details Tab
- Update name, email, phone
- Save profile information

### Saved Addresses Tab
- Add new address (Home/Work/Other)
- Set default address
- View landmark info
- Edit or delete addresses

### Previous Orders Tab
- View order history
- See items ordered
- Check order dates and totals

### Favorite Restaurants Tab
- View all favorited restaurants
- Quick access to restaurant menus
- Remove from favorites

### Payment Methods Tab
- View saved payment methods
- Add new payment method
- Delete payment methods

## 🔧 Admin Panel
**URL:** `admin.html`
- **Password:** `admin123`

### Dashboard
- View statistics
- Total menu items
- Available vs unavailable items
- Average rating

### Manage Menu
- Search for items
- Filter by availability
- Edit prices
- Toggle availability
- Delete items

### Add Menu Item
- Item name
- Category selection
- Price
- Veg/Non-Veg type
- Image URL
- Availability toggle

### Orders Section
- View recent orders
- Order details

### Settings
- Restaurant name
- Address
- Phone number
- Opening hours
- Delivery fee
- Minimum order

## 🛒 Shopping Features

### Cart Management
- Add items from restaurant menu
- View cart (icon in navbar)
- Change quantities
- Remove items
- Clear entire cart
- See real-time totals

### Coupon Codes
Available coupons:
- **FIRST50** - ₹50 off (min ₹200)
- **SAVE200** - ₹200 off (min ₹500)
- **FLAT20** - 20% off (min ₹300)
- **WELCOME** - ₹100 off (min ₹200)
- **FAST30** - ₹30 off (min ₹250)

### Favorites/Wishlist
- Click heart ❤️ on restaurant cards
- Click heart on restaurant detail pages
- View all favorites in profile
- Remove from favorites

## 📱 Navigation Elements

### Top Navbar (on all pages)
- FOODIFY logo (links to home)
- Home link
- Restaurants link
- My Orders link
- Profile link
- Cart icon with item count
- Login/Logout button

### Restaurant Database
The application includes 8 restaurants:
1. **McDonald's** - Burgers, Fast Food (⭐4.4)
2. **Martinoz** - Pizza, Italian (⭐4.6)
3. **Farzi Cafe** - Indian, North Indian (⭐4.5)
4. **Starbucks** - Coffee, Beverages (⭐4.3)
5. **Indigo Cafe** - Indian, North Indian (⭐4.7)
6. **Dhaba Royalty** - Authentic Indian (⭐4.6)
7. **Saffron Kitchen** - South Indian (⭐4.8)
8. **Tandoor Palace** - Mughlai (⭐4.5)

## 🔐 Authentication

### User Login
- Click "Login" button in navbar
- Username and password modal
- (Demo mode - any input accepted)
- Click "Profile" to access profile page

### Admin Access
- Navigate to `admin.html`
- Enter password: `admin123`
- Access admin features

## 💾 Data Storage

All data is stored in browser's localStorage:
- Cart persists across page refreshes
- User profile saved locally
- Favorite restaurants saved
- Previous orders recorded
- Payment methods stored

## ⚙️ Account Setup

### To Set Up Your Profile:
1. Go to `profile.html` or click "Profile" in navbar
2. Fill in Account Details (name, email, phone)
3. Click "Save Changes"
4. Go to "Saved Addresses" tab
5. Click "+ Add New Address"
6. Fill in address details
7. Click "Save Address"
8. Your profile is ready!

### To Add Favorite Restaurants:
1. Browse restaurants on `restaurant.html`
2. Click the heart ❤️ button on any restaurant card
3. Or visit restaurant detail page and click "Add to Favorites"
4. View all favorites in Profile > Favorite Restaurants

## 🎯 Typical User Flow

1. **Home Page** → Browse or search
2. **Search** → Find restaurants/food
3. **Restaurant Detail** → View menu
4. **Add Items** → Click "Add to Cart"
5. **View Cart** → Click cart icon
6. **Checkout** → Click "Checkout"
7. **Fill Address** → Select or add address
8. **Apply Coupon** → Enter coupon code
9. **Pay** → Select payment method
10. **Track Order** → View in "My Orders"

## ❓ Tips & Tricks

- Use search from home page for quick access
- Filter restaurants by your preferences
- Save addresses for faster checkout
- Apply coupons before checking out
- Mark favorites for quick access
- Add delivery instructions for special requests
- View previous orders anytime in profile

## 🚨 Important Notes

- Cart data persists across sessions
- Favorites are saved permanently
- Admin password is: `admin123`
- All monetary values are in ₹ (Indian Rupees)
- Delivery times are estimates
- Reviews can be added by any user

## 📞 Support

For any issues or questions, refer to:
- **README.md** - Complete feature documentation
- **IMPLEMENTATION_SUMMARY.md** - Technical details
- **Code comments** - In-code documentation

---

**Happy Ordering! 🍽️**
