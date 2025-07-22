import React, { useEffect, useRef } from "react";
import "./carouselcard.css";

export default function CarouselCard() {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const timeoutId = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const arrowBtns = wrapper.querySelectorAll("i");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const carouselChildren = [...carousel.children];

    let isDragging = false;
    let startX;
    let startScrollLeft;

    const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // duplicate cards for infinite scroll
    carouselChildren
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselChildren.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Arrow button click
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
      timeoutId.current = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
      }, 2500);
    };

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      clearTimeout(timeoutId.current);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () =>
      clearTimeout(timeoutId.current)
    );
    wrapper.addEventListener("mouseleave", autoPlay);

    autoPlay(); // Start autoplay

    return () => {
      clearTimeout(timeoutId.current);
      // Cleanup
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <section className="testimonials" style={{ padding: "5rem 0" }}>
      <div className="container">
        <div className="section-title">
          <h2>Student Success Stories</h2>
          <p>
            See how UniCracker helped Sri Lankan A/L students unlock university
            opportunities with confidence, clarity, and zero confusion.
          </p>
        </div>
        <div className="wrapper" ref={wrapperRef}>
          <i id="left" className="fa-solid fa-angle-left"></i>
          <ul className="carousel" ref={carouselRef}>
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
            <li className="card" style={{ textAlign: "center" }}>
              <div className="img">
                <img
                  src="/images/female_2.png"
                  alt="female_2.png"
                  id="testimonial-img-4"
                />
              </div>
              <h3>Yalini Tharmarajah</h3>
              <h5>Bio Science Stream</h5>
              <p style={{ fontStyle: "italic" }}>
                "Navigating through university options was easy thanks to this
                platform. I felt more confident in my decisions!"
              </p>
            </li>
            <li className="card" style={{ textAlign: "center" }}>
              <div className="img">
                <img
                  src="/images/male_3.png"
                  alt="male_3.png"
                  id="testimonial-img-5"
                />
              </div>
              <h3>Michael Fernando</h3>
              <h5>Engineering Technology Stream</h5>
              <p style={{ fontStyle: "italic" }}>
                "This tool helped me stay organized and on track throughout the
                application process. A real game-changer!"
              </p>
            </li>
            <li className="card" style={{ textAlign: "center" }}>
              <div className="img">
                <img
                  src="/images/female_3.png"
                  alt="female_3.png"
                  id="testimonial-img-6"
                />
              </div>
              <h3>Nimi Perera</h3>
              <h5>Arts Stream</h5>
              <p style={{ fontStyle: "italic" }}>
                "Thanks to the intuitive design and features, I managed
                everything in one place without any hassle."
              </p>
            </li>
          </ul>
          <i id="right" className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </section>
  );
}
