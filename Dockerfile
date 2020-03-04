FROM node:alpine as builder

RUN apk update && apk add --no-cache make git

WORKDIR /app

COPY package.json package-lock.json  /app/

RUN npm install -g @angular/cli@9.0.4

RUN npm install

COPY . /app

RUN npm run prod

FROM nginx:alpine

EXPOSE 80

COPY --from=builder /app/dist/bridge-applicant-ui /usr/share/nginx/html
