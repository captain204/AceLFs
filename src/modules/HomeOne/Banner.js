import { useState } from "react";
import Image from "next/legacy/image";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import Link from "next/link";

export default function Banner() {
  const [state, setState] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div className="it-hero-2-area it-hero-2-bg fix p-relative">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vIZAwbMDw2Q"
        onClose={() => {
          openModal();
        }}
      />
      <div className="it-hero-2-shape-4">
        <Image src="/img/hero/shape-2-7.png" width={501} height={333} alt="" />
      </div>
      <div className="it-hero-2-shape-5 d-xl-block">
        <Image src="/img/hero/shape-2-3.png" width={113} height={42} alt="" />
      </div>
      <div className="it-hero-2-shape-6 d-none d-xl-block">
        <Image src="/img/hero/shape-2-2.png" width={77} height={85} alt="" />
      </div>
      <div className="it-hero-2-shape-7 d-xl-block">
        <Image src="/img/hero/shape-2-1.png" width={21} height={20} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="it-hero-2-content">
              <h1 className="it-hero-2-title">
                Welcome to
                <span className="p-relative"> ACEDHARS</span>
              </h1>
              <div className="it-hero-2-text">
                <p>
                  African Centre of Excellence for Drug Research, Herbal
                  Medicine Development and Regulatory Science
                </p>
                <div className="it-hero-2-btn-box d-flex align-items-center">
                  <Link className="it-btn" href="/about-us">
                    <span>
                      About Us
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1.24023L16 7.24023L11 13.2402"
                          stroke="currentcolor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 7.24023H16"
                          stroke="currentcolor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                  <div className="it-hero-2-play">
                    <button
                      className="popup-video"
                      onClick={() => {
                        openModal();
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </button>
                    <span>Watch Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="it-hero-2-thumb-box p-relative">
              <div className="it-hero-2-thumb p-relative">
                <Image
                  src="/img/hero/slider-1.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="it-hero-2-shape-1 d-none d-xl-block">
                  <Image
                    src="/img/hero/shape-2-6.png"
                    width={637}
                    height={637}
                    alt=""
                  />
                </div>
                <div className="it-hero-2-shape-2 d-none d-xl-block">
                  <Image
                    src="/img/hero/shape-2-4.png"
                    width={127}
                    height={95}
                    alt=""
                  />
                </div>
                <div className="it-hero-2-shape-3 d-none d-xl-block">
                  <Image
                    src="/img/hero/shape-2-5.png"
                    width={103}
                    height={51}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
