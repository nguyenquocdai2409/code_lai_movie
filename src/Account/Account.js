import React, { useEffect, useState } from "react";
import bgLogin from "./bgLogin.jpg";
import { https } from "../api/config";
import moment from "moment";

export default function Account() {
  const [user, setUser] = useState({});
  useEffect(() => {
    https
      .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log(res);
        setUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        backgroundImage: `url(${bgLogin})`,
        position: "fixed",
        backgroundSize: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          flexGrow: 1,
          marginTop: "40px",
          backgroundColor: "#fff",
          width: "100%",
          display: "block",
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <span>Lịch Sử Đặt Vé</span>
        <hr />
        <div>
          <div
            className="space-y-5 space-x-5 font-medium"
            style={{
              boxSizing: "border-box",
              padding: "12px",
              height: 600,
              overflow: "scroll",
            }}
          >
            <div
              className="space-y-5 space-x-5 font-medium"
              style={{
                display: "flex",
                flexWrap: "wrap",
                paddingLeft: "24px",
                paddingRight: "24px",
              }}
            >
              {user.thongTinDatVe?.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      <p className="text-black">
                        Ngày đặt : {moment(item.ngayDat).format("LL")}{" "}
                      </p>
                      <p className="text-red-500">Tên Phim : {item.tenPhim} </p>
                      <p className="text-dark">
                        Thời lượng : {item.thoiLuongPhim} , Giá vé :{" "}
                        {item.giaVe} VND{" "}
                      </p>
                      {item.danhSachGhe.map((dsGhe, index) => {
                        return (
                          <>
                            <div key={index}>
                              <p className="text-green-500">
                                {dsGhe.tenHeThongRap}
                              </p>
                              <p>{dsGhe.tenCumRap}</p>
                              <p>Ghế số: {dsGhe.tenGhe},</p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
