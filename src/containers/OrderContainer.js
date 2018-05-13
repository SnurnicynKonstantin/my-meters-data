import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Slider from './SliderContainer';
import Item from '../components/order/ItemComponent';
import * as basketActions from '../actions/basketActions';
import * as orderActions from '../actions/orderActions';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : '50%',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class OrderContainer extends Component {

    getInitialState() {
        return {
            telephone: '',
            name: '',
            comment: '',
            adres: ''
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        let { dispatch } = this.props;
        this.basketActions = bindActionCreators(basketActions, dispatch);
        this.orderActions = bindActionCreators(orderActions, dispatch);

        this.sendMailHandler = this.sendMailHandler.bind(this);
        this.telephoneChangeHandler = this.telephoneChangeHandler.bind(this);
        this.adresChangeHandler = this.adresChangeHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.commentChangeHandler = this.commentChangeHandler.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({modalIsOpen: false});
        this.props.history.push('/');
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    deleteItemHandler(key) {
        this.basketActions.deleteItem(key);
    }

    incrementCountHandler(key) {
        this.basketActions.incrementItemCount(key);
    }

    decrementCountHandler(key) {
        this.basketActions.decrementItemCount(key);
    }

    sendMailHandler() {
        // this.setState({basket: this.props.basket});
        this.openModal();
        this.orderActions.sendMail(this.state, this.props.basket);
    }

    telephoneChangeHandler(e) {
        this.setState({telephone: e.target.value});
    }

    adresChangeHandler(e) {
        this.setState({adres: e.target.value});
    }

    nameChangeHandler(e) {
        this.setState({name: e.target.value});
    }

    commentChangeHandler(e) {
        this.setState({comment: e.target.value});
    }

    getCount() {
        let counter = 0;
        this.props.basket.forEach(function(item) {
            counter += item.price * item.counter;
        });
        return counter;
    }

    render() {
        let order = [];
        var byKey = this.props.basket.slice(0);
        byKey.sort(function(a,b) {
            return a.key - b.key;
        });
        byKey.forEach(function(item) {
            order.push(
                <Item
                    item={item}
                    deleteItemHandler={this.deleteItemHandler.bind(this)}
                    incrementCountHandler={this.incrementCountHandler.bind(this)}
                    decrementCountHandler={this.decrementCountHandler.bind(this)}
                />
            );
        }, this);

        return (
            <div className="banner_block">
                <Slider/>
                <div className="container">
                    <h1 className="order-title">Ваш заказ:</h1>
                    { this.props.basket.length != 0 ?
                        <table className="table order-table">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Наименование</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Стоимость</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {order}
                            <tr>
                                <th>Сумма заказа: {this.getCount()} Р</th>
                            </tr>
                            </tbody>
                        </table>
                        :
                        <h1 className="order-title">Ваша корзина пуста</h1>
                    }
                    { this.props.basket.length != 0 ?
                        <form role="form" method="post" action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Телефон</label>
                                        <input 
                                            className="form-control" 
                                            placeholder="Телефон"
                                            onChange={this.telephoneChangeHandler}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Адрес</label>
                                        <input 
                                            className="form-control" 
                                            placeholder="Адрес"
                                            onChange={this.adresChangeHandler}/>
                                    </div>
                                </div>
                            </div><div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Имя</label>
                                        <input 
                                            className="form-control" 
                                            placeholder="Имя"
                                            onChange={this.nameChangeHandler}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Комментарий</label>
                                        <input 
                                            className="form-control" 
                                            placeholder="Комментарий"
                                            onChange={this.commentChangeHandler}/>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success" onClick={this.sendMailHandler}>Оформить заказ</button>
                        </form>
                        :
                        ""
                    }
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h1>Спасибо за ваш заказ.</h1>
                    <h1>В ближайшее время наш оператор свяжется с вами по указанному номеру.</h1>
                    <button type="button" className="btn btn-success" onClick={this.closeModal}>Закрыть</button>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        basket: state.basket
    };
}

export default connect(mapStateToProps)(OrderContainer);