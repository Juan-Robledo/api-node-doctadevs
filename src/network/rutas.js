const routerUsers = require('../components/user/network');
const rutas = function (server){
    server.use('/users', routerUsers);
}
module.exports = rutas;