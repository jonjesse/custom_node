FROM node:latest

WORKDIR /app
COPY . /app
RUN npm install --save express request os jasmine system-sleep
CMD ["node", "app.js"]
EXPOSE 3000
