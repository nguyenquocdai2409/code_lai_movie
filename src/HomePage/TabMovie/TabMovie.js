import { Tabs, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { https } from "../../api/config";
import moment from "moment";
import ItemMovie from "./ItemMovie";

export default function TabMovie() {
  moment().locale("vi");
  const [heThongRap, setheThongRap] = useState([]);
  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
      .then((res) => {
        console.log(res);
        setheThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderHeThong = () => {
    return heThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img src={heThongRap.logo} style={{ width: 50 }} />,
        children: (
          <Tabs
            style={{
              height: 600,
              border: 2,
            }}
            tabPosition="left"
            items={heThongRap.lstCumRap.map((cumRap, index) => {
              return {
                key: index,
                label: (
                  <div className="w-96 truncate text-left">
                    <Tooltip title={cumRap.diaChi}>
                      <p className="text-green-500 uppercase">
                        {cumRap.tenCumRap}
                      </p>
                      <p>{cumRap.diaChi}</p>
                    </Tooltip>
                  </div>
                ),
                children: (
                  <div
                    className="space-y-5"
                    style={{ height: 600, overflow: "scroll" }}
                  >
                    {cumRap.danhSachPhim.map((phim) => {
                      return <ItemMovie data={phim} key={phim.maPhim} />;
                    })}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = renderHeThong();
  return (
    <div className="my-20">
      <Tabs
        className="container border-2 border-gray-100"
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
