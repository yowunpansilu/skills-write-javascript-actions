const axios = require("axios");

async function getJoke() {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
            "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
        },
    });
    return response.data.joke;
}

module.exports = getJoke;