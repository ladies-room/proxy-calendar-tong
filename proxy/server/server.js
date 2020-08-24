
const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path')
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

// port 3003 (susan gallery)
app.all('/property/*', (req, res) => {
  axios({
    method: req.method,
    url: "http://localhost:3003" + req.originalUrl,
    headers: req.params.id,
    data: req.data
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => console.log(err));
})

// port 2046 (tong calendars)
app.get("/listing", (req, res) => {
  var getListingAddress = 'http://localhost:2046/listing'
  axios.get(`${getListingAddress}/`)
    .then(response => {
      res.send(response.data)
    })
});

// port 3001 (blanca morePalces)
app.all("/stays/*", (req, res) => {
  axios({
    method: req.method,
    url: "http://localhost:3001" + req.originalUrl,
    headers: req.headers,
    data: req.data
  }).then((response) => {
    res.send(response.data);
  }).catch((err) => console.log(err));
});


app.listen(PORT, () => {
  console.info(`Ready on port ${PORT}`);
});