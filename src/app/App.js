import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {AboutPage} from "../pages/AboutPage";
import {Suspense} from "react";
import {Header, NavBar} from "../widgets";

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
