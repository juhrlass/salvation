import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLoaderData,
} from "react-router-dom"

import { DynamicComponent } from "@/components/DynamicComponent.tsx"
import data from "./content.json"

function Scene() {
  const slug = useLoaderData() as string

  return (
    <>
      {data.scenes[slug].map((block) => DynamicComponent({ block: block }))}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/scene/home" />,
  },
  {
    path: "/scene/:slug",
    loader: ({ params }) => {
      return params.slug
    } ,
    element: <Scene />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
