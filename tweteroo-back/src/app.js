import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  const newTweet = tweet;
  newTweet.avatar = users.at(-1).avatar;

  tweets.push(newTweet);
  res.send(tweet);
});

app.get("/tweets", (req, res) => {
  const lastTweets = tweets.slice(-10);

  res.send(lastTweets);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Ester servidor funciona na porta ${PORT}`));
