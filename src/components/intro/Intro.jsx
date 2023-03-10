import "./intro.scss";
import Background from "../../img/image_1.jpg";

const Intro = () => {
  return (
    <div className="intro" id="home">
      <img src={Background} alt="" />
      <div className="introDesc">
        <h2 className="introIntro">Hello, I'm</h2>
        <h1 className="introName">Mc Relic</h1>
        <div className="introTitle">
          <div className="introTitleWrapper">
            <div className="introTitleItem">Musician</div>
            <div className="introTitleItem">Painter</div>
            <div className="introTitleItem">Graphic Designer</div>
            <div className="introTitleItem">Artist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
