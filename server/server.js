//import express middleware and assign it to 'app'
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const db = require('./models');
db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log('running on port 3001');
	});
});

const userRouter = require('./routes/Users');
app.use('/users', userRouter);

app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
// 	console.log('hello');
// });

// // when base route is accessed (req = request, res = response)
// app.post('/api/login', (req, res) => {
// 	const { username, password } = req.body;

// 	const sql = 'SELECT * FROM users WHERE (name, password) VALUES (?,?)';
// 	db.query(sql, [username, password], (err, result) => {
// 		console.log(username);
// 	});
// });
