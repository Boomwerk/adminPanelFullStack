import LeftNav from "../components/LeftNav";
import Navbar from "../components/Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



export default function Dashboard(){

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const datas ={

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May"
        ],

        datasets: [
            {
                label: "Utilisateurs",

                data: [12, 19, 8, 27, 35],

                borderColor: "rgb(59, 130, 246)",

                backgroundColor:
                    "rgba(59, 130, 246, 0.5)",

                tension: 0.4
            }
        ]
    }
    

    return(
        <div className="flex">

            <LeftNav/>
            <div className="w-full bg-gray-100">
                <Navbar/>
                <div className="flex justify-center">

                    <div className="w-4/5 flex flex-col mt-10 ">
                        
                        <div>
                            <h2 className="font-bold text-2xl">Aperçu du système</h2>
                            <p className="text-gray-600 text-xs">Surveillez vos métriques d’entreprise et l’engagement des utilisateurs en temps réel.</p>
                        </div>

                        <div className="flex flex-col">

                            <div className="grid grid-cols-3 gap-3 mt-5">

                                <div className="bg-white rounded-lg p-4 flex flex-col justify-between gap-2">
                                    <div className="flex justify-end text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                            <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
                                        </svg>

                                    </div>
                                    <p className="text-gray-600" style={{ marginTop: '-20px' }}>TOTAL UTILISATEURS</p>
                                    <div className="flex gap-2 items-end">
                                        <p className="font-bold text-4xl">42</p>
                                        <p className="text-green-500 text-xs font-bold flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                            </svg>
                                            12%
                                        </p>
                                    </div>
                                    <progress className="progress progress-primary mt-3" value="70" max="100"></progress>
                                </div>


                                
                                <div className="bg-white rounded-lg p-4 flex flex-col justify-between gap-2">
                                    <div className="flex justify-end text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                            <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
                                        </svg>

                                    </div>
                                    <p className="text-gray-600" style={{ marginTop: '-20px' }}>SESSIONS ACTIVE</p>
                                    <div className="flex gap-2 items-end">
                                        <p className="font-bold text-4xl">20</p>
                                        <p className="text-green-500 text-xs font-bold flex flex-row">
                                            Utilisateur actif
                                        </p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                    </svg>

                                </div>


                                
                                <div className="bg-white rounded-lg p-4 flex flex-col justify-between gap-2">
                                    <div className="flex justify-end text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                                        </svg>


                                    </div>
                                    <p className="text-gray-600" style={{ marginTop: '-20px' }}>SANTE DU SITE</p>
                                    <div className="flex gap-2 items-end">
                                        <p className="font-bold text-4xl">100%</p>
                                        <p className="text-green-500 text-xs font-bold flex flex-row">
                                            <div className="badge badge-success">Optimal</div>
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500">La prochaine maintenance est dans 14 jours</p>
                                </div>

                            </div>


                            <div className="grid grid-cols-3 gap-3 mt-5">

                                <div className="col-span-2 bg-white rounded-lg p-4 flex flex-col justify-between">
                                    <h2 className="font-bold text-xl">Activité récente</h2>
                                    <Bar data={datas} options={options}/>

                                </div>

                                <div className=" bg-white rounded-lg p-4 flex flex-col justify-between">

                                     <p>Conversion Rate</p>
                                    <div className="flex">
                                        <p className="font-bold text-xl">4.2%</p>
                                        <p className="text-red-500 text-xs font-bold">-1.5%</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                        

                    </div>
                </div>

            </div>
            
        </div>
    )
}