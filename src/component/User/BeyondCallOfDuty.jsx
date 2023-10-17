import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const BeyondCallOfDuty = () => {
  return (
    <div>
   <Header/>
        {/* carousel start */}
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            <div class="carousel-inner ">
              <div class="carousel-item active">
                <img src="/assets/image/helppolicee.jpg" class="d-block h-25 w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/helppolicee.jpg" class="d-block h-25 w-100" alt="Home" />
              </div>
              <div class="carousel-item">
                <img src="/assets/Image/helppolicee.jpg" class="d-block h-25 w-100" alt="Home" />
              </div>
            
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* carousel end */}


<div>
          <div class="card m-5" >
  <div class="row g-0">
    <div class="col-md-6">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iYBbm8mzeuU?si=Fn-w-JSMa4bLa8br" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Pune Police</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tenetur qui dicta in sapiente autem vero aspernatur repudiandae animi debitis modi ipsam quam aliquam magni consequuntur consectetur tempore, nostrum vitae.</p>
      </div>
    </div>
  </div>
</div>
<div class="card m-5" >
  <div class="row g-0">
   
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Pune Police</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tenetur qui dicta in sapiente autem vero aspernatur repudiandae animi debitis modi ipsam quam aliquam magni consequuntur consectetur tempore, nostrum vitae.</p>
      </div>
    </div>
    <div class="col-md-6">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iYBbm8mzeuU?si=Fn-w-JSMa4bLa8br" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="card m-5" >
  <div class="row g-0">
    <div class="col-md-6">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iYBbm8mzeuU?si=Fn-w-JSMa4bLa8br" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Pune Police</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tenetur qui dicta in sapiente autem vero aspernatur repudiandae animi debitis modi ipsam quam aliquam magni consequuntur consectetur tempore, nostrum vitae.</p>
      </div>
    </div>
  </div>
</div> 
</div>


<div className='mt-3'>
                  {/* carousel start */}
                  <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 50
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/assets/Image/Link.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Pune Police</h5>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/assets/Image/Link.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Pune Police</h5>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/assets/Image/Link.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Pune Police</h5>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/assets/Image/Link.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Pune Police</h5>
      </div>
    </div>
  </div>
</div>
          </Carousel>
          {/* carousel end */}
          </div>

<div>
<div class="card m-5" >
  <div class="row g-0">
  <div class="col-md-6">
  <img src="/assets/Image/policeofficer.png" class="card-img-top mx-auto pt-3" alt="card" />
    </div>
    <div class="col-md-6">
    <div class="card-body">
                  <h3>Dr. Shrikant Dhivare ( IPS )</h3>
                  <h5>Superintendent of Police Pune Railway</h5>
                  {/* <button class='btn btn-link'>Sadrakshanaya Khalanigrahanay</button>
                  <p class="card-text">"Help us make Railways Police Pune (GRP) passenger-friendly and effective. Stay vigilant, report suspicious activities, and together, we can create a safer railway environment."</p>
                  <b>I wish you Bon Voyage on your future journeys! Remember, if you see something, say something ...!!</b> */}
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque quisquam quas cumque rerum illo odio? Repellendus veniam facilis rem aspernatur dicta ea accusantium tenetur ex pariatur. Asperiores, eum ipsa.</p>
               
                </div>
    </div>
    
  </div>
</div>
</div>



<div class="row p-5">
  <div class="col-sm-5 offset-1">
    <div class="card">
    <iframe  src="https://www.facebook.com/punerailwaypolice" title="Facebook video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
      <div class="card-body bgcolorone">
        <h5 class="card-title">Facebook</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/https://www.facebook.com/punerailwaypolice" class="btn btn-primary">Go facebook</a>
      </div>
    </div>
  </div>
  <div class="col-sm-5 ">
    <div class="card ">
    <iframe  src="https://twitter.com/RailwayPune" title="twitter video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
      <div class="card-body bgcolorone">
        <h5 class="card-title">twitter</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/https://twitter.com/RailwayPune" class="btn btn-primary">Go twitter</a>
      </div>
    </div>
  </div>
</div>
   <Footer/>
    </div>
  )
}

export default BeyondCallOfDuty




// import ChatBot from 'react-simple-chatbot';
 
// const steps = [
//     {
//         id: '0',
//         message: 'Hey Geek!',
 
//         // This calls the next id
//         // i.e. id 1 in this case
//         trigger: '1',
//     }, {
//         id: '1',
 
//         // This message appears in
//         // the bot chat bubble
//         message: 'Please write your username',
//         trigger: '2'
//     }, {
//         id: '2',
 
//         // Here we want the user
//         // to enter input
//         user: true,
//         trigger: '3',
//     }, {
//         id: '3',
//         message: " hi {previousValue}, how can I help you?",
//         trigger: 4
//     }, {
//         id: '4',
//         options: [
             
//             // When we need to show a number of
//             // options to choose we create alist
//             // like this
//             { value: 1, label: 'View Courses' },
//             { value: 2, label: 'Read Articles' },
 
//         ],
//         end: true
//     }
// ];
// function BeyondCallOfDuty() {
//     return (
//         <div className="App">
            
//             <ChatBot steps={steps} />
//         </div>
//     );
// }
 
// export default BeyondCallOfDuty;