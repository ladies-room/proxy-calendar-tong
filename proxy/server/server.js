const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path')
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

//GALLERY
app.get('/property/:id', (req, res) => {
  axios.get('http://54.215.39.92:3003' + req.url)
    .then(response => {
      res.send(response.data);
    })
    .catch(console.log)
})
//CALENDAR
app.get("/listing", (req, res) => {
  console.log('?')
  var getListingAddress = 'http://3.17.161.89:2046/listing'
  axios.get(`${getListingAddress}/`)
    .then(response => {
      res.send(response.data)
    })
})
// MOREPLACES
app.get('/stays/*', (req, res) => {
  axios.get("http://18.204.156.27:3001" + req.originalUrl)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
})
app.post('/stays/*', (req, res) => {
  axios.post("http://18.204.156.27:3001" + req.originalUrl, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
})
app.put('/stays/*', (req, res) => {
  axios.put("http://18.204.156.27:3001" + req.originalUrl, req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
})

app.listen(PORT, () => {
  console.info(`Ready on port ${PORT}`);
})