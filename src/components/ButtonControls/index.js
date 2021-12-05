import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./ButtonControls.css";

const ButtonControls = ({ IconComponent, idBtn, onHandleClick, children, bgColor, textColor }) => {
    const bgButton = textColor; 
    const textColorButton = bgColor;
  
    return(
      <Button className="btn" id={idBtn && idBtn} variant="contained" style={{background: bgButton, color: textColorButton}} 
        endIcon={<IconComponent color={textColorButton} />} onClick={onHandleClick}>
        {children}
      </Button>
    );
  }

ButtonControls.propTypes = {
    IconComponent: PropTypes.node.isRequired, 
    idBtn: PropTypes.string.isRequired, 
    onHandleClick: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired, 
    bgColor: PropTypes.string.isRequired, 
    textColor: PropTypes.string.isRequired
}

const mapStateToProps = (state) => (
    { bgColor: state.bgColor, textColor: state.textColor }
);
  
export default connect(mapStateToProps)(ButtonControls);