FROM node:14-alpine as build
WORKDIR /fullstack-todo
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
COPY build ./build
CMD ["npm", "start"]