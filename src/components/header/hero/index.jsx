import imgHero from "../../../assets/images/image-hero.png";
import imgClock from "../../../assets/images/image-clock.png";
import imgCalculator from "../../../assets/images/image-calculator.png";
import imgBag from "../../../assets/images/image-bag.png";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p>Kết Nối Việc Làm,</p>
        <p>Cơ Hội Mới, </p>
        <p>Cuộc Sống Mới</p>
      </div>
      <div className="hero-right">
        <img src={imgHero} alt="image-hero" width={497} height={497} />
      </div>

      <div className="hero-icons flex justify-center space-x-4 mt-4">

        <img src={imgClock} alt="Clock" className="w-16 h-16" />

        <img src={imgBag} alt="Bag" className="w-16 h-16" />

        <img src={imgCalculator} alt="Calculator" className="w-16 h-16" />

      </div>
    </section>
  );
}
