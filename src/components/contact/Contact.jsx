import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Get In Touch</h1>
      <div className="container">
        <div className="left">
          <h3>Get In Touch</h3>
          <form action="">
            <input type="text" placeholder="Your name..." />
            <input type="email" placeholder="Your email..." />
            <input type="text" placeholder="Your number..." />
            <textarea placeholder="Write a message"></textarea>
          </form>
        </div>
        <div className="right">
          <h3>My Contact Details</h3>
          <div className="items">
            <div className="item">
              <h4>Address</h4>
              <span>koforidua, Anlo Town</span>
            </div>
            <div className="item">
              <h4>Phone</h4>
              <span>+233548323031</span>
            </div>
            <div className="item">
              <h4>Email</h4>
              <span>adiabajacob9@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
