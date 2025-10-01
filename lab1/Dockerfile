FROM node:lts

WORKDIR /src

# Copy package.json and package-lock.json into /src
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

EXPOSE 3001
CMD ["npm", "run", "start:dev"]
