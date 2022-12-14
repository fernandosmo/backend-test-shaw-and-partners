const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', require('./routes'));

var port = 7001;
app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}/api`)
);
