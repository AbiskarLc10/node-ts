FROM node:18-alpine

ARG ROOT_DIR=/server
ARG AUTH_DIR=/server/src/services/auth-service
ARG SHARED_DIR=/server/src/shared
ARG PROTO_DIR=/proto
ARG PORT=50051

RUN mkdir -p ${ROOT_DIR} ${AUTH_DIR} ${SHARED_DIR} ${PROTO_DIR}

WORKDIR ${PROTO_DIR}

COPY ./proto/*.proto ./

COPY ./proto/package*.json ./

RUN npm i

COPY /proto .

WORKDIR ${AUTH_DIR}

COPY ${AUTH_DIR}/package*.json  ./

RUN npm ci

COPY ${AUTH_DIR}/tsconfig.json ./

WORKDIR ${SHARED_DIR}

COPY ${SHARED_DIR}/tsconfig.json ./

WORKDIR ${ROOT_DIR}

COPY ${ROOT_DIR}/package*.json ./

RUN npm ci

COPY ${ROOT_DIR}/tsconfig*.json ./

COPY ${ROOT_DIR} .

EXPOSE ${PORT}

RUN npm run build

CMD [ "node","dist/index.js" ]