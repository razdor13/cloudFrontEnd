# Етап 1: Збірка (Build)
FROM node:20-alpine AS builder

WORKDIR /app

# Копіюємо файли залежностей
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту файлів проекту
COPY . .

# Збираємо проект Next.js
RUN npm run build

# Етап 2: Запуск (Production)
FROM node:20-alpine

WORKDIR /app

# Копіюємо тільки необхідні дані з етапу builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Відкриваємо порт 3000 (стандарт для Next.js)
EXPOSE 3000

# Запуск додатку
CMD ["npm", "run", "start"]