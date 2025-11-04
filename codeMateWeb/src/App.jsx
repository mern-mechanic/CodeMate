import store from './store';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LazyLoader from './pages/LazyLoader';
import MousePosition from './pages/MousePosition';

const Feed = lazy(() => import('./pages/Feed'));
const Help = lazy(() => import('./pages/Help'));
const Chat = lazy(() => import('./pages/Chat'));
const Memo = lazy(() => import('./pages/Memo'));
const Algo = lazy(() => import('./pages/Algo'));
const Login = lazy(() => import('./pages/Login'));
const About = lazy(() => import('./pages/About'));
const Udemy = lazy(() => import('./pages/Udemy'));
const Immer = lazy(() => import('./pages/Immer'));
const Chart = lazy(() => import('./pages/Chart'));
const Letter = lazy(() => import('./pages/Letter'));
const Resume = lazy(() => import('./pages/Resume'));
const Akshay = lazy(() => import('./pages/Akshay'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Profile = lazy(() => import('./pages/Profile'));
const Ingredients = lazy(() => import('./pages/Ingredients'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Playground = lazy(() => import('./pages/Playground'));
const Connections = lazy(() => import('./pages/Connections'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

function App() {
    const [showLoader, setShowLoader] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setShowLoader(true);
        // console.log('Effect called : ' + new Date().toLocaleTimeString());
        // console.log('Timer set : ' + new Date().toLocaleTimeString());
        const timer = setTimeout(() => {
            // console.log('Loader hidden : ' + new Date().toLocaleTimeString());
            setShowLoader(false);
        }, 600);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    // temporarily show loader for 3 seconds on app load and this is independent of lazy loading and suspense, just a demo
    if (showLoader) {
        return <LazyLoader />;
    }
    return (
        <Provider store={store}>
            <Suspense fallback={<LazyLoader />}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate to="/feed" replace />} />
                    <Route
                        path="/feed"
                        element={
                            <ProtectedRoute>
                                <Feed />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/mouse-position" element={<MousePosition />} />
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/immer" element={<Immer />} />
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/algo" element={<Algo />} />
                    <Route path="/askhay" element={<Akshay />} />
                    <Route path="/udemy" element={<Udemy />} />
                    <Route path="/connections" element={<Connections />} />
                    <Route path="/playground" element={<Playground />} />
                    <Route path="/memo" element={<Memo />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/letter" element={<Letter />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Provider>
    );
}

export default App;
