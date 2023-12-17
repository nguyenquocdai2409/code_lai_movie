import React, { useEffect, useState } from "react";
import { USER_LOGIN } from "../redux/constant/constant";
import { useSelector } from "react-redux";
import { https } from "../api/config";
import { useParams } from "react-router-dom";

export default function BookingTicket() {
  let params = useParams();
  console.log(params);
  const [thongTinDatVe, setthongTinDatVe] = useState({});
  const [gheDuocChon, setgheDuocChon] = useState([]);
  console.log(gheDuocChon);
  useEffect(() => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${params.id}`)
      .then((res) => {
        console.log(res.data.content);
        setthongTinDatVe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSelected = (tenGhe) => {
    console.log(tenGhe);
    // kiem tra xem ghe da duoc chon hay chua
    const isSeatSelected = gheDuocChon.includes(tenGhe);
    // neu ghe da duoc chon, hay loai bo no khoi danh sach
    if (isSeatSelected) {
      const updateSeats = gheDuocChon.filter((ghe) => ghe !== tenGhe);
      setgheDuocChon(updateSeats);
    } else {
      //neu ghe chua duoc chon, hay them no vao danh sach
      setgheDuocChon([...gheDuocChon, tenGhe]);
    }
  };
  let renderGhe = () => {
    return thongTinDatVe.danhSachGhe?.map((ghe, index) => {
      let cssGheVip = "";
      let disabled = false;
      //
      let cssGheDuocChon = "";
      //
      let cssGheDangChon;
      if (ghe.loaiGhe == "Vip") {
        cssGheVip = "gheVip";
      }
      if (ghe.daDat && ghe.loaiGhe == "Thuong") {
        cssGheDuocChon = "gheDuocChon";
        disabled = true;
      }
      let indexGheDuocChon = gheDuocChon.findIndex((item) => {
        return item == ghe.tenGhe;
      });
      // console.log(indexGheDuocChon);
      if (indexGheDuocChon !== -1) {
        cssGheDangChon = "gheDangChon";
      } else {
        cssGheDangChon = "";
      }
      return (
        <button
          onClick={() => {
            handleSelected(ghe.tenGhe);
          }}
          key={index}
          className={`ghe ${cssGheVip} ${cssGheDuocChon} ${cssGheDangChon}`}
        >
          {" "}
          {ghe.tenGhe}{" "}
        </button>
      );
    });
  };
  let user = useSelector((state) => state.reducer.userLogin);
  if (!localStorage.getItem(USER_LOGIN)) {
    return (window.location.href = "/login");
  }
  return (
    <div className="container">
      <div className="grid grid-cols-12 ">
        <div
          className=" col-span-8"
          style={{
            width: "90%",
            boxSizing: "border-box",
            display: "block",
          }}
        >
          <div
            style={{
              width: "79.9%",
              boxSizing: "border-box",
              margin: "auto",
              display: "block",
            }}
          >
            {renderGhe()}
          </div>
        </div>
        <div className=" col-span-4 space-y-5">
          <h3 className="text-center text-green-400 text-2xl">
            {" "}
            {gheDuocChon
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}
          </h3>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Cụm Rạp</h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.tenCumRap}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Địa chỉ</h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.diaChi}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Rạp</h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.tenRap}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Ngày giờ chiếu: </h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.ngayChieu} ~{" "}
              <span className="text-red-500">
                {thongTinDatVe.thongTinPhim?.gioChieu}
              </span>
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Tên phim: </h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.tenPhim}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Chọn: </h3>
            <div className="text-xl">
              {[...gheDuocChon].map((item, index) => {
                const tenGhe = item;
                const isSeatSelected = gheDuocChon.includes(tenGhe);
                const cssGheDangChon = isSeatSelected ? "gheDangChon" : "";
                return (
                  <span
                    style={{ fontSize: "20px" }}
                    key={index}
                    className={`ghe ${cssGheDangChon} `}
                  >
                    {" "}
                    Ghế {tenGhe} ,{" "}
                  </span>
                );
              })}
            </div>
          </div>
          <hr />
          <div>
            <i>Email : </i>
            {user.email}
          </div>
          <div>
            <i>Phone : </i>
            {user.soDT}
          </div>
        </div>
      </div>
    </div>
  );
}
