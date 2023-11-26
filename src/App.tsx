import { DynamicComponent } from "./components/DynamicComponent.tsx"

const data = {
  content: {
    body: [
      {
        _uid: "fullscreen",
        component: "fullscreen",
        children: [{
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
                component: "card",
              },
              {
                _uid: "BUY6Drn9e2",
                component: "card",
              },
            ],
          },]
      },

    ],
  },
}

export default function App() {
  return (

<>
        {data.content.body.map((block) => DynamicComponent({ block:block }))}

</>
  )
}
