// This is a standard nodeJS library used to create a server object.
const http = require('http')

// This is a framework used to create RESTful applications.
// Find more information about it here: https://expressjs.com/
const express = require('express')

// This is Shopify SDK. It is used to make calls the shopify api.
const Client = require('shopify-buy')

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'your-shop-name.myshopify.com',
  storefrontAccessToken: 'your-storefront-access-token'
})

// Port this service listens on.
const port = process.env.PORT || 80

const app = express()
// This is just a hack to allow local development otherwise you will get CORS issues.
// Before finalizing you will need to change '*' to the URL of the final site.
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  return next()
})

// This creates an endpoint.
// For a GET request on / return json object {'some': 'data'}
app.get('/', (request, response) => {
  response.send({
    some: 'data'
  })
})

// This creates another endpoint.
// For a GET request on /products query shopify store for all products and return that object
app.get('/products', (request, response) => {
  // Fetch all products in your shop
  client.product.fetchAll().then((products) => {
    // Send products object.
    response.send({
      products: products
    })
  })
})

// creates server
const server = http.createServer(app)
// starts server
server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))
