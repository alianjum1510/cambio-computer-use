# Step 1: Use an official Node.js runtime as the base image
FROM node:18 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use Nginx to serve the built app
FROM nginx:alpine

# Step 8: Copy the build output from the previous stage to Nginx's serving directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port the app will run on
EXPOSE 80

# Step 10: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
