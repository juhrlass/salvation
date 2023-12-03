declare module 'salvation' {

    export interface Component {
        "_uid": string,
        "component": string,
        "children"?: Component[]
    }

    export interface CardComponent extends Component {
        "link": string,
        "title": string,
        "url" :string
    }

    export interface BingoComponent extends Component {
       "totalNumbers": number
    }

    export interface LinkableImage {
        "link": string,
        "title": string,
        "url" :string
    }

    export interface CarouselComponent extends Component {
        "images": LinkableImage[]
    }

    export interface ImageSliderComponent extends Component {
        "images": LinkableImage[]
    }


    export interface FullscreenComponent extends Component {
        backgroundColor?: string;

    }

    export interface GridComponent extends Component {
        "maxcolumns": number
    }

    export interface ImageComponent extends Component {
        "title": string,
        "url" :string
    }

    export interface ResponsiveContainerComponent extends Component {
        width: string;
        border: string;
        padding: string;
        responsive: string;

    }

    export interface NavigationComponent extends Component {
        autohide?:boolean
    }

    export interface VideoComponent extends Component {
        url:string
    }




}