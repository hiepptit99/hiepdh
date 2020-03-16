const express = require('express');
const config = require('config');
const router = require('./router');
const allRouters = require('list-endpoints-express');

app = express();
app.use(router);
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use('/static', express.static('./public'));


const port = process.env.PORT || config.get('server.port');
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  console.log(allRouters(app));
});