import { Home, ShowDetail, ShowList } from "../views/pages";

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/shows",
        component: ShowList,
        exact: true,
    },
    {
        path: "/shows/:permalink",
        component: ShowDetail,
        exact: true,
    },
];

export default routes;
