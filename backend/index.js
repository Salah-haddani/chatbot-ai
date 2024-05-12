import OpenAI from "openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 1520;

app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: "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",
});



app.post("/", async(req, res) => {
    const { chats } = req.body;

    const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "you are my fireBot !!",
      },
      ...chats,
    ],
  });

  res.json({
    output: result.choices[0].message,
  });
})

app.listen(port, () => {
    console.log(`Listening om port ${port}`);
})