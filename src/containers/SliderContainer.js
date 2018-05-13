import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class ContentContainer extends Component {

    render() {
        return (
            <div className="da-slider" id="da-slider">
                <div className="da-slide one da-slide-current">
                    <div className="container">
                        <div className="double-banner-price-left">
                            <div className="double-banner-price-sm-name"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Нежная</div>
                            <div className="double-banner-price-lg-name">Маргарита</div>
                        </div>
                        <div className="double-banner-price-right">
                            <div className="double-banner-price-sm-name"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Пикантная</div>
                            <div className="double-banner-price-lg-name">Пепперони</div>
                        </div>
                        <div className="double-banner-price-phone">
                            <div className="double-banner-price-lg-name"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
                            <div className="shadowed">
                                <div className="double-banner-price-lg-name">
                                    <a href="tel:+73812501616">+ 7 (3812) 50-16-16 </a>
                                </div>
                                <div className="double-banner-price-sm-name">Бесплатная доставка от 600 рублей</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(ContentContainer);