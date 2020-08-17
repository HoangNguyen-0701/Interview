// server.js
const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const jwtSecret = 'secret123';
const saltRounds = 10;

const users = [
  {
    username: 'admin',
    email: 'admin@mail.com',
    country: 'Germany',
    password: '$2b$10$wbY1WiHsSEg0QmvArrViPeT3M1Vf4f0r.QZvS4VVPuOpD0BS2v0r6',
  },
];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  try {
    const { username, password } = req.body || {};
    const user = users.find((u) => u.username === username);
    if (!user)
      return res.status(401).send({
        msg: 'Access is denied due to invalid credentials',
      });

    if (bcrypt.compareSync(password, user.password)) {
      return res.json({
        token: jsonwebtoken.sign({ user: username }, jwtSecret),
      });
    }

    res.status(401).send({
      msg: 'Access is denied due to invalid credentials',
    });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post('/register', (req, res) => {
  try {
    const { username, email, country, password } = req.body || {};
    if (!username & !email & !country & !password) {
      return res.status(403).send('Missing some param!');
    }

    const user = users.find((u) => u.username === username);
    if (user) {
      return res.status(400).send({
        msg: 'Resource already exists',
      });
    }

    const hash = bcrypt.hashSync(password, saltRounds);
    users.push({ ...req.body, password: hash });

    res.json({ msg: 'Create success!' });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));

app.get('/users', (req, res) => {
  const result = users.map((u) => {
    return {
      username: u.username,
      email: u.email,
      country: u.country,
    };
  });
  res.json(result);
});

app.listen(3001);
console.info('App running on localhost:3001');
