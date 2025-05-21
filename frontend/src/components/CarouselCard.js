import "../css/carouselcard.css";

export default function CarouselCard() {
  return (
    <section
      className="testimonials"
      style={{ padding: "5rem 0", backgroundColor: "white" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Student Success Stories</h2>
          <p>
            Hear from students who found their ideal university path with
            UniCracker
          </p>
        </div>
        <div className="wrapper">
          <i id="left" className="fa-solid fa-angle-left"></i>
          <ul className="carousel">
            <li className="card" style={{ textAlign: "center" }}>
              <div className="img">
                <img
                  src="/images/male_1.png"
                  alt="male_1.png"
                  id="testimonial-img-1"
                />
              </div>
              <h3>Kasun Perera</h3>
              <h5>Physical Science Stream</h5>
              <p style={{ fontStyle: "italic" }}>
                "UniCracker helped me find the perfect engineering program that
                matched my Z-score. I'm now studying at University of Moratuwa!"
              </p>
            </li>
            <li className="card" style={{ textAlign: "center" }}>
              <div className="img">
                <img
                  src="/images/female_1.png"
                  alt="female_1.png"
                  id="testimonial-img-2"
                />
              </div>
              <h3>Sharvani Sivapalan</h3>
              <h5>Bio-Technology Stream</h5>
              <p style={{ fontStyle: "italic" }}>
                "The course ordering feature saved me so much time and stress
                during university applications. Highly recommend!"
              </p>
            </li>
            <li className="card" style={{ textAlign: "center" }}>
              <div className="img">
                <img
                  src="/images/male_2.png"
                  alt="male_2.png"
                  id="testimonial-img-3"
                />
              </div>
              <h3>Ahamed Haseeb</h3>
              <h5>Commerce Stream</h5>
              <p style={{ fontStyle: "italic" }}>
                "Thanks to UniCracker, I discovered programs I didn't even know
                existed that perfectly matched my interests and Z-score."
              </p>
            </li>
          </ul>
          <i id="right" className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </section>
  );
}
