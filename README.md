Shoppy Globe Backend
This is the backend for Shoppy Globe, a e-commerce platform. It is built using Node.js and MongoDB.

Links
Github
Setup
Prerequisites
Node.js (v20 or higher)
MongoDB
Docker (optional)
Installation
Clone the repository:

git clone https://github.com/KiranNamawar/demo-shoppy-globe-backend.git
cd demo-shoppy-globe-backend
Install dependencies:

npm install
Set up environment variables:

cp .env.example .env
Edit the .env file with your database connection string and other required configurations.

Docker Setup (optional)
Start the MongoDB container:
npm run db:start
Seeding the Database
Seed the database with sample products:
npm run db:seed
Starting the Server
Start the server:
npm run start
API Endpoints
GET /products - Get all products
GET /products/:productId - Get a single product
POST /register - Register a new user
POST /login - Login and get a JWT token
Protected Endpoints
Requires AccessToken in Authorization header with Bearer prefix for following endpoints:

POST /cart - Add a product to the cart
PUT /cart/:productId - Update the quantity of a product in the cart
DELETE /cart/:productId - Remove a product from the cart
Error Handling
The API follows RESTful practices and returns appropriate HTTP status codes and error messages.
