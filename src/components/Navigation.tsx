import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom"
import {NavigationComponent} from "salvation";
import {useEffect} from "react";

interface NavigationProps {
    block:NavigationComponent
}

export const Navigation = (props: NavigationProps) => {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Autohide: "+props.block.autohide)
    }, [props.block.autohide]);

    return (

      <div className={"flex flex-col w-full"}>
          <ChevronLeftIcon onClick={()=> navigate(-1)} className="h-12 w-12" />
  </div>

  )
}