import React from "react";

//Style
import "../common/assets/mainContentStyle.scss";

// Smallcomponent
import Whitepaper from "../core/papers/Whitepaper";
import OvalSmallBtn from "../core/buttons/OvalSmallBtn";
import OvalMiniBtn from "../core/buttons/OvalMiniBtn";
import SquareIconBtn from "../core/buttons/SquareIconBtn";
import CircleBtn from "../core/buttons/CircleBtn";

// Icons
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import OvalMediumBtn from "../core/buttons/OvalMediumBtn";

function HomeMain() {
  return (
    <div className="home-main">
      <div className="container">
        <div className="home-main-content">
          <div className="home-left-content">
            <div className="home-stats">
              <div className="small-papers">
                <Whitepaper
                  btnColor="#66e22e"
                  color="white"
                  head="In the way"
                  body="190"
                  button="+34.5%"
                />

                <Whitepaper
                  btnColor="#e66674"
                  color="white"
                  head="Delivered"
                  body="29.7"
                  button="-3.27%"
                />
              </div>

              <div className="stats-paper">
                <div className="stats-paper-top">
                  <div className="paper-heading">
                    <p>Office Load</p>
                  </div>

                  <div className="head-buttons">
                    <OvalSmallBtn name="Day" color="#f9f9f9" fcolor="black" />
                    <OvalSmallBtn name="Week" color="black" fColor="#f9f9f9" />
                    <OvalSmallBtn name="Month" color="#f9f9f9" fcolor="black" />
                  </div>
                </div>

                <div className="stats-body">
                  <div className="stats-body-mid">
                    <div className="stats-body-left">
                      <ul>
                        <li>30K</li>
                        <li>20K</li>
                        <li>10K</li>
                        <li>0</li>
                      </ul>
                    </div>

                    <div className="stats-body-lines">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                      <div className="line4"></div>
                    </div>
                  </div>
                </div>

                <div className="stats-body-foot">
                  <div className="foot-list">
                    <ul>
                      <li>Feb14</li>
                      <li>Feb15</li>
                      <li>Feb16</li>
                      <li>Feb17</li>
                      <li>Feb18</li>
                      <li>Feb19</li>
                      <li>Feb20</li>
                    </ul>

                    <div className="dot"></div>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                    <div className="bar7"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-parcel-stats">
              <div className="parcel-stats-head">
                <div className="parcel-head-left">
                  <p>Parcels in the way</p>
                </div>

                <div className="parcel-head-right">
                  <div className="calendar">
                    <button>
                      <CalendarMonthRoundedIcon fontSize="tiny" />
                    </button>
                  </div>

                  <div className="selectBtn">
                    <select>
                      <option>Status</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="parcel-stats-body">
                <div className="list">
                  <div className="list-item">
                    <div className="icon-btn">
                      <CircleBtn
                        icon={<LocalShippingRoundedIcon fontSize="small" />}
                        color="black"
                        bColor="#f9fbfc"
                      />

                      <EastRoundedIcon fontSize="small" />
                    </div>

                    <div className="place-name">
                      <p>
                        <span>Kyiv,</span> Ukraine
                      </p>
                    </div>

                    <div className="qty-btn">
                      <span>16kg |</span>
                      <OvalMiniBtn
                        name="Paid"
                        btnColor="#e0f3ea"
                        color="#66e22e"
                      />
                    </div>

                    <div className="time">
                      <span>Today at 10:30 AM</span>
                    </div>
                  </div>

                  <div className="h-border"></div>

                  <div className="list-item">
                    <div className="icon-btn">
                      <CircleBtn
                        icon={<LocalShippingRoundedIcon fontSize="small" />}
                        color="black"
                        bColor="#f9fbfc"
                      />

                      <EastRoundedIcon fontSize="small" />
                    </div>

                    <div className="place-name">
                      <p>
                        <span>Kyiv,</span> Ukraine
                      </p>
                    </div>

                    <div className="qty-btn">
                      <span>16kg |</span>
                      <OvalMiniBtn
                        name="Paid"
                        btnColor="#e0f3ea"
                        color="#66e22e"
                      />
                    </div>

                    <div className="time">
                      <span>Yesterday at 10:30 AM</span>
                    </div>
                  </div>

                  <div className="h-border"></div>

                  <div className="list-item">
                    <div className="icon-btn">
                      <CircleBtn
                        icon={<LocalShippingRoundedIcon fontSize="small" />}
                        color="black"
                        bColor="#f9fbfc"
                      />

                      <EastRoundedIcon fontSize="small" />
                    </div>

                    <div className="place-name">
                      <p>
                        <span>Kyiv,</span> Ukraine
                      </p>
                    </div>

                    <div className="qty-btn">
                      <span>16kg |</span>
                      <OvalMiniBtn
                        name="Unpaid"
                        btnColor="#f9d9dd"
                        color="#e66674"
                      />
                    </div>

                    <div className="time">
                      <span>Yesterday at 10:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-right-content">
            <h4>Your to-Do list</h4>

            <div className="right-list">
              <div className="right-list-item">
                <div className="list-icon">
                  <SquareIconBtn icon={<FactCheckIcon fontSize="small" />} />
                </div>

                <div className="list-text">
                  <span>Check deliveries board</span>
                  <p>Aug 12 at 8:30 AM</p>
                </div>
              </div>

              <div className="right-list-item">
                <div className="list-icon">
                  <SquareIconBtn icon={<SettingsIcon fontSize="small" />} />
                </div>

                <div className="list-text">
                  <span>Run new outset drivers</span>
                  <p>Aug 12 at 8:30 AM</p>
                </div>
              </div>

              <div className="right-list-item">
                <div className="list-icon">
                  <SquareIconBtn icon={<ListAltIcon fontSize="small" />} />
                </div>

                <div className="list-text">
                  <span>Review superwise work</span>
                  <p>Aug 12 at 8:30 AM</p>
                </div>
              </div>

              <div className="right-list-item">
                <div className="list-icon">
                  <SquareIconBtn icon={<PeopleAltIcon fontSize="small" />} />
                </div>

                <div className="list-text">
                  <span>Startup Meeting</span>
                  <p>Aug 12 at 8:30 AM</p>
                </div>
              </div>
            </div>

            <div className="right-paper">
              <div className="paper-head">
                <div className="head-icon">
                  <CircleBtn icon={<EmojiObjectsIcon />} bColor="#d6e6fe" />
                </div>

                <div className="head-text">
                  <span>New partnership offer</span>
                  <p>Aug 20 at 10:00 AM</p>
                </div>
              </div>

              <div className="paper-body">
                <p>New drop team is ordering you to work together</p>
              </div>

              <div className="paper-btn">
                <OvalMediumBtn name="Cancel" BGcolor="#d6e6fe" />
                <OvalMediumBtn name="Accept" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
