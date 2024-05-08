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

# # Build STAGE
# FROM base as build
# RUN pnpm build
# # heads up!! this should be 'RUN' not 'CMD'

# # production STAGE (container image optimization)
# # Node Server for Next.js
# FROM node:${NODE_VERSION}-alpine AS prod
# WORKDIR /usr/src/app
# COPY package.json .
# COPY pnpm-lock.yml .
# RUN pnpm --prod
# COPY --from=build /usr/src/app/.next ./.next
# COPY --from=build /usr/src/app/public ./public
# USER node
# EXPOSE 3002
# CMD pnpm start