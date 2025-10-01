# Project Overview

`lab1` - a simple Express 5 API written in TypeScript, using tsx for on‑the‑fly compilation.
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
cd lab1
```

### 2. Install dependencies

```shell
npm i
```

### 3. Create a `.env` file (using` .env.example`) and pollute it with data

### 4. Start the development server

```shell
npm run start:dev
```

The API will be available at **http://localhost:3001**.

## Running with Docker

### Start the container

```shell
docker compose up -d
```

- The service is named `lab1-app-1` and maps port 3001 on the host to 3001 inside the container.
- Source code is mounted as a volume, so changes on the host are reflected instantly.

### Stop the container

```shell
docker compose down
```
