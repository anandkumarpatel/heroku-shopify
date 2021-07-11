# https://magicofthings-test.herokuapp.com/

This app can be accessed here: https://magicofthings-test.herokuapp.com/
NOTE: This is a free tier so it will take ~1 minute to warm up for the first call.
The app sleeps after 30 min of inactivity.

# To run locally
The following command starts the server.

```bash
SHOP_NAME="shop-name" API_KEY="api-key" PASSWORD="password" npm start
```

You can then call this using `curl` or the browser pointed to `localhost:80`.

```bash
curl -X GET localhost:80/something
```

# Using
There code for the server is locationed in [server.js](./server.js). I added logs of comments to the code.

I am using shopify buy api as an example but you can use whatever you need.
https://shopify.dev/custom-storefronts/tools/js-buy

You will need to create a access token. Start by creating one for your development store.

# Setup Heroku

The email contains the username and password for the test account. I can work with you later when you want to create the real account.

For now anything that is merged into master will get deployed. Or you can install the CLI and to it manually https://devcenter.heroku.com/articles/heroku-cli#download-and-install
