import express from "express";
import cors from "cors";  // Import the CORS package
import { getFact } from "./numFacts.js";

const app = express();
const PORT = 3000;

// Use CORS middleware to allow all origins
app.use(cors());

app.get("/fact/:number", async (req, res) => {
    const { number } = req.params;
    console.log(number);

    // Validate number
    if (isNaN(number)) {
        return res.status(400).json({ error: "Invalid number parameter" });
    }

    try {
        const fact = await getFact(number);
        res.json({ number, fact });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch fact" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
