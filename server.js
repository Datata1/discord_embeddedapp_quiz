const express = require('express');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv'); // Import dotenv
dotenv.config({ path: "./.env" });

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/quiz/browser'));
app.use(express.json());

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));


app.post("/api/token", async (req, res) => {
  try {
    // Dynamically import 'node-fetch'
    const fetch = await import('node-fetch');

    // Exchange the code for an access_token
    const response = await fetch.default(`https://discord.com/api/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.VITE_DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: req.body.code,
      }),
    });

    // Retrieve the access_token from the response
    const { access_token } = await response.json();

    // Return the access_token to our client as { access_token: "..."}
    res.send({access_token});
  } catch (error) {
    console.error("Error fetching token:", error);
    res.status(500).send("Error fetching token");
  }
});

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));
