const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 8080;

// Env variables
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DB_USER = process.env.POSTGRESQL_USER;
const DB_PASSWORD = process.env.POSTGRESQL_PASSWORD;
const APP_HOST = process.env.APP_HOST;

// PostgreSQL client
const client = new Client({
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
  user: DB_USER,
  password: DB_PASSWORD
});

client.connect()
  .then(() => {
    console.log("Connected to PostgreSQL");

    return client.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        item VARCHAR(100)
      );
    `);
  })
  .then(() => {
    console.log("Orders table ready");
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });

app.get('/order/last/:id', async (req, res) => {
  try {
    const result = await client.query(
      'SELECT * FROM orders ORDER BY id DESC LIMIT 1'
    );

    res.json({
      pod_name: APP_HOST,
      db_host: DATABASE_HOST,
      last_order: result.rows[0] || "No orders yet"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/order/create/:item', async (req, res) => {
  await client.query(
    'INSERT INTO orders(item) VALUES($1)',
    [req.params.item]
  );

  res.json({ message: "Order created" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
