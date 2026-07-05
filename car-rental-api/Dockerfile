# Використовуємо офіційний легкий образ Node.js
FROM node:20-alpine

# Встановлюємо робочу директорію для сервера
WORKDIR /app

# Копіюємо файли конфігурації залежностей
COPY package.json package-lock.json ./

# Встановлюємо тільки production-залежності для оптимізації розміру
RUN npm install --only=production

# Копіюємо весь інший код бекенду (включаючи папку з даними)
COPY . .

# Бекенд працює на 5000 порту
EXPOSE 5000

# Запускаємо сервер
CMD ["node", "server.js"]