/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

const express = require('express');
const path = require('path');
const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');
const cookieSession = require('cookie-session');

// Instantiate Services
const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const routes = require('./routes');
const app = express();
const port = 3000;
app.set('trust proxy', 1);
app.use(
	cookieSession({
		name: 'session',
		keys: ['Gzreat85938w', 'nnrr8736yw'],
	})
);

// ****** ROUTES ******/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join((__dirname, './static'))));
app.use('/', routes({ feedbackService, speakerService }));

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
