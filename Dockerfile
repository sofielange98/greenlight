FROM node:17-alpine as builder
WORKDIR /app
COPY . .

RUN npm ci 

ENV NODE_ENV production
EXPOSE 3000

CMD [ "npm", "start"]