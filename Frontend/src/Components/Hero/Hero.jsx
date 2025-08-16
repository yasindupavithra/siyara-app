import React from 'react'
import { HomeContainer, RectangularBlock, Shop, Eyeing, Shoppee, New, HomeDecor, BlueBox, TopBrand, TwoBigImages, ImageDiv, Costumers, NeedHelpBuying  } from './HeroCSS'
import ImageSlider from '../ImageSlider/ImageSlider'
import { SliderData } from '../ImageSlider/SliderData';

const Hero = () => {
  return (
    <>
        <HomeContainer>
            <div className="belowNavbar">
                {/* SideImage REMOVE කරලා Slider එක තනියට තියනවා */}
                <ImageSlider slides={SliderData}/>
            </div>

            <RectangularBlock>
              <img src="https://i.postimg.cc/JnxF0gxp/Screenshot-7-8-2025-232948-www-singersl-com.jpg" alt={"T&C"}/>
            </RectangularBlock>

            <h1>Shop By Room</h1>
            <Shop>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1_2x_31032022.jpg" alt={"Living"} />
                    <div className="title">Living Room</div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2_2x_31032022.jpg" alt={"WFH"} />
                    <div className="title">Work From Home</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3_2x_31032022.jpg" alt={"Bedroom"} />
                    <div className="title">Bedroom</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4_2x_31032022.jpg" alt={"KidsRoom"} />
                    <div className="title">Kids Room</div>
                </div>
            </Shop>

            {/* --- Rest of your sections same as before --- */}
            {/* What's Everyone Eyeing */}
            <h1>What's Everyone Eyeing</h1>
            <Eyeing>
                <div>
                    <img src="https://i.postimg.cc/ydbKzH6h/IMG-20250806-WA0188.jpg" alt={"Wardrobes"} className="sideOne"/>
                </div>
                <div>
                    <img src="https://i.postimg.cc/x1zcx6RF/IMG-20250806-WA0198.jpg" alt={"WallArt"} className="sideTwo"/>
                </div>
                <div className="quadra">
                    <div>
                        <img src="https://i.postimg.cc/bvYdyqP4/IMG-20250806-WA0177.jpg" alt={"ShoeRack"} className="quadraImage"/> 
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/bvvb6xZG/IMG-20250806-WA0147.jpg" alt={"KingSizeBed"} className="quadraImage"/> 
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/jStScRDC/IMG-20250806-WA0141.jpg" alt={"SeaterSofa"} className="quadraImage"/>
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/pXqLsgzZ/IMG-20250806-WA0137.jpg" alt={"HangingLights"} className="quadraImage"/>
                    </div>
                </div>
            </Eyeing>

            {/* --- Other sections unchanged (New, BlueBox, ImageDiv, Costumers, NeedHelpBuying) --- */}

        </HomeContainer>
    </>
  )
}

export default Hero
