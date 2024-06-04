FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild sqlite3
CMD ["node", "server.js"]