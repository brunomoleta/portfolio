FROM node:20-alpine3.18 as builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:20-alpine3.18 as runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
RUN npm install --production

EXPOSE 2999
CMD ["npm","start"]