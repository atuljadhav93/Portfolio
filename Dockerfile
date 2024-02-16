FROM node:20-alpine
WORKDIR /app .
COPY package*.json .
ARG PORT=3000
ENV PORT=${PORT}

COPY . .
RUN npm install --legacy-peer-deps
EXPOSE ${PORT}

CMD [ "npm","start", "host=0.0.0.0" ]
