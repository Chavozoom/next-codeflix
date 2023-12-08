import MovieCard from "./MovieCard";

type MovieRowProps = {
	sectionTitle: string;
};

export default function MovieRow({ sectionTitle }: MovieRowProps) {
	return (
		<div className="flex-col space-y-4">
			<div className="flex">
				<h2 className="-ml-2 inline-flex items-center text-2xl font-bold">
					{sectionTitle}
				</h2>
			</div>
			<div
				className="-ml-7 flex space-x-5 p-6 overflow-x-scroll scrollbar-hide
						"
			>
				{[1, 2, 3, 4, 5, 1, 1, 1, 5, 2, 5].map((index) => (
					<MovieCard key={index} index={index} />
				))}
			</div>
		</div>
	);
}
