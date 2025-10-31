FROM node:lts AS builder

WORKDIR /src

COPY package*.json tsconfig*.json ./

RUN npm ci

COPY . .

RUN npx prisma generate && npm run build

FROM node:lts-slim AS runner

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /src/dist ./dist
COPY --from=builder /src/prisma ./prisma

EXPOSE 8000
ENV NODE_ENV=production

CMD ["npm", "run", "start"]
