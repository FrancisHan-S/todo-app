// api/index.js

const todos = [
  { id: 1, task: "Study deployment", done: false },
  { id: 2, task: "Push project to GitHub", done: true },
];

module.exports = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
