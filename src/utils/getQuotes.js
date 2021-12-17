import { urlQuote, urlQuoteEn, getRandomPosition } from './../utils/utils';
import axios from 'axios';

const getQuotesEspanol = async( urlQuote, randomPosition ) => {
    try{
        const {data} = await axios.get(urlQuote);
        return { 
            quote: data.quotes[randomPosition].quote, 
            author: data.quotes[randomPosition].author 
        }
    } catch(error) {
        console.log(error)
    }
    }

const getQuotesEnglish = async(urlQuoteEn, randomPosition) => {
    try{
        const {data} = await axios.get(urlQuoteEn);
        return { 
            quoteEn: data.quotes[randomPosition].quote, 
            authorEn: data.quotes[randomPosition].author
        }
    } catch(error) {
        console.log(error)
    }
    }

const getQuotes = async(updateQuote, updateQuoteEn, updateAuthor, updateAuthorEn) => {
    const randomPosition = getRandomPosition(102);

    getQuotesEspanol(urlQuote, randomPosition)
        .then(({quote, author}) => {
        updateQuote(quote);
        updateAuthor(author);
    });

    getQuotesEnglish(urlQuoteEn, randomPosition)
        .then(({quoteEn, authorEn})=>{
        updateQuoteEn(quoteEn);
        updateAuthorEn(authorEn);
    });
} 

export default getQuotes;