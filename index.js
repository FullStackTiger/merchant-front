const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const session = require('express-session');

/* App Setup */
const app = express();

/* session setup */

app.use(session({
  secret: 'example',
  saveUninitialized: true,
  resave: false,
})); // TODO: find out what this is

/* Configure bodyParser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Configure cross-domain */
// const crossDomain = require('./src/middleware/crossDomain');
// app.use(crossDomain);

/* Authenticated Routes */
// const checkAuth = require('./src/middleware/check-auth');
// app.use(checkAuth);

/* Configure Routes */
const router = express.Router();

/**
 * Get all merchants
 */
router.get('/api/merchants', async (req, res, next) => {
  const merchants = await axios.get('http://localhost:5000/api/v1/restaurants/');
  return res.json(merchants.data);
});

router.post('/api/merchants', async (req, res, next) => {
  const {
    address: {
      restaurantname,
      street,
      city,
      prov,
      postal,
      phone,
    },
    logoUrl,
  } = req.body;

  console.log('Request for merchant: ', req.body);

  const newMerchant = await axios.post('http://localhost:5000/api/v1/restaurants', {
    address: {
      restaurantname,
      street,
      city,
      prov,
      postal,
      phone,
    },
    logoUrl,
  });

  return res.json(newMerchant.data);
});

/**
 * Get merchant by ID
 */
router.get('/api/merchants/:merchantId', async (req, res) => {
  const { merchantId } = req.params;
  const merchant = await axios.get(`http://localhost:5000/api/v1/restaurants/${merchantId}`);
  return res.json(merchant.data);
});

app.use(router);

/* Start the server */
const port = process.env.PORT || 6001;
app.listen(port);
console.log('Magic happens on port ' + port);
