
export const getRandomPosition = (max = 2) => Math.floor(Math.random()*max);
export const urlQuote = "https://raw.githubusercontent.com/garciapereirajuan/utils/main/quotes-spanish-of-freecodecamp.json";
export const urlQuoteEn = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
export const urlTwitter = (currentQuote, currentAuthor) => `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"'+currentQuote+'" '+currentAuthor)}`;
export const urlGitHub = "https://github.com/garciapereirajuan/maquina-de-citas";

