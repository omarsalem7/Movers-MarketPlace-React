import React from 'react';
import './home.css';
import homeImages from '../assets/imagePaths';
import Partner from '../assets/assetsHome/partner.png';
import FreeShippingPana from '../assets/assetsHome/Free-shipping-pana.png';
import feelFree from '../assets/assetsHome/feell-free.png';

const Home = ({ nextStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      {' '}
      <nav className="nav">
        <span className="nav__logo">
          <img src={homeImages.logo} alt="logo" />
        </span>
        <ul className="nav__list">
          <li className="nav__list__item">
            <a>Home</a>
          </li>
          <li className="nav__list__item">
            <a onClick={Continue}>Services</a>
          </li>
          <li className="nav__list__item">
            <a>About Us</a>
          </li>
          <li className="nav__list__item">
            <a>Contact Us</a>
          </li>
        </ul>
        <div className="nav__icons">
          <span>
            <img src={homeImages.langLogo} />
          </span>
          <span>
            <img className="nav__icons__2" src={homeImages.humbergerIcon} />
          </span>
          <span></span>
        </div>
      </nav>
      <header className="header">
        <div className="header__content">
          <h1>Get Your Stuff Moved Out</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{' '}
          </p>
        </div>
        <form className="header__form">
          <label>From</label>
          <input
            className="header__form__input icon-location"
            placeholder="1236 Mohamed ALi St, Faysal, Giza, Egypt"
            type="text"
          />
          <label>to</label>
          <input
            className="header__form__input icon-location"
            placeholder="1236 Mohamed ALi St, Faysal, Giza, Egypt"
            type="text"
          />
          <label>Date</label>
          <input className="header__form__input icon-date" type="date" />
          <button className="header__form__btn primary-btn" type="submit">
            Get Prices & Compare
          </button>
        </form>
      </header>
      <section className="over-boxes">
        <div className="over-boxes__item">
          <div className="over-boxes__item__icon">
            {' '}
            <img src={homeImages.boxTruck1} alt="box-truck1" />
          </div>
          <h3 className="over-boxes__item__title">1M+ Moves</h3>
          <span>Collectively by our partners</span>
        </div>
        <div className="over-boxes__item">
          <div className="over-boxes__item__icon">
            {' '}
            <img src={homeImages.boxTruck2} alt="box-truck2" />
          </div>
          <h3 className="over-boxes__item__title">200+ Trucks</h3>
          <span>Running throughout U.A.E</span>
        </div>
        <div className="over-boxes__item">
          <div className="over-boxes__item__icon">
            <img src={homeImages.boxPlane} alt="box-plane" />
          </div>
          <h3 className="over-boxes__item__title">4 Planes</h3>
          <span>for the global distribution</span>
        </div>
        <div className="over-boxes__item">
          <div className="over-boxes__item__icon">
            {' '}
            <img src={homeImages.boxStar} alt="box-star" />
          </div>
          <h3 className="over-boxes__item__title">4.9 Start Reviews</h3>
          <span>On Google and Apple play</span>
        </div>
        <div className="over-boxes__item">
          <div className="over-boxes__item__icon">
            <img src={homeImages.boxDiscount} alt="box-discount" />
          </div>
          <h3 className="over-boxes__item__title">10 Partners</h3>
          <span>To get you the best deal</span>
        </div>
        <div className="over-boxes__item">
          <div className="over-boxes__item__icon">
            <img
              src={require('../assets/assetsHome/box-call.svg')}
              alt="box-call"
            />
          </div>
          <h3 className="over-boxes__item__title">Customer Service</h3>
          <span>Helping you 24/7</span>
        </div>
      </section>
      <main>
        <h2>Exact Price, No Surprise</h2>
        <hr className="hr-line" width="50px" />
        <p className="main__description">
          It’s simple: Just enter your move details, compare prices and reviews,
          choose a verified mover, and book online. We instantly show exact
          prices based on how much stuff you have—no ballpark estimates or
          hourly rates. In short, you’re in control of your move.
        </p>
        <div className="main__boxs">
          <div className="main__boxs__item">
            <img src={homeImages.mainPlan} />
            <h3>1. Plan</h3>
            <p>
              Create your inventory list using our easy planner. You can make
              changes anytime and see exactly how much it will cost to move each
              item.
            </p>
          </div>
          <div className="main__boxs__item">
            <img src={homeImages.mainCompare} alt="compare prices" />
            <h3>2. Compare</h3>
            <p>
              Create your inventory list using our easy planner. You can make
              changes anytime and see exactly how much it will cost to move each
              item.
            </p>
          </div>
          <div className="main__boxs__item">
            <img src={homeImages.mainCalender} alt="calender" />
            <h3>3. Book</h3>
            <p>
              Create your inventory list using our easy planner. You can make
              changes anytime and see exactly how much it will cost to move each
              item.
            </p>
          </div>
          <div className="main__boxs__item">
            <img src={homeImages.mainDeliver} alt="deliver" />
            <h3>4. Move</h3>
            <p>
              Create your inventory list using our easy planner. You can make
              changes anytime and see exactly how much it will cost to move each
              item.
            </p>
          </div>
        </div>
        <div className="main-btn">
          <button className="primary-btn">Read More</button>
        </div>
      </main>
      <section className="partner">
        <div className="partner__title">
          <h2>Companies work with us</h2>
          <hr width="50px" className="hr-line" />
        </div>
        <div className="partner__sections">
          <div className="partner__sections__one">
            <h4>
              The companies work with us have been saying what we do and how we
              do it!
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="partner__sections__two">
            <img src={Partner} alt="partner" draggable="false" />
          </div>
        </div>

        <ul className="partner__logos">
          <li>
            <img src={homeImages.partnerLogo} />
          </li>
          <li>
            <img src={homeImages.partnerLogo2} />
          </li>
          <li>
            <img src={homeImages.partnerLogo3} alt="partner logo3" />
          </li>
          <li>
            <img src={homeImages.partnerLogo4} alt="partnerLogo4" />
          </li>
          <li>
            <img src={homeImages.partnerLogo5} alt="partner logo 5" />
          </li>
          <li>
            <img src={homeImages.partnerLogo3} alt="partner logo3" />
          </li>
        </ul>
      </section>
      <section className="quotes-container">
        <div className="quotes-title">
          <h2>Moving Quotes For All Your Moving Needs</h2>
          <hr width="50px" className="hr-line" />
        </div>
        <div className="quotes">
          <div className="quotes__quote">
            <div className="quotes__quote__icon">
              <img src={homeImages.quote1} alt="quotes" />
            </div>
            <div className="quotes__quote__content">
              <h3>Moving Serivces</h3>
              <p>
                Planning an interstate move? We've got hundreds of movers that
                can help at the best prices.
              </p>
            </div>
          </div>
          <div className="quotes__quote">
            <div className="quotes__quote__icon">
              <img src={homeImages.quote2} alt="quotes" />
            </div>
            <div className="quotes__quote__content">
              <h3>Moving Serivces</h3>
              <p>
                Planning an interstate move? We've got hundreds of movers that
                can help at the best prices.
              </p>
            </div>
          </div>
          <div className="quotes__quote">
            <div className="quotes__quote__icon">
              <img src={homeImages.quote3} alt="quotes" />
            </div>
            <div className="quotes__quote__content">
              <h3>Moving Serivces</h3>
              <p>
                Planning an interstate move? We've got hundreds of movers that
                can help at the best prices.
              </p>
            </div>
          </div>
          <div className="quotes__quote">
            <div className="quotes__quote__icon">
              <img src={homeImages.quote4} alt="quotes" />
            </div>
            <div className="quotes__quote__content">
              <h3>Moving Serivces</h3>
              <p>
                Planning an interstate move? We've got hundreds of movers that
                can help at the best prices.
              </p>
            </div>
          </div>
        </div>
        <div className="quotes-btn">
          <button className="primary-btn" type="submit">
            Get Prices, Review Movers, & Book Online
          </button>
        </div>
      </section>
      <section className="refer">
        <div>
          <div className="refer__title">
            <h3>Moving Quotes For All Your Moving Needs</h3>
            <hr width="50px" className="hr-line" />
          </div>
          <p>
            You and your friend get $20 when they move! Help spread the word
            that moving is easy, safe, and convenient through Unpakt.
          </p>
          <div className="refer__btn">
            <button className="primary-btn">Refer to a friends</button>
          </div>
        </div>
        <div>
          <img src={FreeShippingPana} alt="free shipping car" />
        </div>
      </section>
      <div className="who">
        <img src={feelFree} alt="feel free shipping" />
      </div>
      <footer>
        <div className="footer-company">
          <h3>Market Place</h3>
          <p>
            The best way to compare moving quotes and book a licensed mover
            online instantly. Quotes and Prices guaranteed! Unpakt is US based
            and serves nationwide customers.
          </p>
        </div>
        <div>
          <h4>About Us</h4>
          <ul>
            <li>What is Marketplace?</li>
            <li>What is included?</li>
            <li>How it works?</li>
            <li>Press</li>
            <li>Agreement</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4>Partnerships</h4>
          <ul>
            <li>Become a partner</li>
            <li>For service providers</li>
            <li>Corporate Relocation</li>
            <li>For Real Estate Agents</li>
          </ul>

          <h4>Storage Services</h4>
          <ul>
            <li>Warehouse</li>
            <li>Self Storage</li>
          </ul>
        </div>

        <div>
          <h4>Moving Services</h4>
          <ul>
            <li>Local Moving</li>
            <li>Interstate Moving</li>
            <li>Local Moving Companies</li>
            <li>Moving Truck Rental</li>
          </ul>

          <h4>Customer Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Self Storage</li>
          </ul>
        </div>

        <div>
          <h4>Marketplace Blog</h4>
          <ul>
            <li>Moving Tips</li>
            <li>Moving Costs</li>
            <li>Before Moving</li>
            <li>Deals</li>
          </ul>

          <ul>
            <li>
              <img src={homeImages.facebook} alt="Facebook icon" />
            </li>
            <li>
              <img src={homeImages.twitter} alt="twitter icon" />
            </li>
            <li>
              <img src={homeImages.youtube} alt="youtube icon" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
