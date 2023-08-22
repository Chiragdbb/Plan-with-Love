import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
	const [readmore, setReadmore] = useState(false);
	const description = readmore ? info : `${info.substring(0, 200)}...`;

	function readmoreHandler() {
		setReadmore(!readmore);
	}

	return (
		<div>
			<div className="p-2 shadow-2xl w-[400px] rounded-lg">
					<img
						className=" w-[380px] aspect-square object-cover"
						src={image}
						alt={name}
					></img>
				<div className="px-0.5">
					<div className="font-extrabold text-green-600 text-lg mt-2.5">
						<span>₹</span>
						<span className="ml-1">{price}</span>
					</div>
					<p className="mt-1 text-xl font-extrabold">{name}</p>
					<div className="mt-2 text-sm font-medium">
						<span>{description}</span>
						<span
							className="text-blue-500 text-xs ml-1 hover:cursor-pointer"
							onClick={readmoreHandler}
						>
							<span>{readmore ? "Show Less" : "Read More"}</span>
						</span>
					</div>
					<div className="mx-auto w-fit mt-8 mb-2.5">
						<button
							className="border-red-500 border p-1.5 rounded-md w-[200px] font-bold bg-red-100 hover:bg-red-600 hover:text-white"
							onClick={() => removeTour(id)}>
							Not Interested
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
