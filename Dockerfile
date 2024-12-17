# Use Node.js as the base image
FROM docker.arvancloud.ir/node:18.20.3
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 8080

# Command to run the application
CMD ["npm", "run", "dev"]

