FROM node:lts AS builder

WORKDIR /src

COPY package*.json tsconfig*.json ./

RUN npm ci

RUN npm run build

COPY . .

FROM node:lts-slim AS runner

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 8000
ENV NODE_ENV=production

CMD ["node", "dist/server.js"]
