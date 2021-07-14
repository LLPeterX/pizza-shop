import React from 'react'
import classNames from 'classnames';

// стили у нас импотированы аж в index.js

export default function Button(props) {
  return (
    <button className={classNames('button', {
      'button--outline': props.outline
    })}>{props.children}</button>
  );
};