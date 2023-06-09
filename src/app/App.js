import {Route, Routes, useLocation} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {AboutPage} from "../pages/AboutPage";
import {Suspense, useCallback, useEffect, useState} from "react";
import {Footer, Header, MenuMobile, NavBar} from "../widgets";
import {CatalogPage} from "../pages/CatalogPage";
import {DepartmentPage} from "../pages/DepartmentPage";
import {ContactsPage} from "../pages/ContactsPage";
import {useWindowDimensions} from "../shared";
import {AuthPage} from "../pages/AuthPage";
import {CatalogDetailsPage} from "../pages/CatalogDetailsPage";
import {NotFoundPage} from "../pages/NotFoundPage";
import {NewsDetailsPage} from "../pages/NewsDetailsPage";
import {BackToTopButton} from "../widgets/BackToTopButton/BackToTopButton";

function App() {
  const {isSmallScreen} = useWindowDimensions()
  const [sidebarActive, setSidebarActive] = useState(false)

  const {pathname} = useLocation()

  const isAuthPage = pathname === '/auth'

  const toggle = useCallback(() => {
    setSidebarActive(prevState => !prevState)
  }, [])

  useEffect(() => {
    if (!isSmallScreen) {
      setSidebarActive(false)
    }
    const body = document.body
    body.classList.toggle('stop_scrolling', sidebarActive);
  }, [isSmallScreen, sidebarActive])

  return (
    <div className={'page'} style={{display: isAuthPage ? 'none' : 'flex'}}>
      <div>
        <Header toggle={toggle}/>
        {isSmallScreen
          ? <MenuMobile pathname={pathname} active={sidebarActive} setActive={setSidebarActive}/>
          : <NavBar pathname={pathname}/>
        }
      </div>
      <Suspense fallback={<div className={'container'}>Загрузка...</div>}>
        <main className={'main'}>
          <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/catalog'} element={<CatalogPage/>}/>
            <Route path={'/catalog/:type'} element={<CatalogDetailsPage/>}/>
            <Route path={'/department'} element={<DepartmentPage/>}/>
            <Route path={'/contacts'} element={<ContactsPage/>}/>
            <Route path={'/news/:id'} element={<NewsDetailsPage/>}/>
            <Route path={'/auth'} element={<AuthPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
        </main>
      </Suspense>
      <Footer/>
      <BackToTopButton/>
    </div>
  );
}

export default App;
