import React, { useEffect, useState } from "react";
import { USER_LOGIN } from "../redux/constant/constant";
import { useSelector } from "react-redux";
import { https } from "../api/config";
import { useParams } from "react-router-dom";

export default function BookingTicket() {



  let params = useParams();
  console.log(params);
  const [thongTinDatVe, setthongTinDatVe] = useState({});
  useEffect(() => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${params.id}`)
      .then((res) => {
        console.log(res.data.content);
        setthongTinDatVe(res.data.content)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderGhe = () => { 
    return thongTinDatVe.danhSachGhe?.map((ghe, index) => { 
      let cssGheVip = '';
      let disabled = false;
      let cssGheDuocChon = ''
      if(ghe.loaiGhe == 'Vip') {
       cssGheVip = "gheVip";
      }
      if(ghe.daDat && ghe.loaiGhe == 'Thuong') {
        cssGheDuocChon = 'gheDuocChon';
        disabled = true;
      }
      return <button key={index} className={`ghe ${cssGheVip} ${cssGheDuocChon}`}> {ghe.tenGhe} </button>
     })
   }
  let user = useSelector((state) => state.reducer.userLogin);
  if (!localStorage.getItem(USER_LOGIN)) {
    return (window.location.href = "/login");
  }
  return (
    <div className="container">
      <div className="grid grid-cols-12 ">
        <div className=" col-span-8" style={{width: '90%', margin: 'auto', boxSizing: 'border-box', display: 'block'}}>
            <div style={{width: '79.9%', margin: '0px, auto', boxSizing: 'border-box'}}>{renderGhe()}</div>
        </div>
        <div className=" col-span-4 space-y-5">
          <h3 className="text-center text-green-400 text-2xl">0 đồng</h3>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Cụm Rạp</h3>
            <h3 className="text-xl text-green-500">{thongTinDatVe.thongTinPhim?.tenCumRap}</h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Địa chỉ</h3>
            <h3 className="text-xl text-green-500">{thongTinDatVe.thongTinPhim?.diaChi}</h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Rạp</h3>
            <h3 className="text-xl text-green-500">{thongTinDatVe.thongTinPhim?.tenRap}</h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Ngày giờ chiếu: </h3>
            <h3 className="text-xl text-green-500">{thongTinDatVe.thongTinPhim?.ngayChieu} ~ <span className="text-red-500">{thongTinDatVe.thongTinPhim?.gioChieu}</span></h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Tên phim: </h3>
            <h3 className="text-xl text-green-500">{thongTinDatVe.thongTinPhim?.tenPhim}</h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Chọn: </h3>
            <h3 className="text-xl text-green-500"></h3>
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
