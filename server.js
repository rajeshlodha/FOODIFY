const express = require('express');
const path = require('path');
const { initDatabase, run, get, all } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

function restaurantRowToClient(row, foods = []) {
  return {
    id: row.id,
    name: row.name,
    cuisine: JSON.parse(row.cuisine || '[]'),
    rating: row.rating,
    minOrder: row.min_order,
    deliveryFee: row.delivery_fee,
    deliveryTime: row.delivery_time,
    address: row.address,
    phone: row.phone,
    openingHours: row.opening_hours,
    isOpen: Boolean(row.is_open),
    image: row.image,
    isVegOnly: Boolean(row.is_veg_only),
    foods
  };
}

function menuRowToClient(row) {
  return {
    id: row.id,
    restaurantId: row.restaurant_id,
    name: row.name,
    price: row.price,
    category: row.category,
    veg: Boolean(row.veg),
    img: row.image,
    available: Boolean(row.available)
  };
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, app: 'foodify' });
});

app.get('/api/restaurants', async (req, res, next) => {
  try {
    const restaurants = await all('SELECT * FROM restaurants ORDER BY rating DESC');
    const result = [];

    for (const restaurant of restaurants) {
      const foods = await all('SELECT * FROM menu_items WHERE restaurant_id = ? ORDER BY id', [restaurant.id]);
      result.push(restaurantRowToClient(restaurant, foods.map(menuRowToClient)));
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get('/api/restaurants/:id', async (req, res, next) => {
  try {
    const restaurant = await get('SELECT * FROM restaurants WHERE id = ?', [req.params.id]);
    if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });

    const foods = await all('SELECT * FROM menu_items WHERE restaurant_id = ? ORDER BY id', [req.params.id]);
    res.json(restaurantRowToClient(restaurant, foods.map(menuRowToClient)));
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/register', async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const result = await run(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      [name, email, phone || '', password]
    );

    res.status(201).json({ id: result.id, name, email, phone: phone || '' });
  } catch (error) {
    if (error.message.includes('UNIQUE')) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    next(error);
  }
});

app.post('/api/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await get(
      'SELECT id, name, email, phone FROM users WHERE email = ? AND password = ?',
      [email, password]
    );

    if (!user) return res.status(401).json({ error: 'Invalid email or password' });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.get('/api/users/:id/addresses', async (req, res, next) => {
  try {
    const addresses = await all('SELECT * FROM addresses WHERE user_id = ? ORDER BY is_default DESC, id DESC', [req.params.id]);
    res.json(addresses.map(address => ({
      id: address.id,
      userId: address.user_id,
      type: address.type,
      fullAddress: address.full_address,
      landmark: address.landmark,
      phone: address.phone,
      isDefault: Boolean(address.is_default)
    })));
  } catch (error) {
    next(error);
  }
});

app.post('/api/users/:id/addresses', async (req, res, next) => {
  try {
    const { type, fullAddress, landmark, phone, isDefault } = req.body;
    if (!type || !fullAddress) {
      return res.status(400).json({ error: 'Address type and full address are required' });
    }

    if (isDefault) {
      await run('UPDATE addresses SET is_default = 0 WHERE user_id = ?', [req.params.id]);
    }

    const result = await run(
      'INSERT INTO addresses (user_id, type, full_address, landmark, phone, is_default) VALUES (?, ?, ?, ?, ?, ?)',
      [req.params.id, type, fullAddress, landmark || '', phone || '', isDefault ? 1 : 0]
    );

    res.status(201).json({ id: result.id });
  } catch (error) {
    next(error);
  }
});

app.post('/api/orders', async (req, res, next) => {
  try {
    const { userId, restaurantName, items, total, address, paymentMethod, instructions } = req.body;
    if (!Array.isArray(items) || items.length === 0 || !total) {
      return res.status(400).json({ error: 'Order items and total are required' });
    }

    const orderCode = 'ORD' + Date.now();
    const result = await run(
      `INSERT INTO orders (
        order_code, user_id, restaurant_name, total, address_json, payment_method, instructions
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        orderCode,
        userId || null,
        restaurantName || 'Foodify',
        total,
        JSON.stringify(address || {}),
        paymentMethod || '',
        instructions || ''
      ]
    );

    for (const item of items) {
      await run(
        'INSERT INTO order_items (order_id, name, price, qty, image) VALUES (?, ?, ?, ?, ?)',
        [result.id, item.name, item.price, item.qty || 1, item.img || '']
      );
    }

    res.status(201).json({ id: result.id, orderCode });
  } catch (error) {
    next(error);
  }
});

app.get('/api/orders', async (req, res, next) => {
  try {
    const orders = await all('SELECT * FROM orders ORDER BY created_at DESC');
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
});

initDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Foodify server running at http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
