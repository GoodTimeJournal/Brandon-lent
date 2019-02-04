const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const Accounts =[
    {
      userId: 123, // Generate a random ID
      username: 'blent1050',
      password: 'test',
      profileImg: '',
      
      ActivityLogView: [
        {
          activityName: 'gym',
          enjoymentRating: 9000,
          energyLevel: 5,
          engagement: 'Alot!',
          timestamp: '10', // Date.now() or moment.js
        },
      ],
  
      ReflectionLog: [
        {
          journalEntry: 'test', 
          insights: 'test',
          trends: 'test',
          surprises: 'test',
          timestamp: 'test' // Date.now() or moment.js
        },
      ]
    }
  ]

app.get('/home', (req, res) => {
	res.send(Accounts);
});

app.get('/home', (req, res) => {
	const account = Accounts.filter(account => account.id.toString() === req.params.id)[0];
	res.status(200).json(account);
});

app.post('/home', (req, res) => {
	if (req.body.id !== undefined) Accounts.push(req.body);
	res.status(201).json(Accounts);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});