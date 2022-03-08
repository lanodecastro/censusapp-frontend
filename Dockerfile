FROM node:14.15.2  AS builder
WORKDIR /app
COPY . .

RUN npm i && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /app/dist/censusapp .
ENTRYPOINT ["nginx", "-g", "daemon off;"]