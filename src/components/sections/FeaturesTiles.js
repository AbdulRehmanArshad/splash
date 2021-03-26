import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
import logo7 from "../../assets/images/logo7.png";
import logo8 from "../../assets/images/logo8.png";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Build up the whole picture",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <Image src={logo6} alt="logo3" width="80%" height="80%" />
                  <h4 className="mt-1 mb-8">LED Bulb 18W</h4>

                  <p className="m-0 text-sm">PKR 250</p>
                  <button type="button" class="btn btn-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <Image src={logo3} alt="logo4" width="80%" height="80%" />
                  <h4 className="mt-1 mb-8">LED Ceiling Light 7W</h4>
                  <p className="m-0 text-sm">PKR 145</p>
                  <button type="button" class="btn btn-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <Image src={logo5} alt="logo5" width="80%" height="80%" />
                  <h4 className="mt-1 mb-8">LED Bulb 7W</h4>
                  <p className="m-0 text-sm">PKR 110</p>
                  <button type="button" class="btn btn-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <Image src={logo4} alt="logo6" width="80%" height="80%" />
                  <h4 className="mt-0 mb-8">LED Ceiling Light 7W</h4>
                  <p className="m-0 text-sm">PKR 145</p>
                  <button type="button" class="btn btn-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <Image src={logo7} alt="logo7" width={120} height={120} />
                  <h4 className="mt-0 mb-8">Colourfull bulb 7W</h4>
                  <p className="m-0 text-sm">PKR 300 </p>
                  <button type="button" class="btn btn-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <Image src={logo8} alt="logo8" width="80%" height="80%" />
                  <h4 className="mt-0 mb-8">Colourfull bulb 12W</h4>
                  <p className="m-0 text-sm">PKR 450 </p>
                  <button type="button" class="btn btn-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
