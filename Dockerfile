# Build Stage
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .


# Production Stage
FROM node:14
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
CMD ["node", "src/server.js"]
