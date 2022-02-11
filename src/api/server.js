require('dotenv').config();

const app = require('./app');

app.use(require('../errors/handle'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
