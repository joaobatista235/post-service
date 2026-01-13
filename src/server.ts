import app from "@/app";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API está rodando 🚀");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

