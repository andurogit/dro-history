import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  useLocation,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react";
import theme from "./lib/theme";
import Main from "./components/layouts/main";
import { AnimatePresence } from "framer-motion";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap",
  },
];

import fs from "node:fs";
import path from "node:path";

export async function loader({ request }: Route.LoaderArgs) {
  // Vite의 glob 기능을 사용하여 빌드 타임에 파일 목록을 가져옵니다.
  const glbFiles = Object.keys(import.meta.glob("/public/*.glb")).map(file => 
    file.replace("/public", "")
  );

  return {
    cookies: request.headers.get("Cookie") ?? "",
    glbFiles,
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData("root") as { cookies?: string } | undefined;
  const cookies = loaderData?.cookies;

  const colorManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme} colorModeManager={colorManager}>
          {children}
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Main>
      <AnimatePresence mode="wait" initial={true}>
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </Main>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
