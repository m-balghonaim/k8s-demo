FROM node:10-alpine
RUN apk add --no-cache curl
COPY app.js /app.js
CMD ["node", "/app.js"]
