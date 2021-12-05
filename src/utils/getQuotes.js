import { urlQuote, urlQuoteEn, getRandomPosition } from './../utils/utils';
import axios from 'axios';
import PropTypes from 'prop-types'; 

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
        quote && updateQuote(quote);
        author && updateAuthor(author);
    });

    getQuotesEnglish(urlQuoteEn, randomPosition)
        .then(({quoteEn, authorEn})=>{
        quoteEn && updateQuoteEn(quoteEn);
        authorEn && updateAuthorEn(authorEn);
    });
} 

getQuotes.propTypes = {
    updateQuote: PropTypes.func.isRequired, 
    updateQuoteEn: PropTypes.func.isRequired,
    updateAuthor: PropTypes.func.isRequired,
    updateAuthorEn: PropTypes.func.isRequired,
}

export default getQuotes;