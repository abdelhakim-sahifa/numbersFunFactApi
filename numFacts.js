import dotenv from "dotenv";
dotenv.config();

//console.log(process.env);

const API_KEY = process.env.GOOGLE_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
const headers = {
    "Content-Type": "application/json"
};

export async function getFact(number) {
    console.log("we working on it !! the number " + number);

    const payload = {
        contents: [{
            parts: [{ text: `Give me a short fun fact, story, or statement about the number ${number}. Keep it concise.` }]
        }]
    };

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result = await response.json();
            const generatedText = result.candidates[0].content.parts[0].text;
            console.log(generatedText.trim());
            return generatedText.trim();
        } else {
            console.log(`Error: ${response.status} - ${await response.text()}`);
            return `Error: ${response.status} - ${await response.text()}`;
        }
    } catch (e) {
        console.log(`Error retrieving fact: ${e}`);
        return `Error retrieving fact: ${e}`;
    }
}
