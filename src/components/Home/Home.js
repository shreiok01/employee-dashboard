import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Widget from "../widget/Widget";
import "../Home/Home.css";
import { Features } from "../features/Features";
import Charts from "../charts/Charts";
import Table from "../table/Table";

function Home() {
  const type0 = "user";
  const type1 = "order";
  const type2 = "earning";
  const type3 = "balance";
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <div className="widget">
            <Widget type={type0} />
            <Widget type={type1} />
            <Widget type={type2} />
            <Widget type={type3} />
          </div>

          <div className="charts">
            <Features />
            <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
