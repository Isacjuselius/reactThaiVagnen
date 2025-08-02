import React from 'react';

class KontaktaOss extends React.Component {
    render() {
        return(
             <section className="contactSection">

            <div id="contactContainer">
            
            <div className="contactForm">
                <h2>Kontakta oss</h2>
                <form>
                    
                    <div className="form-group">
                        <input type="text" onfocus="onFocus(this)" onblur="onBlur(this)" name="name" placeholder="Ditt namn" className="contactInput"/>
                    </div>

                    <div className="form-group">
                        <input type="email" onfocus="onFocus(this)" onblur="onBlur(this)" name="email" placeholder="Din epost" className="contactInput"/>
                    </div>

                    <div className="form-group">
                        <textarea name="message" onfocus="onFocus(this)" onblur="onBlur(this)" className="contactInput"></textarea>
                    </div>

                    <button type="submit">Skicka meddelande</button>
                </form>
            
            </div>

            <div className="contactInfo">
                <h3>Kontakt information</h3>
                <p>070-5377815</p>
                <a href="mat@thai-vagnen.se">mat@thai-vagnen.se</a>
                <p>Formvägen 8</p>
            </div>

        </div>

    </section>
        )
    }
}

export default KontaktaOss;