import React, { useEffect, useState } from "react";
import { https } from "../api/config";
import { Carousel, ConfigProvider } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Banner() {
  const [banner, setbanner] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        console.log(res);
        setbanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotHeight: 10,
              dotWidth: 30,
              dotActiveWidth: 24,
            },
          },
        }}
      >
        <Carousel className="mb-10" autoplay effect="fade">
          {banner.map((item, index) => {
            return (
              <img
                key={index}
                src={item.hinhAnh}
                className="desktop:w-full desktop:h-2000 laptop:h96 laptop:w-96 tablet:h-40 tablet:w-40 object-bottom "
              />
            );
          })}
        </Carousel>
      </ConfigProvider>
    </div>
  );
}
