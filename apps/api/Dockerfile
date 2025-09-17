FROM node:20

WORKDIR /app

COPY package.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY src ./src
COPY tsconfig.json ./


RUN pnpm run build

EXPOSE 4000

CMD ["node", "dist/index.js"]