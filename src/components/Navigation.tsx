import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import {useNavigate} from "react-router-dom";

export const Navigation = ({block}) => {

    const navigate = useNavigate();


    return (

      <div className={"flex flex-col w-full"}>
          <ChevronLeftIcon onClick={()=> navigate(-1)} className="h-12 w-12" />
  </div>

  )
}
