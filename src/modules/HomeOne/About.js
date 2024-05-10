import Image from "next/legacy/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="it-about" className="it-about-area p-relative pt-185 pb-185">
      <div className="it-about-shape-4 d-none d-md-block">
        <Image src="/img/about/shape-1-4.png" width={63} height={63} alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-thumb-box p-relative">
              <div className="it-about-thumb-1 d-none d-xl-block">
                <Image
                  src="/img/about/team-ace.jpg"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
              <div className="it-about-main-thumb text-xl-end text-center">
                <Image
                  src="/img/about/ACEDARS-ABOUT.jpg"
                  width={350}
                  height={350}
                  alt=""
                />
              </div>
              <div className="it-about-shape-1 d-none d-md-block">
                <Image
                  src="/img/about/shape-1-1.png"
                  width={190}
                  height={186}
                  alt=""
                />
              </div>
              <div className="it-about-shape-2 d-none d-md-block">
                <Image
                  src="/img/about/shape-1-2.png"
                  width={85}
                  height={24}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-about-right-box">
              <div className="it-about-title-box mb-20">
                <span className="it-section-subtitle">About Us</span>
                <h4 className="it-section-title">
                  African Centre of Excellence for Drug Research,
                  <span className="p-relative z-index">
                    Herbal Medicine Development
                    <svg
                      className="title-shape-2"
                      width="168"
                      height="65"
                      viewBox="0 0 168 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332"
                        stroke="#0AB99D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br /> and Regulatory Science
                </h4>
              </div>
              <div className="it-about-text pb-10">
                <p>
                  According to World Health Organization (WHO), 80 % of the
                  developing world’s population depends on traditional medicine
                  for primary healthcare. Regulatory agencies and consumer
                  groups are therefore increasingly demanding for stringent
                  quality control measures for global positioning of herbal
                  products. Some of the identified challenges regarding herbal
                  medicine are centered around standardization, safety,
                  adulteration and irrational use. This is largely due to a
                  dearth of skilled manpower in their production and regulation.
                  The African Center of Excellence for Drug Research, Herbal
                  Medicines Development and Regulatory Science (ACEDHARS) was
                  established to build up manpower on quality assurance,
                  standardization of dosages, reproducibility of herbal
                  preparations, drug development, drug repurposing and safety
                  monitoring of drugs in West and Central African region. The
                  researches in the Center are focused on the development and
                  evaluation of herbal formulations into standard products for
                  management of non-communicable diseases (NCDs). The Center is
                  poised to produce a compendium of herbal formulations for the
                  treatment of NCDs in sub-Saharan Africa.
                </p>
              </div>
              <Link className="it-btn" href="/about-us">
                <span>
                  Learn More
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
      </div>
    </div>
  );
}
