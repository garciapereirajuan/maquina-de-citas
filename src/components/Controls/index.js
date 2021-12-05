import React from 'react';
import { connect } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Grid from '@material-ui/core/Grid';
import ButtonControls from './../ButtonControls';
import { FiTwitter, FiGithub, FiChevronRight } from 'react-icons/fi';
import { BsTranslate } from 'react-icons/bs';
import { urlTwitter } from '../../utils/utils';



const Controls = ({ quote, quoteEn, author, authorEn, langEnglish, onRenderNewQuote, setLangEnglish }) => {
    const currentQuote = langEnglish ? quoteEn: quote;
    const currentAuthor = langEnglish ? authorEn: author;
    const sharedTwitter = urlTwitter(currentQuote, currentAuthor);
    return(
      <Grid >
        <BottomNavigation xs={12} style={{background: "inherit"}}>
          <Grid item container xs={12} spacing={2} alignItems="center">
            <Grid item container xs={6} md={3} justifyContent="center">
              <ButtonControls IconComponent={FiTwitter}>
                <a href={sharedTwitter && sharedTwitter}
                  target="_top" 
                  id="tweet-quote">
                  Tweet
                </a>
              </ButtonControls>
            </Grid>
            <Grid item container xs={6} md={3}>
              <ButtonControls IconComponent={FiGithub}>
                <a href=""> Repo </a>
              </ButtonControls>
            </Grid>
            <Grid item container xs={6} md={3}>
              <ButtonControls 
                onHandleClick={() => setLangEnglish(!langEnglish)}
                IconComponent={BsTranslate}>
                {
                  langEnglish 
                    ? <>ES</>
                    : <>EN</>
                }
              </ButtonControls>
            </Grid>
            <Grid item container xs={6} md={3} justifyContent="center">
              <ButtonControls idBtn="new-quote"
                onHandleClick={()=> onRenderNewQuote()}
                IconComponent={FiChevronRight}>
                {
                  langEnglish 
                    ? <>New</>
                    : <>Nueva</>
                }
              </ButtonControls>
            </Grid>
          </Grid>
        </BottomNavigation>
      </Grid>
     );
  };

  const mapStateToProps = (state) => ({
    quote: state.quote, author: state.author,
    quoteEn: state.quoteEn, langEnglish: state.langEnglish
  });
  
  const mapDispatchToProps = (dispatch) => {
    return{ 
      setLangEnglish: (langEnglish) => dispatch({ type: "SET_LANG_ENGLISH", payload: langEnglish })
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Controls);