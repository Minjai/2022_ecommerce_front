# Install dependencies only when needed
FROM node:16.18.1 AS deps
WORKDIR /app
COPY package.json ./
RUN yarn install

# Rebuild the source code only when needed
FROM node:16.18.1 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:16.18.1 AS runner
WORKDIR /app

ENV NODE_ENV production


COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]
