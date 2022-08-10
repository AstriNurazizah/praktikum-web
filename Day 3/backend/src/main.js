import express from "express";
const app = express();
app.use(express.json());
const port = 8000;

app.get("/", (_req, res) => {
  res.send({
    nama: "Astri Nurazizah",
  });
});
app.get("/makanan", (_req, res) => {
  res.send([
    {
      id: 1,
      nama: "Indomie",
      rasa: "Rendang",
    },
    {
      id: 2,
      nama: "Indomie",
      rasa: "Aceh",
    },
    {
      id: 3,
      nama: "Indomie",
      rasa: "Bandung",
    },
    {
      id: 4,
      nama: "Indomie",
      rasa: "Ayam Bawang",
    },
  ]);
});
app.get("/minuman", (_req, res) => {
  res.send([
    {
      id: 1,
      nama: "Nutrisari",
      rasa: "Jeruk",
    },
    {
      id: 2,
      nama: "Nutrisari",
      rasa: "Baso",
    },
    {
      id: 3,
      nama: "Aqua",
      rasa: "none",
    },
    {
      id: 4,
      nama: "Siera",
      rasa: "None",
    },
  ]);
});
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});