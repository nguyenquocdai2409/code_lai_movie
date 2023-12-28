import React from "react";
import ListMovie from "./ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import Banner from "../Banner/Banner";
import FooterHeader from "../Footer/FooterHeader";
import FooterBody from "../Footer/FooterBody";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <ListMovie />
      <TabMovie />
      <FooterHeader />
      <FooterBody />
    </div>
  );
}
