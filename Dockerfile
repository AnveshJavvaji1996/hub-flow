FROM node:20-alpine

WORKDIR /app

COPY app.js .

RUN npm init -y && npm install chalk@4

CMD ["node", "app.js"]