import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap4/bootstrap.min.css';
import './plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import './styles/main_styles.css';
import './styles/responsive.css';
import App from './components/TopHeader';
import TopHeader from './components/TopHeader';
import HomeBanner from './components/HomeBanner';

ReactDOM.render(
    <React.Fragment>
        <TopHeader />, 
        <HomeBanner /> 
    </React.Fragment>, document.getElementById('root')
)
