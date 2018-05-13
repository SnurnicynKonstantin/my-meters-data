import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class ItemComponent extends Component {

    constructor(props) {
        super(props);
        this.buyItemHandler = this.buyItemHandler.bind(this);
    }

    buyItemHandler() {
        this.props.buyItemHandler(this.props.attributes);
    }

    render() {

        let attributes = this.props.attributes;
        const pathToPictures000webhostapp = "https://smart-mirror2.000webhostapp.com/textures/position/";
        const pathToIngredients000webhostapp = "https://smart-mirror2.000webhostapp.com/textures/ingredients/";
        const pathToPictures = "http://youpizza55.ru/textures/position/";
        const pathToIngredients = "http://youpizza55.ru/textures/ingredients/";

        let compositions = [];
        let composition = [];
        let counter = 0;

        this.props.attributes.composition.forEach(function(item) {
            counter++;
            composition.push(<td className={item}>
                    <img src={pathToIngredients + item + ".png"}/>
                </td>);
            if(counter === 3) {
                compositions.push(<tr>{composition}</tr>);
                counter = 0;
                composition = [];
            }
        });
        if(counter > 0 && counter < 3)
            compositions.push(<tr>{composition}</tr>);


        return (
            <li className={this.props.position}>
                <img className="pic" src={pathToPictures + attributes["pic-s"] + ".jpg"} title=""/>
                <div className="buy_block">
                    <a onClick={this.buyItemHandler}>
                        <span className="price">
                            <span>{attributes.price}</span>
                            <span className="rub"></span>
                        </span>
                    </a>
                </div>
                <span className="title"><div className="numeration">{attributes.key}</div>{attributes.name}</span>
                <div className="prod_info">{attributes.info}</div>
                {attributes.description}
                <div className="composition">
                    <table>
                        <tbody>
                            {compositions}
                        </tbody>
                    </table>
                </div>
            </li>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(ItemComponent);