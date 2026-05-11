
export default function LeftNav(){

    return(<>
        
        <div className="w-1/5 h-screen bg-[#020617] text-white p-4">
        <div className="flex flex-col mb-15">

            <h2 className="text-xl font-bold ">Admin Panel</h2>
            <p className="text-xs">Developper par Boomwerk</p>
        </div>
            
            <div>
                <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-600">Dashboard</a>
                <a href="/users" className="block py-2 px-4 hover:bg-gray-600">Users</a>
                <a href="/settings" className="block py-2 px-4 hover:bg-gray-600">Settings</a>
            </div>
        </div>

    
    </>);

}