import React from 'react';
import Header from './Header';
import Menu from './Menu';

const Layout = () => {
    return ( 
        <div>
            <Header/>
            <br/>
          <div className="container">
            <div className="columns">
                <div className="calumn is-one-quarter">
                    <Menu/>
                </div>
                <div className="calumn">
                    <p>Este es el contenido</p>    
                </div>
            </div>
          </div>
        </div> 
    );
}
 
export default Layout;
