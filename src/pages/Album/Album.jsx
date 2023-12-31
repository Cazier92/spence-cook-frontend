import AlbumCarousel from '../../components/AlbumCarousel/AlbumCarousel';

import './Album.css'

const Album = () => {



  return ( 
    <main id='album-main'>

      <div id='embed-div'>
        <div id='embed-title'>
          <h1>Rearview</h1>
          <p>Released in November 2022</p>
        </div>
        <div id='embed-container'>
          <iframe id='embeddedXS' src="https://open.spotify.com/embed/album/0oynh8lZzhbRoI01aR1hCv?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe id='embeddedXL' src="https://open.spotify.com/embed/album/0oynh8lZzhbRoI01aR1hCv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div id='musicLink-container-a'>
          <a href="https://open.spotify.com/album/0oynh8lZzhbRoI01aR1hCv">
            <img className='musicLink-a' src="./Spotify.svg" alt="" />
          </a>
          <a href="https://www.pandora.com/artist/spence-cook/rearview/ALbbbw7dl5n6qqP">
            <img className='musicLink-a' src="./pandora.svg" alt="" />
          </a>
          <a href="https://www.amazon.com/dp/B0BNL23527/ref=sr_1_4?keywords=spence+cook+rearview&qid=1670773727&sprefix=Spence+Cook+%2Caps%2C69&sr=8-4">
            <img className='musicLink-a' src="./amazonMusic.svg" alt="" />
          </a>
          <a href="https://www.iheart.com/artist/spence-cook-39264727/">
            <img className='musicLink-a' src="./iHeart.svg" alt="" />
          </a>
        </div>
      </div>

      <div id='about-album-container'>
        <h1>Behind the music...</h1>
        {/* <div id='about-album-body'></div> */}
        <div id='album-carousel-container'>
          <AlbumCarousel />
        </div>
        <div id='album-info'>
          <p>In early 2020, Spence resolved to create his debut album. Then the pandemic struck, prompting deep contemplation during quarantine.
            <br />
          "Rearview" delves into midlife, where you ponder the years passed, grasp aging's reality, and cherish the preciousness of time, assessing past, present, and future endeavors.</p>
        </div>
      </div>

    </ main>
  );
}

export default Album;