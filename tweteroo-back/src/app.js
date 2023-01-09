import express from "express";
import cors from "cors";

// const user = {
//   username: "bobesponja",
//   avatar:
//     "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
// };

// const tweet = {
//   username: "bobesponja",
//   tweet: "eu amo o hub",
// };

const users = [];

const tweets = [];

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  tweets.push(tweet);
  res.send(tweet);
});

app.get("/tweets", (req, res) => {
  // pegar o usuário (users) e adicionar um tweet (tweets.tweet)

  res.send(tweets);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Ester servidor funciona na porta ${PORT}`));
