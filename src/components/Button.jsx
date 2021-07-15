import React from 'react'
import classNames from 'classnames';
// стили у нас импотированы аж в index.js

export default function Button({ className, outline, children }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline
      })}>{children}</button>
  );
};