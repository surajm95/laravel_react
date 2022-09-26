import React from "react";
import "./App.css";
import Article from "./components/Articles/Article";
import MenuGallery from "./components/Gallery/MenuGallery";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Team from "./components/Team_member/Team";
import Review from "./components/Review/Review";

function App() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      {/* <Routes>
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/MenuGallery" component={MenuGallery} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/article" component={Article} />
      </Routes> */}
      <Hero />
      <Article />
      <Menu />
      <Team />
      <MenuGallery />
      <Review />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      quibusdam repellendus est impedit maxime harum quas aliquid porro tempore
      sunt? Soluta suscipit illo quas corporis enim provident quod impedit iure?
    
    </div>
  );
}

export default App;
