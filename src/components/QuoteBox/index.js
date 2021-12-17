import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import getColors from './../../utils/getColors';
import getQuotes from './../../utils/getQuotes';
import Grid from '@material-ui/core/Grid';
import ShowQuote from './../ShowQuote';
import Controls from './../Controls';
import PropTypes from 'prop-types';
import "./QuoteBox.css";

const QuoteBox = ({ 
    updateBgColor, 
    updateTextColor, 
    updateQuote,
    updateQuoteEn,
    updateAuthor,
    updateAuthorEn,
    bgColor, 
    textColor
  }) => {
    /*displayHook -> visual effect*/
    const [ display, setDisplay ] = useState(true);
    const displayOption = display ? "block" : "none";
    const styleContainer = {display: displayOption, background: bgColor, color: textColor};
    
    const renderNewQuote = useCallback(
      () => {
      setTimeout(() => setDisplay(true), 100);
      setDisplay(false);
      getQuotes(updateQuote, updateQuoteEn, updateAuthor, updateAuthorEn);
      getColors(updateBgColor, updateTextColor);
    },[updateQuote, updateQuoteEn, updateAuthor, updateAuthorEn, updateBgColor, updateTextColor]);
    
    useEffect(()=>{
      renderNewQuote();
    },[renderNewQuote]);
    
    return(
      <Grid container id="quote-box" xs={11} sm={8} md={6} style={styleContainer}>  
        <ShowQuote />
        <Controls onRenderNewQuote={renderNewQuote} />
      </Grid>
    );
};

QuoteBox.propTypes = {
    updateBgColor: PropTypes.func.isRequired, 
    updateTextColor: PropTypes.func.isRequired, 
    updateQuote: PropTypes.func.isRequired,
    updateQuoteEn: PropTypes.func.isRequired,
    updateAuthor: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired, 
    textColor: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return{ 
      updateQuote: (quote) => dispatch({ type: "UPDATE_QUOTE", payload: quote }),
      updateQuoteEn: (quoteEn) => dispatch({ type: "UPDATE_QUOTE_EN", payload: quoteEn }),
      updateAuthor: (author) => dispatch({ type: "UPDATE_AUTHOR", payload: author }),
      updateAuthorEn: (authorEn) => dispatch({ type: "UPDATE_AUTHOR_EN", payload: authorEn }),
      updateBgColor: (bgColor) => dispatch({ type: "UPDATE_BG_COLOR", payload: bgColor }),
      updateTextColor: (textColor) => dispatch({ type: "UPDATE_TEXT_COLOR", payload: textColor })
    }
}
const mapStateToProps = (state) => (
    { bgColor: state.bgColor, textColor: state.textColor }
);

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);