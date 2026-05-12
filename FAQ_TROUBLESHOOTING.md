# FAQ & Troubleshooting - FOODIFY

## ❓ Frequently Asked Questions

### General Questions

**Q: How do I start using FOODIFY?**
A: Open `index.html` in your browser. You'll see the home page with search functionality and restaurant listings. Browse restaurants or use the search bar to find what you want.

**Q: Are these real restaurants?**
A: No, these are demo restaurants with sample menus and data created for the application.

**Q: Do I need to create an account?**
A: Not required, but you can fill in your profile in the Profile page for a better experience. Your data is saved locally.

**Q: Is my data safe?**
A: Yes! All data is stored locally in your browser (localStorage) and never sent to any server. Only you can access it.

### Search & Navigation

**Q: How do I search for food?**
A: Click the search bar on the home page, type what you're looking for (restaurant name, food item, or cuisine), and click Search or press Enter.

**Q: What can I filter by?**
A: On the Restaurants page, you can filter by:
- Vegetarian/Non-Vegetarian
- Rating (4.0+)
- Price (under ₹200)
- Delivery time (30 min or less)

**Q: How do I sort restaurants?**
A: Click on a sort option on the Restaurants page:
- Best Rated
- Price: Low to High
- Price: High to Low
- Fastest Delivery

**Q: How do I save my favorite restaurants?**
A: Click the heart (❤️) button on any restaurant card or on the restaurant detail page. View all favorites in your Profile.

### Shopping & Cart

**Q: How do I add items to my cart?**
A: Click "Add to Cart" button next to any food item on a restaurant menu.

**Q: How do I change the quantity?**
A: Open your cart (click the 🛒 icon). Use + and - buttons to adjust quantities.

**Q: How do I remove an item?**
A: Click the ✕ button next to an item in your cart.

**Q: How do I clear my entire cart?**
A: Click "Clear Cart" button in the cart panel.

**Q: Will my cart be saved?**
A: Yes! Your cart is saved in your browser and will be restored when you refresh or return later.

### Checkout & Payment

**Q: How do I checkout?**
A: Click the "Checkout" button in your cart panel. This takes you to the full checkout page.

**Q: What happens during checkout?**
A: You'll:
1. Review your order items
2. Select delivery address
3. Add delivery instructions (optional)
4. Apply a coupon code (optional)
5. Select payment method
6. See your order total

**Q: Which payment methods are available?**
A: Four options:
- Credit/Debit Card
- UPI
- Digital Wallet
- Cash on Delivery

**Q: Do I need a saved address?**
A: It helps! You can add addresses in your Profile page before checkout. You can also add a new address during checkout.

**Q: Can I save multiple addresses?**
A: Yes! Add as many addresses as you want in your Profile (Home, Work, Other, etc.).

### Coupons & Offers

**Q: What coupon codes are available?**
A: Five codes:
- **FIRST50** - ₹50 off (minimum ₹200)
- **SAVE200** - ₹200 off (minimum ₹500)
- **FLAT20** - 20% off (minimum ₹300)
- **WELCOME** - ₹100 off (minimum ₹200)
- **FAST30** - ₹30 off (minimum ₹250)

**Q: How do I apply a coupon?**
A: On the checkout page, enter the code in the "Apply Coupon Code" field and click "Apply". Or click a quick-apply button under "Available Coupons".

**Q: What if my coupon code doesn't work?**
A: Check:
- Correct spelling
- Minimum order amount met
- Code not already used (if you have limits)

**Q: Can I use multiple coupons?**
A: No, only one coupon per order.

### Favorites & Profile

**Q: How do I access my profile?**
A: Click "Profile" in the top navigation bar.

**Q: What can I do in my profile?**
A: You can:
- Update account details (name, email, phone)
- Manage saved addresses
- View previous orders
- View favorite restaurants
- Manage payment methods

**Q: How do I add an address?**
A: Go to Profile > Saved Addresses > "+ Add New Address" and fill in the details.

**Q: Can I set a default address?**
A: Yes! Check "Set as default address" when adding or editing an address.

**Q: How do I view my order history?**
A: Go to Profile > Previous Orders to see all your orders.

**Q: Can I add reviews?**
A: Yes! Go to any restaurant's detail page, click the "Reviews" tab, and click "+ Submit Review".

### Restaurant Details

**Q: What information is shown for each restaurant?**
A: You can find:
- Opening hours
- Address and phone number
- Delivery time and fee
- Minimum order amount
- Cuisine types
- Rating and reviews
- Full menu

**Q: How do I view a restaurant's menu?**
A: Click "View Menu" on a restaurant card, or click the restaurant's name on its detail page. Click the "Menu" tab if needed.

**Q: Can I filter a restaurant's menu?**
A: Yes! On the restaurant detail page, you can filter by:
- All Items
- Veg Only
- Non-Veg

