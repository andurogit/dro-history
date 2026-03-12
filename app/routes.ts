import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("works", "routes/works.tsx"),
    route("posts", "routes/posts.tsx"),
    route("posts/:id", "routes/posts.$id.tsx"),
    route("executor", "routes/executor.tsx"),
] satisfies RouteConfig;
