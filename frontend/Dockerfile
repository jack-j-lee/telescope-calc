FROM node:20-alpine

WORKDIR /app
COPY package.json tsconfig.json next.config.js ./
COPY app ./app
COPY lib ./lib

RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]