### Admin Panel

**Q: How do I access the admin panel?**
A: Go to `admin.html` in your browser and enter the password: `admin123`

**Q: What can I do in the admin panel?**
A: Restaurant owners can:
- View statistics
- Add new menu items
- Edit existing items (price, availability)
- Delete items
- Update restaurant settings

**Q: How do I add a new menu item?**
A: In Admin Panel > "Add Menu Item", fill in:
- Item name
- Category (Appetizer, Main, Dessert, etc.)
- Price
- Item type (Veg/Non-Veg)
- Image URL (optional)
- Click "Add Item"

**Q: How do I edit an item?**
A: In Admin Panel > "Manage Menu", click "Edit" on any item, update details, and save.

**Q: How do I toggle item availability?**
A: In "Manage Menu", click the status badge or edit the item and toggle availability.

---

## 🐛 Troubleshooting

### Common Issues

**Issue: Search not working**
- Solution: 
  - Make sure you typed the search term correctly
  - Try searching for exact restaurant or food names
  - Try searching for cuisine types

**Issue: Filters not showing results**
- Solution:
  - Check that the filter combination makes sense
  - Try "Clear All Filters" and start over
  - Some restaurants might not match all criteria

**Issue: Cart is empty after refresh**
- Solution:
  - Cart data is saved automatically
  - Check browser's localStorage is enabled
  - Try adding items again

**Issue: Coupon not applying**
- Solution:
  - Check minimum order amount is met
  - Verify coupon code spelling
  - Check if order total is above minimum

**Issue: Address not showing in checkout**
- Solution:
  - Add address in Profile > Saved Addresses first
  - Make sure address has all required fields
  - Try adding a new address during checkout

**Issue: Admin panel password not working**
- Solution:
  - Password is: `admin123` (exact spelling)
  - Make sure caps lock is off
  - Try clearing browser cache

**Issue: Favorites not saving**
- Solution:
  - Make sure localStorage is enabled
  - Try clicking heart again
  - Check Profile > Favorite Restaurants to verify

**Issue: Payment method not visible**
- Solution:
  - Scroll down on checkout page
  - Make sure you selected address first

### Browser Requirements

- **Required:** JavaScript enabled
- **Required:** localStorage enabled (for data persistence)
- **Recommended:** Modern browser (Chrome, Firefox, Safari, Edge)
- **Minimum:** Any browser with CSS Grid support

### Data Issues

**Issue: Lost my cart or profile data**
- Solution:
  - Check if you accidentally cleared browser history/cache
  - Re-enter your information
  - Contact support

**Issue: Can't edit existing item in admin**
- Solution:
  - Search for the item first
  - Click edit button for that specific item
  - Make sure you're logged in to admin

---

## 🚀 Tips for Best Experience

1. **Use Search:** It's faster than browsing all restaurants
2. **Save Addresses:** Pre-save common addresses for quick checkout
3. **Mark Favorites:** Save restaurants you like for quick access
4. **Apply Coupons:** Always check available coupons before paying
5. **Add Reviews:** Help others by sharing your experience
6. **Use Filters:** Find restaurants matching your preferences

## 💡 Advanced Tips

- **Veg Filter:** Works on both restaurants and restaurant menus
- **Price Filter:** Shows restaurants with items under ₹200
- **Delivery Filter:** Shows only restaurants delivering in 30 min or less
- **Sort Results:** After filtering, you can still sort results
- **Add Instructions:** Use delivery instructions for special requests (no onions, allergies, etc.)
- **Payment Info:** You can save payment methods for faster checkout

## ⚙️ Browser Storage Info

The application uses localStorage to save:
- **cart** - Your shopping cart items
- **userProfile** - Your personal information and addresses
- **favorites** - Your favorite restaurants
- **foodifyOrders** - Your order history
- **adminData** - Admin panel settings

To clear all data: Open browser DevTools (F12) > Application > localStorage > Delete all > Refresh page

**Warning:** Clearing localStorage will delete all saved data!

## 📱 Mobile Users

The application is fully responsive:
- All pages work on mobile devices
- Touch-friendly buttons and inputs
- Optimized layout for smaller screens
- Cart and checkout work on mobile

## 🔒 Security Notes

- All data is stored locally (not on any server)
- No personal information is sent online
- Passwords are for demo purposes only
- Your data is only accessible to you
- Clear cache/history to delete data from shared devices

---

## Still Need Help?

1. Check the [README.md](README.md) for feature documentation
2. Check the [NAVIGATION_GUIDE.md](NAVIGATION_GUIDE.md) for how to use features
3. Check the [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) for technical details
4. Review the code comments in HTML and JavaScript files
5. Try the demo with different inputs and features

**Happy ordering! 🍽️**
