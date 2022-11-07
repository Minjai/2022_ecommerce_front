import AppLayout from './components/layouts/AppLayout';
import { appRoutes } from './constants/appRoutes';
import { Route, Routes } from 'react-router-dom';
import { paths } from './constants/paths';

const App = () => {
  return (
    <Routes>
      <Route path={paths.HOME} element={<AppLayout />}>
        {appRoutes.map((route) =>
          route.routes ? (
            <Route key={route.id} {...route}>
              {route.routes.map((link) => (
                <Route key={link.id} {...link} />
              ))}
            </Route>
          ) : (
            <Route key={route.id} {...route} />
          )
        )}
      </Route>
    </Routes>
  );
};

export default App;
