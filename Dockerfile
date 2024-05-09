# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

# Base STAGE
FROM node:${NODE_VERSION} AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN --mount=type=bind,source=package.json,target=package.json \
    corepack install
WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install
COPY . .

# Dev STAGE
FROM base AS dev
EXPOSE 3001
CMD pnpm dev

# Build STAGE
FROM base as build
RUN pnpm build
# heads up!! this should be 'RUN' not 'CMD'

# production STAGE (container image optimization)
# Node Server for Next.js
FROM node:${NODE_VERSION}-alpine AS prod
RUN corepack enable
RUN --mount=type=bind,source=package.json,target=package.json \
    corepack install
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=build  /usr/src/app/.next/standalone ./
COPY --from=build /usr/src/app/.next/static ./.next/static
COPY --from=build /usr/src/app/public ./public
# remove "prepare" script from "package.json" to prevent Husky.js runs
RUN npm pkg delete scripts.prepare
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --prod
USER node
EXPOSE 3002
# CMD pnpm start
CMD HOSTNAME="0.0.0.0" PORT=3002 node server.js