import BannerImage from "../../assets/images/hero-img.png.webp"

function Banner() {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1>We provide best IT solution</h1>
            <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
            <button>Our Services</button>
          </div>
          <div className="banner-image">
            <img src={BannerImage} alt="banner image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner


