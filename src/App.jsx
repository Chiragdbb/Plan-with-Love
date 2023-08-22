import "./index.css";
import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

function App() {
	const [tours, setTours] = useState(data);

	function removeTour(id) {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	}

	if (tours.length === 0) {
		return (
			<div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
				<h2 className="text-xl font-extrabold text-center">
					No Tours Left
				</h2>
				<button className="bg-slate-200 w-[150px] h-[30px] rounded font-semibold text-sm hover:bg-white" 
        onClick={()=>setTours(data)}>Refresh</button>
			</div>
		);
	}

	return (
		<div>
			<div className="text-center text-4xl font-bold mt-12 border-[5px] border-dashed border-blue-900 mx-auto h-[80px] w-[400px] rounded-2xl flex justify-center items-center">
				<h2>Plan With Love</h2>
			</div>
			<Tours tours={tours} removeTour={removeTour} />
		</div>
	);
}

export default App;
