import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./routes/Layout";
import { routes } from "./static/routes";

function App() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/start" element={<Welcome open={open} setOpen={setOpen} />} />
                {
                    routes?.map(({ path, component: Component }, index) =>
                        <Route
                            key={index}
                            path={path}
                            element={
                                <PrivateRoute open={open}>
                                    <Layout>
                                        <Component />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                    )
                }
            </Routes>
        </>
    );
}

export default App;
