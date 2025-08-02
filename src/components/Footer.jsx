import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div id="footerContainer">
                    <div className="footerBesokOss">
                        <h3>BESÖK OSS</h3><br />
                        <p>Formvägen 8,</p> 
                        <p>vid Elon & Flügger färg.</p>
                        <p>070-5377815</p>
                        <a href="mailto:mat@thai-vagnen.se">mat@thai-vagnen.se</a>
                    </div>
                    <div className="footerThaiVagnen">
                        <h3>THAI-VAGNEN</h3><br />
                        <a href="https://www.facebook.com/thaivagnenersboda">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div className="footerOppettider">
                        <h3>ÖPPETTIDER</h3>
                        <p>Mån-fre 10.30-19.00</p>
                        <p>Lör 11.00-19.00</p>
                        <p>Sön stängt</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;