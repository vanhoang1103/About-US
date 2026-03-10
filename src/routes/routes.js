import config from '~/config';


// Pages
import Homes from '~/pages/Homes';
import Experiences from '~/pages/Experiences';
import Services from '~/pages/Services';

// Public routes
const publicRoutes = [
    { path: config.routes.homes, component: Homes },
    { path: config.routes.experiences, component: Experiences },
    { path: config.routes.services, component: Services },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };