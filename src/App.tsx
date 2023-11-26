import {DynamicComponent} from "./components/DynamicComponent.tsx"
import data from './content.json';

let slug = "bingo"

export default function App() {
    return (

        <>
            {data.content[slug].map((block) => DynamicComponent({block:block}))}

        </>
    )
}
