FROM node:19

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD npm run dev -- --port 3003
