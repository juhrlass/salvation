import { ReactNode } from "react"
import { Root } from "postcss"
import {
  createBrowserRouter,
  Navigate,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  useLoaderData,
} from "react-router-dom"

import { DynamicComponent } from "./components/DynamicComponent.tsx"
import data from "./content.json"

function Scene() {
  const slug = useLoaderData()

  return (
    <>
      {" "}
      {data.content[slug].map((block) => DynamicComponent({ block: block }))}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/scene/video" />,
  },
  {
    path: "/scene/:slug",
    loader: ({ params }) => {
      return params.slug
    },
    element: <Scene />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
