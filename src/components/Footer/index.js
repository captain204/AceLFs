import Image from "next/legacy/image";
import Link from "next/link";

export default function Footer(props) {
  const { footerLogo, footerClass } = props;
  return (
    <footer>
      <div className="it-footer-area it-footer-bg black-bg relative pt-120 pb-90">
        <Image
          src="/img/footer/"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-1">
                <div className="it-footer-logo pb-25">
                  <Link href="/">
                    <Image
                      src={`/img/logo/${
                        footerLogo ? footerLogo : "acf-logo.png"
                      }`}
                      alt=""
                      width={151}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="it-footer-text pb-5">
                  <p>
                  80% of the developing world relies on herbal medicine, but quality control is lacking. ACEDHARS was created to address this by training experts in West and Central Africa to develop safe and standardized herbal treatments for chronic diseases. They aim to create a comprehensive guide to these herbal medicines for sub-Saharan Africa.
                  </p>
                </div>
                <div className="it-footer-social">
                  <a href="www.facebook.com/acedhars-unilag">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="www.linkedin.com/in/acedhars-unilag">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="www.twitter.com/acedhars-unilag">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-2">
                <h4 className="it-footer-title">Programs</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        Masters Programs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        Masters in Philosophy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        Doctor of Philosophy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-3">
                <h4 className="it-footer-title">Quick Links:</h4>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>Projects
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>News
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>
                        Videos
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-angle-right"></i>privacy &
                        policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
              <div className="it-footer-widget footer-col-4">
                <h4 className="it-footer-title">Gallery</h4>
                <div className="it-footer-gallery-box">
                  <div className="row gx-0">
                    <div className="col-md-6 col-6">
                      <div className="it-footer-thumb mb-10">
                        <Image
                          src="/img/footer/ACEDARS-ABOUT.jpg"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="it-footer-thumb mb-10">
                        <Image
                          src="/img/footer/Acedars-news-2.jpg"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6 mb-10">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/ACEDARS-News-3.png"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/Acedar-Video-Background.jpeg"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/Acedar-Video-Background.jpeg"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="it-footer-thumb">
                        <Image
                          src="/img/footer/ACEDHAR-Gallery.jpeg"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-copyright-text text-center">
                <p>
                  Copyright © 2024 <a href="#">ACEDHARS UNILAG </a> || All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
