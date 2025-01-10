'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

export default function ImageGallery() {
  return(
    <div>
      <Splide hasTrack={ false } aria-label="Image Gallery">
        <div className="custom-wrapper">
          <button className="splide__toggle" type="button">
            <span className="splide__toggle__play">Play</span>
            <span className="splide__toggle__pause">Pause</span>
          </button>

          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>

          <SplideTrack>
            <SplideSlide>.
              <Image src='/MTG1.png' alt="mtg foundations" width={100} height={100}/>
            </SplideSlide>
            <SplideSlide>.
              <Image src='/MTG2.PNG' alt="mtg" width={100} height={100}/>
            </SplideSlide>
            <SplideSlide>.
              <Image src='/yugioh1.png' alt="25th bonanza" width={100} height={100}/>
            </SplideSlide>
            <SplideSlide>.
              <Image src='/yugioh2.png' alt="yugioh" width={100} height={100}/>
            </SplideSlide>
          </SplideTrack>
        </div>
      </Splide>
    </div>
  )
}
