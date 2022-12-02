import { localRoutes, privateRoutes } from '../constants/appRoutes';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { paths } from '../constants/paths';
import { useSelector } from 'react-redux';

const PrivateRouter = () => {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path={paths.HOME} element={<AppLayout />}>
        {isAuth
          ? privateRoutes.map((route) =>
              route.routes ? (
                <Route key={route.id} {...route}>
                  {route.routes.map((link) => (
                    <Route key={link.id} {...link} />
                  ))}
                </Route>
              ) : (
                <Route key={route.id} {...route} />
              )
            )
          : localRoutes.map((route) =>
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

export default PrivateRouter;
