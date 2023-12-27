import React, { useState, useEffect } from 'react';
import { TaggedContentCard } from 'react-ui-cards';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './Header';
import Footer from './Footer';


const PhotoGallery = () => {
  const [AddAlbumName, setAddAlbumName] = useState([]);

  useEffect(() => {
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/addAlbumName");
        if (response.ok) {
          const data = await response.json();
          setAddAlbumName(data); // Update the state with the fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function when the component mounts
    fetchData();
  }, []);


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
            {AddAlbumName.map((item, index) => (
            <div className='m-1'>
              <TaggedContentCard
                href='https://punerailwaypolice.gov.in/'
                thumbnail={`http://localhost:5000/${item.albumCoverPhoto}`}
                title={item.albumNameInEnglish}
                description={item.createdAt}
                tags={[
                  // 'food',
                  // 'cake',
                  // 'fruits'
                ]}
              />
            </div>
            ))}
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