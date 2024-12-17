import React from 'react';
import './menu.css';
import dishBeef from '../../assets/beef_top.png';
import dishTofu from '../../assets/tofu_top.png';

const Menu = () => {
    return (
        <div className="menu">
            <div className="dishes">
                <img className="dish-beef-top" src={dishBeef} alt="beef dish" />
                <img className="dish-tofu-top" src={dishTofu} alt="tofu dish" />
            </div>
            <div className="description">
                <h1>Choose between</h1>
                <br/>
                <div className="beef-or-tofu">
                    <h2><b>Beef</b></h2>
                    <h2 className="or">or</h2>
                    <h2><b>Tofu</b></h2>
                </div>
                <br/>
                <h4>Always comes with</h4>
                <p>pickled red cabbage<br/>danmuji<br/>sauteed white cabbage<br/>fresh carrots<br/>fresh cucumbers<br/>gochu-don</p>
                <br/>
                <h5>Allergies</h5>
                <p>soy, sesame, gluten</p>
            </div>
        </div>
    );
};

export default Menu;