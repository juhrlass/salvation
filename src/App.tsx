import { DynamicComponent } from "./components/DynamicComponent.tsx"

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "logo",
      },
      {
        _uid: "gJZoSLkfZV",
        component: "grid",
        maxcolumns: 2,
        columns: [
          {
            _uid: "BUY6Drn9e3",
            component: "logo",
          },
          {
            _uid: "BUY6Drn9e2",
            component: "logo",
          },
        ],
      },
    ],
  },
}

export default function App() {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="z-30 opacity-95  p-5 rounded-2xl">
        {data.content.body.map((block) => DynamicComponent({ block:block }))}
      </div>
    </div>
  )
}
