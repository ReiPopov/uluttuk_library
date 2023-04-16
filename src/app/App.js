import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {AboutPage} from "../pages/AboutPage";
import {Suspense} from "react";
import {Footer, Header, NavBar} from "../widgets";
import {CatalogPage} from "../pages/CatalogPage";
import {DepartmentPage} from "../pages/DepartmentPage";
import {ContactsPage} from "../pages/ContactsPage";

function App() {
  return (
    <div className={'page'}>
      <Header/>
      <NavBar/>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/catalog'} element={<CatalogPage/>}/>
            <Route path={'/department'} element={<DepartmentPage/>}/>
            <Route path={'/contacts'} element={<ContactsPage/>}/>
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
