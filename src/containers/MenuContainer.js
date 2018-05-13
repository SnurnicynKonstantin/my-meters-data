import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MenuContainer extends Component {

    getCount() {
        let counter = 0;
        this.props.basket.forEach(function(item) {
            counter += item.price * item.counter;
        });
        return counter;
    }

    render() {
        // <li id="koktely_button">
        //     <a href="#">Молочные коктейли</a>
        // </li>
        console.log('PATH', this.props.location);
        return (
            <div className="top_menu">
                <div className="block_inner">
                    { this.props.location.pathname == "/" ?
                        <ul>
                            <li id="shashlik_button">
                                <a href="#">Шашлык</a>
                            </li>
                            <li id="pizza_button">
                                <a href="#">Пицца</a>
                            </li>
                            <li id="hachapuri_button">
                                <a href="#">Хачапури</a>
                            </li>
                            <li id="shaurma_button">
                                <a href="#">Шаурма</a>
                            </li>

                            <li id="napitki_button">
                                <a href="#">Напитки</a>
                            </li>
                        </ul>
                        :
                        <ul>
                            <li>
                                <Link to={`/`}>На главную</Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        basket: state.basket
    };
}

export default connect(mapStateToProps)(MenuContainer);