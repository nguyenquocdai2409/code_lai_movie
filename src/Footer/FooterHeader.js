import React from "react";
import bgLogin from "./bgLogin.jpg";
import imgPhone from "./phone.png";
import imgBanner from "./banner.jpg";

export default function FooterHeader() {
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url(${bgLogin})`,
        backgroundSize: "contain",
        height: "600px",
        padding: "120px 0 80px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
        }}
      >
        <div
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div className="flex box-border ">
            <div className="text-white space-y-10 ">
              <p className=" text-4xl mb-8">
                Ứng dụng tiện lợi dành cho người yêu điện ảnh
              </p>
              <br />

              <p className="text-2xl mb-8 ">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <br />
              <a
                style={{
                  font: "medium",
                  backgroundColor: "#fb4226",
                  padding: "8px 32px",
                  fontWeight: "700",
                  borderRadius: "4px",
                }}
                className="font-medium"
              >
                APP MIỄN PHÍ - TẢI VỀ NGAY!
              </a>
              <p>
                TIX có hai phiên bản{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  target="blank"
                  href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                >
                  {" "}
                  IOS &{" "}
                </a>{" "}
                <a
                  style={{ textDecoration: "underline" }}
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123&pli=1"
                >
                  {" "}
                  Android{" "}
                </a>{" "}
              </p>
            </div>
            <div style={{ padding: "0", position: "relative" }}>
              <img
                style={{
                  top: 0,
                  left: 0,
                  display: "block",
                  padding: "1.5% 29.2% 0 29.2%",
                  position: "relative",
                  width: "100%",
                  borderRadius: "20px",
                }}
                src={imgPhone}
                alt="phone"
              />
              <div
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  display: "block",
                  padding: "1.5% 29.2% 0 29.2%",
                  position: "absolute",
                  borderRadius: "20px",
                }}
              >
                <div>
                  <div
                    style={{
                      opacity: 0,
                      transition: "opacity 200ms cubic-bezier(0.4,0,0.2,1) 0ms",
                    }}
                  >
                    <div
                      style={{
                        margin: 0,
                        display: "block",
                        padding: 0,
                        overflow: "hidden",
                        position: "relative",
                        borderRadius: "20px",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          width: "100%",
                          border: "0px",
                          verticalAlign: "middle",
                          overflow: "hidden",
                        }}
                        src={imgBanner}
                        alt="banner"
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
  );
}
