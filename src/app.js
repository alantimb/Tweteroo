import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  const user = { username: username, avatar: avatar };
  users.push(user);

  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  } else {
    res.send(user);
  }
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const newTweet = { username: username, tweet: tweet };
  newTweet.avatar = users.at(-1).avatar;

  tweets.push(newTweet);

  if (!username || !tweet) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  } else {
    res.send({ username: username, tweet: tweet });
  }
});

app.get("/tweets", (req, res) => {
  const lastTweets = tweets.slice(-10).reverse();

  res.send(lastTweets);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Ester servidor funciona na porta ${PORT}`));
