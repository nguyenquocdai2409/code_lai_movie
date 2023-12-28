import React from "react";

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
      <hr className="" />
      <div
        style={{
          top: 0,
          left: 0,

          color: "#fff",
          padding: "20px 0 10px 0",
          textAlign: "left",
        }}
      >
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
          lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành
          phố Hồ Chí Minh cấp.
        </h6>
        <h6 className="font-thin text text-xs">
          Số Điện Thoại (Hotline): 1900 545 436
        </h6>
      </div>
    </div>
  );
}
