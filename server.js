const express = require('express');
path = require('path');
const app = express();
app.use(express.static('./dist/ec-angular-app-admin'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/ec-angular-app-admin/index.html'));

});
app.listen(8080, () => {
    console.log('server started');

})