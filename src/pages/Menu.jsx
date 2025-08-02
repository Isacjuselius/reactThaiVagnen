import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <section className="menuSection">
            <div id="menuContainer">
            
            <div className="chicken">

                <h2>Kycklingrätter</h2>
                <dl>
                    <dt>Phad kra pao</dt>
                    <dd>Kycklingfilé som är wokad med chili, röd lök, grön broccoli, paprika, vitkål, vitlök och lite ostronsås samt holy basilika.</dd>

                    <dt>Phad preo waan gai</dt>
                    <dd>Wokad kycklingfilé med paprika, zucchini, röd lök, ostronsås, cashewnötter och vitkål.</dd>

                    <dt>Kaeng ped gai</dt>
                    <dd>Gryta gjord på kycklingfilé med strimlade bambuskott, röd currypasta, kokosmjölk och sweet basilika.</dd>

                    <dt>Krabi special</dt>
                    <dd>Sauterad kycklingfilé med röd curry, paprika, färska champinjoner, röd lök, morötter, holy basilika, strimlad ingefära och lite chili..</dd>

                    <dt>Gai phad king</dt>
                    <dd>Wokad kycklingfilé med strimlad ingefära, vitlök, ostronsås, citron, färska champinjoner, grön broccoli, purjolök och lite chili.</dd>

                    <dt>Ploy Special</dt>
                    <dd>Kycklingfilé serveras med jasminris, gul curry, purjolök, färska champinjoner, vitkål, röd lök, strimlad ingefära och lite chili.</dd>

                    <dt>Phad gai med ma maung</dt>
                    <dd>Kycklingfilé med röd lök, cashewnötter, vitkål, lite ostronsås, paprika, morötter, chilipasta och purjolök.</dd>

                    <dt>Gai Chup Paeng Tod på spett</dt>
                    <dd>Kycklingspett serveras med citronklyfta, jasminris eller stekta äggnudlar och sweetchilisås (jordnötssås finns).</dd>

                    <dt>Gai Chup Paeng Tod</dt>
                    <dd>Dubbelpanerad kycklingfilé som friteras långsamt, serveras med citronklyfta, jasminris eller stekta äggnudlar och sweetchilisås (jordnötssås finns).</dd>
                </dl>
                
            </div>
            
            <div className="beefPrawnsVeg">
               <div id="beefPrawnsVegContainer">
                    <div className="beef">

                        <h2>Biffrätter</h2>
        
                        <dl>
                            <dt>Kaeng paneng, nga Eller gai</dt>
                            <dd>Gryta gjord på stekt biff eller kycklingfilé med panang currypasta, chili, grön broccoli, kokosmjölk samt paprika och toppad med sweet basilika.</dd>
        
                            <dt>Phad mama, nga</dt>
                            <dd>Wokad stekt biff med stekta äggnudlar, paprika, ostronsås, röd lök, ägg, färska champinjoner och chili.</dd>
        
                            <dt>Phad prik thai dam</dt>
                            <dd>Wokad biff med svartpeppar, röd lök, paprika, ostronsås, lite vitlök och färska champinjoner.</dd>
                        </dl>
        
                    </div>
        
                    <div className="prawns">
        
                        <h2>Räkrätter</h2>
                        <dl>
                            <dt>Phad thai, goong</dt>
                            <dd>Stekta risnudlar som wokas med scampi eller kyckling, ägg, groddar, ostronsås, krossade jordnötter, purjolök, chili och lite citron.</dd>
        
                            <dt>Kau phad, goong</dt>
                            <dd>Wokade räkor eller kycklingfilé, ostronsås, stekt ris med vitpeppar, vitlök, röd lök, ägg, morötter, purjolök, chili och lite citron.</dd>
        
                            <dt>Gung Chup Paeng Tod</dt>
                            <dd>Friterade stora räkor, citronklyfta, jasminris eller stekta äggnudlar och sweetchilisås (jordnötssås finns).</dd>
                        </dl>    
        
                    </div>
        
                    <div className="veg">
                        <h2>Vegetariska rätter</h2>
                        <dl>
                            <dt>Hemlagade vårrullar</dt>
                            <dd>Vårrullarna serveras med jasminris eller stekta äggnudlar, sweetchilisås.</dd>
        
                            <dt>Phad pak tofu</dt>
                            <dd>Tofu som wokas med röd lök, morötter, vitkål, färska champinjoner, cashewnötter, vattenkastanjer och färsk paprika.</dd>
                        </dl>
                </div>
               </div>
                
            </div>
            
        
            </div>

    </section> 
        );
    }
}

export default Menu;