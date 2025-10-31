# Project Overview

`lab3` - a simple Express 5 API written in TypeScript, using tsx for on‑the‑fly compilation.
Node version: **LTS** (as used in the Docker image)

## Prerequisites

- **Node.js** ≥ 22 (LTS)
- **npm** ≥ 9
- **Docker** ≥ 28 (for containerised run)
- (Optional) **git** to clone the repo

## Running Locally

### 1. Clone the repository

```shell
git clone https://github.com/TockePie/back-end-uni
cd lab3
```

### 2. Install dependencies

```shell
npm i
```

### 3. Create a `.env` file and pollute it with data

Example of `.env` file:

```env
PORT=8000

DATABASE_URL=postgres://postgres:postgres@localhost:4432/postgres?schema=public

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres
```

### 4. Start the development server

```shell
npm run dev
```

The API will be available at **http://localhost:8000/api**.

## Running with Docker

### Start the container

```shell
docker compose -f dev-compose.yaml up -d
```

- The service is named `lab3-app-1` and maps port 8000 on the host to 8000 inside the container.
- Source code is mounted as a volume, so changes on the host are reflected instantly.

### Stop the container

```shell
docker compose down
```
