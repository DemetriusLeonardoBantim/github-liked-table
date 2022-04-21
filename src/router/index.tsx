import React from 'react';
import { useRoutes } from 'react-router-dom';

import {Reposiories} from '../views/Repositories';
import {RepositoriesLiked} from '../views/RepositoriesLiked';

const AppRoute = () => {
  let routes = useRoutes([
    {path: "/", element: <Reposiories />},
    {path: "/repositories-liked", element: <RepositoriesLiked />}
  ])
  return routes
};

export default AppRoute;