import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
//Components
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Loading from './components/Loading'
//Pages
//import Home from './components/home/Home'
// import HomeJournals from './pages/journals/Home'
// import ViewJournal from './pages/journals/View'
// import UpsertJournal from './pages/journals/Upsert'
// import Find from './pages/subscriptions/Find'
// import Subscriptions from './pages/subscriptions/MySubscriptions'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Error404 from './pages/error404/error404'
const Home = lazy(() => import('./components/home/Home'))
const HomeJournals = lazy(() => import('./pages/journals/Home'))
const ViewJournal = lazy(() => import('./pages/journals/View'))
const UpsertJournal = lazy(() => import('./pages/journals/Upsert'))
const Find = lazy(() => import('./pages/subscriptions/Find'))
const Subscriptions = lazy(() => import('./pages/subscriptions/MySubscriptions'))
// const Login = lazy(() => import('./pages/auth/Login'))
// const SignUp = lazy(() => import('./pages/auth/SignUp'))

function App() {

  const { auth } = useAuth();

  if (auth) {
    return (
      <div id='root' className="App">

        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Routes>
                    <Route path='/' 
                      element={
                      <Suspense fallback={<Loading/>}>
                        <Home />
                      </Suspense>} />

                    <Route path='/journals/:id' 
                      element={
                      <Suspense fallback={<Loading/>}>
                        <HomeJournals />
                      </Suspense>} />

                    <Route path='/journals/view/:id' 
                      element={
                      <Suspense fallback={<Loading/>}>
                        <ViewJournal />
                      </Suspense>} />

                    <Route path='/journals/upsert' 
                      element={
                      <Suspense fallback={<Loading/>}>
                        <UpsertJournal />
                      </Suspense>} />

                    <Route path='/journals/upsert/:id' 
                      element={
                      <Suspense fallback={<Loading/>}>
                        <UpsertJournal />
                      </Suspense>} />

                    <Route path='/find' 
                      element={
                      <Suspense fallback={<Loading/>}>
                        <Find />
                      </Suspense>}/>

                    <Route path='/subscriptions' 
                      element={
                      <Suspense fallback={<Loading/>}>
                        <Subscriptions />
                      </Suspense>} />

                    <Route path='*' element={<Error404 />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>

      </div>
    );
  }

  return (
    <div id='root' className="App bg-gradient-primary">
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App;
