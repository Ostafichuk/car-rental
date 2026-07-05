const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

async function initDB() {
  let retries = 5;

  while (retries) {
    try {
      await pool.query("SELECT 1");
      console.log("Зв'язок із PostgreSQL успішно встановлено!");

      await pool.query(`
        CREATE TABLE IF NOT EXISTS cars (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          brand VARCHAR(100) NOT NULL,
          category VARCHAR(100) NOT NULL,
          image VARCHAR(255),
          price INTEGER NOT NULL
        );
      `);

      const checkData = await pool.query("SELECT COUNT(*) FROM cars");

      if (parseInt(checkData.rows[0].count) === 0) {
        await pool.query(`
          INSERT INTO cars (name, brand, category, image, price) VALUES 
          ('Audi RS6', 'Audi', 'Wagon', '/audi-rs6.jpg', 150),
          ('BMW M5', 'BMW', 'Sedan', '/bmw-m5.jpg', 140),
          ('Porsche Cayenne', 'Porsche', 'SUV', '/porsche.jpg', 200),
          ('Ford Mustang', 'Ford', 'Coupe', '/ford.jpg', 100)
        `);
        console.log("Початкові автомобілі успішно додані в базу!");
      }

      console.log("Ініціалізація бази даних завершена успішно.");
      break;
    } catch (err) {
      retries -= 1;
      console.log(
        `База даних ще не готова. Спроб залишилось: ${retries}. Очікування 3 секунди...`
      );
      await new Promise((res) => setTimeout(res, 3000));
    }
  }

  if (retries === 0) {
    console.error("Не вдалося підключитися до PostgreSQL після всіх спроб.");
    process.exit(1);
  }
}

initDB();

app.get("/api/cars", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars");
    res.json(result.rows);
  } catch (err) {
    console.error("Помилка при отриманні авто:", err.message);
    res.status(500).send("Помилка сервера");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Бекенд сервер працює на порту ${PORT}`);
});
