import React from 'react';
import PropTypes from "prop-types";

const MenuItem = (props) => {
    const {type, title} = props;

    return (
      <li className={`${type}__item`}>
        {/* eslint-disable-next-line */}
        <a href="#" className={`${type}__link`} >{title}</a>
      </li>
    )
}

MenuItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
