import Card from "./Card";
function Tours({ tours, removeTour }) {
	return (
		<div className="max-w-[1300px] mx-auto">
			<div className="flex flex-wrap gap-8 justify-center mt-12">
				{tours.map((tour) => {
					return <Card key={tour.id} {...tour} removeTour={removeTour} />;
				})}
			</div>
		</div>
	);
}

export default Tours;
