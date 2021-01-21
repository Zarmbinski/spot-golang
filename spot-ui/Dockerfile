FROM node as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run-script build:prod

FROM nginx:alpine

COPY --from=builder /app/dist/spot-ui/* /usr/share/nginx/html/

COPY --from=builder /app/conf/nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
