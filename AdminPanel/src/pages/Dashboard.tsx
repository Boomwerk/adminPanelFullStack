import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";


export default function Dashboard(){

    

    return(
        <div className="flex">

            <LeftNav/>
            <div className="w-full bg-gray-100">
                <Navbar/>
                <div className="flex justify-center">

                    <div className="w-2/5">


                    </div>
                </div>

            </div>
            
        </div>
    )
}