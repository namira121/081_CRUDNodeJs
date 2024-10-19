import express, {Router} from "express";

const router = express.Router();

const mobil = [
    {
        merk: "Porche",
        model: "Sport",
        warna: "Hitam",
        tahun: 2024,
    },
    {
        merk: "BMW",
        model: "Sport",
        warna: "Putih",
        tahun:2020,
    },
];
router.get("/",(req,res) => {
    res.send(mobil);
});
export default router;