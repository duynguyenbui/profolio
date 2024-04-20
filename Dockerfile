# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /app/next-app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY . .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# for deploting the build version

RUN bun next build
CMD bun next start

EXPOSE 3000