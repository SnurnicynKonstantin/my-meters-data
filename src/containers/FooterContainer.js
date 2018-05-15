import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class FooterContainer extends Component {

    render() {
        return (
            <footer className="container pt-4 my-md-5 pt-md-5 border-top footer">
                  <div className="row">
                    <div className="col-12 col-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                      <small className="d-block mb-3 text-muted">2018</small>
                    </div>
                    <div className="col-6 col-md">
                      <h5>Обратная связь</h5>
                      <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">По всем вопросам обращайтесь сюда: ks_on_v@mail.ru</a></li>
                      </ul>
                    </div>
                    </div>
            </footer>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(FooterContainer);