const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.use('/auth',
  require('./routes/authRoutes')
);

app.use('/users',
  require('./routes/userRoutes')
);

module.exports = app;