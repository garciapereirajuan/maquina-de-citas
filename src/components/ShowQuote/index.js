import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./ShowQuote.css";

const ShowQuote = ({ quote, quoteEn, author, authorEn, langEnglish }) => (
    <React.Fragment>
      <Grid item container xs={12} justifyContent="center" alignItems="center" >
        {
          langEnglish 
            ? <Typography variant="h4" id="text">"{quoteEn}"</Typography>
            : <Typography variant="h4" id="text">"{quote}"</Typography>
        }     
      </Grid>
      <Grid item container xs={12} justifyContent="flex-end">
        {
            langEnglish
            ? <Typography variant="h5" id="author">{authorEn}</Typography>
            : <Typography variant="h5" id="author">{author}</Typography>
        }
        {console.log("authorEn", authorEn)}
      </Grid>
    </React.Fragment>
  );

const mapStateToProps = (state) => ({
    quote: state.quote, author: state.author, authorEn: state.authorEn,
    quoteEn: state.quoteEn, langEnglish: state.langEnglish
});

export default connect(mapStateToProps)(ShowQuote);