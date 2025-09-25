FROM node:18-alpine

ARG CURRENT_DIR=/ts-node/gateway
ARG PORT=8000

WORKDIR ${CURRENT_DIR}

COPY ./package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD ["node","dist/index.js"]


