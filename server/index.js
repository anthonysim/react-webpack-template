const express = require('express');
const app = express();
const path = require('path');


// cors, static files, and middleware for database
app.use(express.json());

// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));


// Server Connection
const PORT = 3000;
app.listen(PORT, () => {
  console.log(path.join(__dirname, '../public'))
  console.log(`Listening on PORT ${PORT} 🐵!`)
})