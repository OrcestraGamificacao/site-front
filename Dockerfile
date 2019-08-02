FROM node:10 AS react

WORKDIR app

COPY package.json .

RUN npm install

ADD src src

ADD public public

RUN npm run build

FROM nginx

COPY --from=react /app/build /usr/share/nginx/html