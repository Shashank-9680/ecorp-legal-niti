FROM node:18.16-alpine
WORKDIR /src

COPY package.json package-lock.json ./

RUN npm i --legacy-peer-deps

COPY . ./
RUN npm run build
CMD [ "npm", "run","serve" ]