import React from "react";
import imgLogo from "./pic1.jpg";
import imgLogo2 from "./pic2.png";
import imgApple from "./apple.png";
import imgAndroid from "./android.png";
import imgfb from "./fb.png";
import imgZalo from "./zalo.png";
import imgCgv from "./cgv.png";

export default function FooterBody() {
  return (
    <div
      style={{
        width: "100",
        background: "#212121",
        color: "#f5f7ea",
        paddingBottom: "24px",
      }}
    >
      <div className="container2">
        <div
          style={{
            left: 0,
            top: 0,
            display: "flex",
            justifyContent: "space-between",
            padding: "5% 16% 5% 16% ",
          }}
        >
          <div>
            <h6>TIX</h6>
            <a>FAQ</a>
            <br />
            <a>Brand Guidelines</a>
            <br />
            <a>Thỏa thuận sử dụng</a>
            <br />
            <a>Chính sách bảo mật</a>
          </div>
          <div>
            <h6>Đối Tác</h6>
            <a target="_blank" href="https://www.cgv.vn/" rel="noreferrer">
              <img
                style={{
                  width: "30px",
                  height: "30",
                  borderRadius: "50%",
                }}
                src={imgCgv}
                alt="Cgv"
                width="40"
              />
            </a>
          </div>

          <div>
            <h6>MOBILE APP</h6>
            <a
              target="_blank"
              href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
              rel="noreferrer"
            >
              <img src={imgApple} alt="android" width="40" />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              rel="noreferrer"
            >
              <img src={imgAndroid} alt="android" width="40" />
            </a>
          </div>
          <div>
            <h6>SOCIAL</h6>
            <a
              target="_blank"
              href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
              rel="noreferrer"
            >
              <img src={imgZalo} alt="zalo" width="40" />
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
              rel="noreferrer"
            >
              <img src={imgfb} alt="facebook" width="40" />
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div
        style={{
          top: 0,
          left: 0,

          color: "#fff",
          padding: "20px 0 10px 0",
          textAlign: "left",
          marginLeft: "30%",
          marginBottom: "60%",
        }}
      >
        <div className="container">
          <img
            style={{
              marginTop: "60px",
              marginLeft: "20%",
              display: "flex",
              flexGrow: "0",
              maxWidth: "16.666667%",
              flexBasis: "0",
            }}
            src={imgLogo}
            alt="logo"
            width="100 "
          />
          <h6 className="font-thin text-xs">
            TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION{" "}
          </h6>
          <br />
          <h6 className="font-thin text-xs">
            Đia chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
          </h6>
          <h6 className="font-thin text-xs">
            Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi
            lần thứ 30,
            <br /> ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố
            Hồ Chí Minh cấp.
          </h6>
          <h6 className="font-thin text text-xs">
            Số Điện Thoại (Hotline): 1900 545 436
          </h6>
        </div>
        <img style={{}} src={imgLogo2} alt="logo2" Width="100" />
      </div>
    </div>
  );
}
