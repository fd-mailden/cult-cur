import React from "react";
import style from './StyledSentence.module.scss'
import parse from 'html-react-parser';
import PropTypes from "prop-types";

function StyledSentence({ sentence }) {
  const newSentence = sentence.replace(/!!/gi, `<span className='${style.color}'>`);
  const resSentence = newSentence.replace(/!./gi, "</span>");

  return parse(resSentence);
}

StyledSentence.propTypes = {
  sentence: PropTypes.string,
};
export {StyledSentence};