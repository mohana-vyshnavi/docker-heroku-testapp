# More information on heroku and docker: https://devcenter.heroku.com/articles/container-registry-and-runtime
FROM node:carbon-alpine

WORKDIR /usr/app
COPY . .

# Build Angular
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install
RUN npm run build

WORKDIR ./server

# Build Webserver
RUN npm install
RUN npm run build

CMD ["node", "./bin/www"]
