FROM node:alpine as builder

RUN apk update && apk add --no-cache make git

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run prod

FROM nginx:alpine

EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
