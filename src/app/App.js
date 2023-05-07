import {Route, Routes, useLocation} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {AboutPage} from "../pages/AboutPage";
import {Suspense, useCallback, useEffect, useState} from "react";
import {Footer, Header, MenuMobile, NavBar} from "../widgets";
import {CatalogPage} from "../pages/CatalogPage";
import {DepartmentPage} from "../pages/DepartmentPage";
import {ContactsPage} from "../pages/ContactsPage";
import {SMALL_SCREEN, useWindowDimensions} from "../shared";
import {AuthPage} from "../pages/AuthPage";
import {CatalogDetailsPage} from "../pages/CatalogDetailsPage";

function App() {
  const {width} = useWindowDimensions()
  const [sidebarActive, setSidebarActive] = useState(false)

  const {pathname} = useLocation()

  const isAuthPage = pathname === '/auth'

  const toggle = useCallback(() => {
    setSidebarActive(prevState => !prevState)
  }, [])

  useEffect(() => {
    if (width > SMALL_SCREEN) {
      setSidebarActive(false)
    }
    const body = document.body
    body.classList.toggle('stop_scrolling', sidebarActive);
  }, [sidebarActive, width])

  return (
    <div className={'page'} style={{display: isAuthPage ? 'none' : 'block'}}>
      <Header toggle={toggle}/>
      {width > SMALL_SCREEN ? <NavBar/> : <MenuMobile active={sidebarActive} setActive={setSidebarActive}/>}
      <main className={'main'}>
        <Suspense fallback={<div>LOADING...</div>}>
          <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/catalog'} element={<CatalogPage/>}/>
            <Route path={'/catalog/:type'} element={<CatalogDetailsPage/>}/>
            <Route path={'/department'} element={<DepartmentPage/>}/>
            <Route path={'/contacts'} element={<ContactsPage/>}/>
            <Route path={'/auth'} element={<AuthPage/>}/>
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
