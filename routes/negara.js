import express, { Router } from "express";

const router = express.Router();

const negara = [
    {
        nama: "Indonesia",
        benua: "Asia",
        penduduk: "banyak sekali",
        umur: 78,
        Bahasa: "bahasa Indonesia",
    },
    {
        nama: "Brunei",
        benua: "Asia",
        penduduk: "sedikit sekali",
        umur: 50,
        bahasa: "bahasa Melayu",
    },
    {
        nama: "Inggris",
        benua: "Eropa",
        penduduk: "Lumayan",
        umur: 1000,
        bahasa: "bahasa Inggris",
    },
];
router.get("/", (req, res) => {
    res.send(negara);
});
export default router;