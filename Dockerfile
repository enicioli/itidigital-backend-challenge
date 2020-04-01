FROM keymetrics/pm2:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./src ./src

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm ci --$NODE_ENV

EXPOSE $APP_PORT
CMD ["pm2-runtime", "src/app.js"]