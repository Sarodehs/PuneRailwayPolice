import React from 'react'
import { TaggedContentCard } from 'react-ui-cards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './Header';
import Footer from './Footer';


const PhotoGallery = () => {
  return (
<div>
      <div>
        <Header />
        <div>
        <div>

         
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
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/1.png'
                title='पेट्रोल पंप भूमीपूजन समारंभ'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/1.png'
                title='Yoga Day 2019'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/6.png'
                title='World Drugs Day 26th Jun 2019'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail='/assets/Image/Album/7.png'
                title='In Service career development training for police man'
                description='PUNE'
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
          </Carousel>
          {/* carousel end */}
        </div>
   
</div>
        <Footer />

      </div>
    </div>
  )
}

export default PhotoGallery