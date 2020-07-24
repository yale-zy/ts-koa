import {getUser, addUser} from "../components/user";

export const AppRoutes = [
    {
        path: "/posts/:id",
        method: "get",
        action:getUser
    },
    {
        path: "/posts",
        method: "post",
        action:addUser
    }
];