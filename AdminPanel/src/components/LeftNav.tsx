
export default function LeftNav(){

    return(<>
        
        <div className="w-1/5 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <p>Developper par Boomwerk</p>
            
            <div>
                <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-600">Dashboard</a>
                <a href="/users" className="block py-2 px-4 hover:bg-gray-600">Users</a>
                <a href="/settings" className="block py-2 px-4 hover:bg-gray-600">Settings</a>
            </div>
        </div>

    
    </>);

}