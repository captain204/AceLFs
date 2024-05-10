import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <div
      className="it-video-area it-video-bg p-relative fix pt-100 pb-95"
      data-background="src/img/video/Acedar-Video-Background.jpeg"
    >
      <Image
        src="/img/video/Acedar-Video-Background.jpeg"
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="89jI80JM1as"
        onClose={() => {
          openModal();
        }}
      />
      <div className="it-video-shape-1 d-none d-lg-block">
        <Image src="/img/video/shape-1-1.png" width={347} height={211} alt="" />
      </div>
      <div className="it-video-shape-2 d-none d-lg-block">
        <Image src="/img/video/shape-1-2.png" width={325} height={238} alt="" />
      </div>
      <div className="it-video-shape-3 d-none d-lg-block">
        <Image src="/img/video/shape-1-3.png" width={41} height={37} alt="" />
      </div>
      <div className="it-video-shape-4 d-none d-lg-block">
        <Image src="/img/video/shape-1-4.png" width={49} height={49} alt="" />
      </div>
      <div className="it-video-shape-5 d-none d-lg-block">
        <Image src="/img/video/shape-1-5.png" width={85} height={24} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
            <div className="it-video-content">
              <span>How To Apply</span>
              <h3 className="it-video-title">
                For More Inquiries Call <br />{" "}
                <a href="tel:+2348023004426">(+234)8023004426</a>
              </h3>
              <div className="it-video-button">
                <Link className="it-btn" href="#">
                  <span>
                    Apply Now
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
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-3 col-sm-3">
            <div className="it-video-play-wrap d-flex justify-content-start justify-content-md-end align-items-center">
              <div className="it-video-play text-center">
                <button
                  className="popup-video play"
                  onClick={() => {
                    openModal();
                  }}
                >
                  <i className="fas fa-play"></i>
                </button>
                <span className="text">watch now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
