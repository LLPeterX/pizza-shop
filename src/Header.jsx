import React from 'react';
import logo from './assets/img/pizza-logo.svg'
import CartButton from './CartButton.jsx';
import Button from './Button';
//import classNames from 'classnames';
/* 
// функциональный компонент
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>Pizza Shop</h1>
            <p>самая вкусная пицца в Майкопе!</p>
          </div>
        </div>
        <CartButton />
      </div>
    </div>
  );
}
 */

class Header extends React.Component {

  render() {
    return (

      <div className="header">
        <div className="container">
          <Button outline>Кнопка</Button>
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>Pizza Shop v.2</h1>
              <p>самая вкусная пицца в Майкопе!</p>
            </div>
          </div>
          <CartButton sum={560} count={4} outline />
        </div>
      </div>
    );
  }
}
export default Header;