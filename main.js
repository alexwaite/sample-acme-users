const express = require('express');
const app = express();
const users = require('./users/users.js');

app.use(express.static('users'));

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const html = `
  <html>

  <head>
  <link rel='stylesheet' href='/styles/styles.css' />
  </head>

    <body>

  <h1 class='title'><a href='/'>Home</a></h1>
  <a href='/users'>Users</a>
  <p>${users.find(id).name}</p>
    </body>
  </html>
  `;
  res.send(html);
});

app.get('/users', (req, res) => {
  const html = `
  <html>
  <head>
  <link rel='stylesheet' href='/styles/styles.css' />
  </head>
    <body>
      <h1 class='title'><a href='/'>Home</a></h1>
      <a href='/users'>Users</a>
      <ul>
        ${users
          .list()
          .map(
            user => `
          <li><a href = /users/${user.id}>${user.name}</a></li>`
          )
          .join('')}
      </ul>
    </body>
  </html>
  `;
  res.send(html);
});

app.get('/', (req, res) => {
  const html = `
  <html>

  <head>
  <link rel='stylesheet' href='/styles/styles.css' />
  </head>

    <body>

  <h1 class='title'><a href='/'>Home</a></h1>
  <a href='/users'>Users</a>

    </body>
  </html>
  `;
  res.send(html);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
