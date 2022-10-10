import React from "react";
import "../common/assets/bannerStyle.scss";

//components
import CircleBtn from "../core/buttons/CircleBtn";
import DeliveryCard from "../core/DeliveryCard";

//Icons
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";

function HomeBanner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-main">
          {/* Heading of banner */}
          <div className="banner-main-head">
            <h1>Good morning, Parash</h1>
            <p>You can follow all new data here.</p>
          </div>

          <div className="banner-main-btns">
            <div className="btns">
              <CircleBtn
                icon={<DescriptionOutlinedIcon fontSize="small" />}
                bColor="#1c2028"
                color="#1e81d4"
              />
              <h2>
                12 <p>Orders</p>
              </h2>
            </div>

            <div className="btns">
              <CircleBtn
                icon={<BusinessCenterOutlinedIcon fontSize="small" />}
                bColor="#1c2028"
                color="#2fb273"
              />
              <h2>
                0 <p>ROA</p>
              </h2>
            </div>

            <div className="btns">
              <CircleBtn
                icon={<TimelineOutlinedIcon fontSize="small" />}
                bColor="#1c2028"
                color="#a68d50"
              />
              <h2>
                12.2% <p>Conversion</p>
              </h2>
            </div>

            <div className="btns">
              <CircleBtn
                icon={<NorthEastOutlinedIcon fontSize="small" />}
                bColor="#1c2028"
                color="#905295"
              />
              <h2>
                290 <p>Sent</p>
              </h2>
            </div>
          </div>

          <div className="banner-card">
            <DeliveryCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
