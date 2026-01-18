ARG NODE_VERSION=20-alpine
ARG NGINX_VERSION=stable-alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /monorepo

COPY package.json yarn.lock .yarnrc.yml ./

COPY .yarn .yarn

COPY packages ./packages

RUN yarn install --frozen-lockfile

WORKDIR /monorepo/packages/react-counter
RUN yarn build

# -------------------------
# Serve with Nginx:
# -------------------------
FROM nginx:${NGINX_VERSION}

COPY --from=builder /monorepo/packages/react-counter/dist /usr/share/nginx/html
COPY /packages/react-counter/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]