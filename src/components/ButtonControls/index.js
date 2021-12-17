import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import "./ButtonControls.css";

const ButtonControls = ({ IconComponent, idBtn, href, onHandleClick, children, bgColor, textColor }) => {
    const bgButton = textColor; 
    const textColorButton = bgColor;
  
    return(
      <Button 
        className="btn" 
        id={idBtn && idBtn} 
        variant="contained" 
        style={{background: bgButton, color: textColorButton}} 
        endIcon={<IconComponent color={textColorButton} />} 
        onClick={onHandleClick}  href={href} target="_top">
        {children}
      </Button>
    );
  }

const mapStateToProps = (state) => (
    { bgColor: state.bgColor, textColor: state.textColor }
);
  
export default connect(mapStateToProps)(ButtonControls);