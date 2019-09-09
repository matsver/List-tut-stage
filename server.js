const express = require('express');
const db = require('./db/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');



const app = express();
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  limit: '5mb',
  parameterLimit: 100000,
  extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/users', (req, res) => {
  res.status(200).send({
    success: 'true',
    users: db
  })
});

app.post('/api/users', (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      success: 'false',
      message: 'Name is required!'
    });
  } else if (!req.body.dob) {
    return res.status(400).send({
      success: 'false',
      message: 'Dob is required!'
    });
  } else if (!req.body.postal) {
    return res.status(400).send({
      success: 'false',
      message: 'Postal is required!'
    });
  } else if (!req.body.imgPath) {
    return res.status(400).send({
      success: 'false',
      message: 'Image is required!'
    })
  }
  const user = {
    id: db.users.length + 1,
    name: req.body.name,
    dob: req.body.dob,
    postal: req.body.postal,
    imgPath: req.body.imgPath
  }
  db.users.push(user);
  return res.status(201).send({
    success: 'true',
    user
  })
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.users.map((user, ) => {
    if (user.id === id) {
      return res.status(200).send({
        success: 'true',
        user
      });
    }
  });
  return res.status(400).send({
    success: 'false'
  });
});

app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.users.map((user, index) => {
    if (user.id === id) {
      db.users.splice(index, 1);
      return res.status(200).send({
        success: 'true',
      });
    }
  });
  return res.status(400).send({
    success: 'false'
  });
});

app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  let userFound;
  let itemIndex;
  db.users.map((user, index) => {
    if (user.id === id) {
      userFound = user;
      itemIndex = index;
    }
  });
  if (!userFound) {
    return res.status(400).send({
      success: 'false'
    });
  }
  if (!req.body.name && !req.body.dob && !req.body.postal) {
    return res.status(400).send({
      success: 'false'
    });
  }
  const updatedUser = {
    id: userFound.id,
    name: req.body.name || userFound.name,
    dob: req.body.dob || userFound.dob,
    postal: req.body.postal || userFound.postal,
    imgPath: req.body.imgPath || userFound.imgPath
  };
  db.users.splice(itemIndex, 1, updatedUser);
  return res.status(201).send({
    success: 'true',
    updatedUser
  });
});

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});