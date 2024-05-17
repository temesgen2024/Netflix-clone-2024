import React from "react";
import Header from "../../Components/Header";

import Footer from '../../Components/Footer/Footer'
import Banner from "../../Components/Banner/Banner";
import RowList from "../../Components/Rows/Rowlist/Rowlist";


function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Header />
      <Banner/>
      <RowList/>
      <Footer/>
      
    </div>
  );
}

export default Home;
