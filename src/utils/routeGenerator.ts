import { ReactNode } from "react";
import { TUserPath } from "../types/sideBar";

export type TRoutes = {
    path: string;
    element: ReactNode;
};


export const routeGenerator = (paths: TUserPath[]) => {
    const routes = paths.reduce((acc: TRoutes[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            });
        }

        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path!,
                    element: child.element,
                });
            });
        }
        return acc;
    }, []);
    return routes
}