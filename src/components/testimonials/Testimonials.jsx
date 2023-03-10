import "./testimonials.scss";

import Pic1 from "../../img/person_1.jpg";
import Pic2 from "../../img/person_2.jpg";
import Pic3 from "../../img/person_3.jpg";
import Pic4 from "../../img/person_4.jpg";

const Testimonials = () => {
  const Images = [
    {
      id: 1,
      img: Pic1,
      name: " adiaba",
    },
    {
      id: 2,
      img: Pic2,
      name: "sabbath,",
    },
    {
      id: 3,
      img: Pic3,
      name: "michael",
    },
    {
      id: 4,
      img: Pic4,
      name: "jacob",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h1>Client Testimonial</h1>
        <div className="items">
          {Images.map((item) => (
            <div className="item">
              <img src={item.img} alt="" />

              <div className="text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit quos ducimus, veritatis, eaque iste cum officiis
                  officia, incidunt cupiditate optio possimus animi minima
                  dolores mollitia est aperiam repudiandae quaerat voluptas?
                </p>
                <span>{`${item.name} ,koforidua`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
