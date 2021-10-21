const http = require('http');
const app = require('./app');

require('./models');

const server = http.createServer(app);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
