FROM node:lts

WORKDIR /src

# Copy package.json and package-lock.json into /src
COPY package*.json tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

EXPOSE 8000
CMD ["npm", "run", "dev"]
