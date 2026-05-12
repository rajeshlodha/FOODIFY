const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { initDatabase, run, get } = require('./db');

function loadRestaurantData() {
  const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${dataJs}; this.restaurantsDatabase = restaurantsDatabase;`, context);
  return context.restaurantsDatabase;
}

async function seed() {
  await initDatabase();
  const restaurants = loadRestaurantData();

  for (const restaurant of restaurants) {
    await run(
      `INSERT OR REPLACE INTO restaurants (
        id, name, cuisine, rating, min_order, delivery_fee, delivery_time,
        address, phone, opening_hours, is_open, image, is_veg_only
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        restaurant.id,
        restaurant.name,
        JSON.stringify(restaurant.cuisine),
        restaurant.rating,
        restaurant.minOrder,
        restaurant.deliveryFee,
        restaurant.deliveryTime,
        restaurant.address,
        restaurant.phone,
        restaurant.openingHours,
        restaurant.isOpen ? 1 : 0,
        restaurant.image,
        restaurant.isVegOnly ? 1 : 0
      ]
    );

    await run('DELETE FROM menu_items WHERE restaurant_id = ?', [restaurant.id]);

    for (const food of restaurant.foods) {
      await run(
        `INSERT INTO menu_items (
          restaurant_id, name, price, category, veg, image, available
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          restaurant.id,
          food.name,
          food.price,
          food.category,
          food.veg ? 1 : 0,
          food.img,
          food.available === false ? 0 : 1
        ]
      );
    }
  }

  const demoUser = await get('SELECT id FROM users WHERE email = ?', ['demo@foodify.test']);
  if (!demoUser) {
    await run(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      ['Demo User', 'demo@foodify.test', '9999999999', 'demo123']
    );
  }

  console.log(`Seeded ${restaurants.length} restaurants into foodify.db`);
}

seed().catch(error => {
  console.error(error);
  process.exit(1);
});
