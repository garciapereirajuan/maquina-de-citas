import { getRandomPosition } from './utils';
import PropTypes from 'prop-types';

const getColors = (updateBgColor, updateTextColor) => {
    const colors = [
      {bgColor:"#fb8500", textColor:"#fff"}, {bgColor:"#2a9d8f", textColor: "#fff"}, {bgColor:"#f4a261", textColor: "#343a40"}, 
      {bgColor:"#457b9d", textColor: "#fff"}, {bgColor:"#ffe8d6", textColor: "#343a40"}, {bgColor:"#8ecae6", textColor: "#343a40"}, 
      {bgColor:"#4cc9f0", textColor: "#343a40"}, {bgColor:"#ee9b00", textColor: "#343a40"}, {bgColor:"#bb3e03", textColor: "#fff"}, 
      {bgColor:"#386641", textColor: "#fff"}, {bgColor:"#ee6c4d", textColor: "#fff"}, {bgColor:"#656d4a", textColor: "#fff"}, 
      {bgColor:"#118ab2", textColor: "#fff"}
    ];
    const randomPosition = getRandomPosition(colors.length);
    updateBgColor(colors[randomPosition].bgColor);
    updateTextColor(colors[randomPosition].textColor);
}

getColors.propTypes = {
    updateBgColor: PropTypes.func.isRequired,
    updateTextColor: PropTypes.func.isRequired,
}

export default getColors;