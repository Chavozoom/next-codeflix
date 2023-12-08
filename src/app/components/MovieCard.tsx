import Image from "next/image";
import React from "react";

type MovieCardProps = {
	index: number;
};

export default function MovieCard({ index }: MovieCardProps) {
	return (
		<div
			key={index}
			className="group relative h-28 min-w-[200px] cursor-pointer rounded bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100 md:h-36 md:min-w-[260px] md:hover:scale-110"
		>
			<Image
				src={`/item_${index}.png`}
				fill={true}
				alt="MAID"
				className="rounded"
			/>
		</div>
	);
}
