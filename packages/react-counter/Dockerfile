ARG NODE_VERSION=20-alpine
ARG NGINX_VERSION=stable-alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# -------------------------
# Serve with Nginx:
# -------------------------
FROM nginx:${NGINX_VERSION}

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]