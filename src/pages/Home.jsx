import React from 'react';

class Home extends React.Component {
    render(){
        return (<main>

    <section class="homeSection">
        
        <div id="homeContainer">
            <div class="thaiVagnen">
                <h2>Thai-vagnen</h2>
                <p>
                    Välkommen till oss på Thai vagnen ersboda och njut av ren odlad thai mat
                </p>
            </div>
           
            <div class="farskaVaror">
                <h2>Färska varor</h2>
                <p>
                    Framför allt är vi mest kända och stolta över våra hemlagade thai rätter som tillagas med högkvalitativa och endast färska råvaror
                </p>
            </div>
            
            
            <div class = "ersboda">
                <h2>Ersboda</h2>
                <p>
                    Vi håller till på Formvägen 8, vid Elon och  Flügger färg. Nära Shopping och butiker!
                </p>
            </div> 
        </div>

        <button class="jsButton"><p>Show message</p></button>

        <button class= "fade"><p>Fade</p></button>
        
        <div class ="fadeTextblock1">
            <p>Textblock 1.</p>
        </div>

        <div class ="fadeTextblock2" >
            <p>Textblock 2.</p>
        </div>
        
    </section>

    <section class="banner2">
        
        <div id="timeContainer">
            <div class="oppettider">
                <h2>ÖPPETTIDER</h2>
                <dl>
                    <dt>Måndag</dt>
                    <dd>10:30-19:00</dd>

                    <dt>Tisdag</dt>
                    <dd>10:30-19:00</dd>

                    <dt>Onsdag</dt>
                    <dd>10:30-19:00</dd>

                    <dt>Torsdag</dt>
                    <dd>10:30-19:00</dd>

                    <dt>Fredag</dt>
                    <dd>10:30-19:00</dd>
                </dl>
            </div>   
            
            <div class="cookimg">
               <img src= "../assets/img/cook.jpg" class = "cook" alt =""/> 
            </div>
            
        </div>
        
    </section>

    <section class="banner3">
        <div id="feedbackContainer">
            <h2>VAD VÅRA KUNDER TYCKER</h2>


            <div class="carousel">
                <button class="carouselButtonLeft">
                   <img src="../assets/img/left.svg" alt=""/> 
                </button>

                <div class="carouselTrackContainer">
                    <ul class="carouselTrack">
                        <li class="carouselSlide currentSlide">
                           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Excepturi reiciendis dicta quo assumenda repudiandae vero 
                            maxime sequi molestias officiis ipsam, illum, similique quasi. 
                            Optio libero numquam voluptas laborum nisi molestias.</p>
                            <h3>Gunnar gunnarsson</h3>
                        </li>
                        <li class="carouselSlide">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                             Excepturi reiciendis dicta quo assumenda repudiandae vero 
                             maxime sequi molestias officiis ipsam, illum, similique quasi. 
                             Optio libero numquam voluptas laborum nisi molestias.</p>
                             <h3>Isac Isacsson</h3>
                         </li>
                         <li class="carouselSlide">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                             Excepturi reiciendis dicta quo assumenda repudiandae vero 
                             maxime sequi molestias officiis ipsam, illum, similique quasi. 
                             Optio libero numquam voluptas laborum nisi molestias.</p>
                             <h3>Robert robbertsson</h3>
                         </li>
                         <li class="carouselSlide">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                             Excepturi reiciendis dicta quo assumenda repudiandae vero 
                             maxime sequi molestias officiis ipsam, illum, similique quasi. 
                             Optio libero numquam voluptas laborum nisi molestias.</p>
                             <h3>Fredrik fredriksson</h3>
                         </li>
                    </ul>
                </div>

                <button class="carouselButtonRight">
                <img src="../assets/img/right.svg" alt=""/>
                </button>
            </div>

            <div class="carouselNav">
                <button class="carouselIndicator currentSlide"></button>
                <button class="carouselIndicator"></button>
                <button class="carouselIndicator"></button>
                <button class="carouselIndicator"></button>
            </div>

            <div class="flerRecensioner">

                <a href ="https://www.google.com/search?sa=X&sca_esv=6c62cb884638f89e&tbm=lcl&sxsrf=AHTn8zrTNfAzHoYxe8VLHOIoCIho0JKafQ:1739188856641&q=Thai-vagnen+Ersboda+Recensioner&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MjCzNDA3Nja0tDQ2MDEzNTc02MDI-IpRPiQjMVO3LDE9LzVPwbWoOCk_JVEhKDU5Na84Mz8vtWgRKyEVAH87K6NeAAAA&rldimm=2069073319930465710&hl=sv-SE&ved=2ahUKEwiJ-Pyvh7mLAxWIFxAIHfTQDmYQ9fQKegQIQxAF&biw=1710&bih=955&dpr=2#lkt=LocalPoiReviews">
                    SE FLER RECENSIONER HÄR!
                </a>

            </div>

        </div>
    </section>
    
    </main>);}
}

export default Home;