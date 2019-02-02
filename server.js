const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let Accounts = [
    {
      userId: "", // Generate a random ID
      username: "",
      password: "",
      profileImg: "",
  
      ActivityLogView: [
        {
          activityName: "",
          enjoymentRating: "",
          energyLevel: "",
          engagement: "",
          timestamp: "" // Date.now() or moment.js
        }
      ],
  
      ReflectionLog: [
        {
          journalEntry: "",
          insights: "",
          trends: "",
          surprises: "",
          timestamp: "" // Date.now() or moment.js
        }
      ]
    }
  ];
  

app.use(cors());
app.use(bodyParser.json());

app.get('/Journal', (req, res) => {
  res.status(200).json(Accounts);
});

app.post('/Journal/new', (req, res) => {
  const post = { id: getNewId(), ...req.body };
  Accounts = [...Accounts, post];
  res.status(201).json(Accounts);
});

app.put('/Accounts/:id', (req, res) => {
  const { id } = req.params;
  let postIndex = Accounts.findIndex(post => post.id == id);

  if (postIndex >= 0) {
    Accounts[postIndex] = { ...Accounts[postIndex], ...req.body };
    res.status(200).json(Accounts);
  } else {
    res
      .status(404)
      .json({ message: `The post with id ${id} does not exist.` });
  }
});

app.delete('/Accounts/:id', (req, res) => {
	Accounts = Accounts.filter(post => post.id != req.params.id);
	res.status(200).json(Accounts);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('Accounts/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Accounts', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('server listening on port 5000');
});