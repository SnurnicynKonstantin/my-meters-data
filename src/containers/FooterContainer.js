import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class FooterContainer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="footer_in container">
                    <div className="f_delivery">
                        Доставка пиццы в Омске <br/><br/>
                        Омск, Куйбышева, 132 к1
                    </div>
                    <div className="f_text">
                        <p>Твоя Пицца — современная служба доставки. Мы молоды и оптимистичны, полны сил и желания сделать лучшую доставку пиццы в Омске</p>
                        <p>Наши ценности:<br/>
                            &nbsp;• Производить качественную пиццу для жителей и гостей любимого города<br/>
                            &nbsp;• Внимательно с пониманием относиться к своим клиентам<br/>
                            &nbsp;• Предоставлять современный и оригинальный сервис
                        </p>
                    </div>
                    <div className="copy">
                        <span className="copy_row">© 2017 Твоя Пицца — доставка пиццы в Омске</span><br/>
                        <span className="copy_row">Сайт разработал Снурницын Константин. Email: ks_on_v@mail.ru</span>
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

export default connect(mapStateToProps)(FooterContainer);