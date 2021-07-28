import React from 'react'
import classNames from 'classnames';
// стили у нас импотированы аж в index.js

export default function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline
      })}>{children}</button>
  );
};