const jsonServer = require('fake-json');
const server = jsonServer.create();
const router = jsonServer.router('./src/assets/db.json');
const middlewares = jsonServer.defaults({
	static: './build',
});

const PORT = process.env.PORT || 3001;
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
	console.log('Server is runnin');

})