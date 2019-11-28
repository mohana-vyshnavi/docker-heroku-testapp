# More information on heroku and docker: https://devcenter.heroku.com/articles/container-registry-and-runtime
FROM node:carbon-alpine

WORKDIR /usr/app
COPY . .

# Build Angular
RUN npm install @angular/cli@8.2.13
RUN npm install
RUN npm run build

WORKDIR ./server

# Build Webserver
RUN npm install
RUN npm run build

CMD ["node", "./bin/www"]
