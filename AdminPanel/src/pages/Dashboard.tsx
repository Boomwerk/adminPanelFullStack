import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";

import RefreshJWT from "../services/RefreshJWT";


export default function Dashboard(){

    const refresh = (e) => {
        e.preventDefault();

        RefreshJWT();

    }

    

    return(
        <div className="flex">

            <LeftNav/>
            <div className="w-full bg-gray-100">
                <Navbar/>
                <div className="flex justify-center">

                    <div className="w-2/5">
                        <button className="btn btn-soft btn-primary" onClick={refresh}>Refresh Token</button>

                    </div>
                </div>

            </div>
            
        </div>
    )
}