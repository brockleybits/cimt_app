const express = require("express");
const cors = require("cors");
const app = express();

// Cross-Origin-Resource-Sharing
app.use(cors({
  origin: "http://localhost:8081"
}));

// Parse JSON and URLencoded requests
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Authenticate dB
const db = require("./models");
db.sequelize.authenticate()
  .then(() => console.log('CIMT dB connected...'))
  .catch((err) => console.log('Error connecting to CIMT dB'));

// Server home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CIMT!"
  });
});

// Routes to endpoints (dB queries)
app.use('/login', require('./routes/login'));
app.use('/main-menu', require('./routes/main-menu'));
app.use('/add-resource', require('./routes/add-resource'));
app.use('/add-incident', require('./routes/add-incident'));
app.use('/resource-report', require('./routes/resource-report'));
app.use('/search-resources', require('./routes/search-resources'));

// Set server port & listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
