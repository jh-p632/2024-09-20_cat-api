/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const fetchOptions = {
	headers: {
		"x-api-key":
			"live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
	},
};

async function CatsOnBreedPage(props: { params: { breed: string } }) {
	const response1 = await fetch(
		`https://api.thecatapi.com/v1/breeds/${props.params.breed}`,
		fetchOptions
	);

	const response2 = await fetch(
		`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${props.params.breed}`,
		fetchOptions
	);

	const breed = await response1.json();
	const cats = await response2.json();

	// console.log(breed);

	return (
		<div className="w-screen">
			<div className="ml- my-5 flex gap-4 items-center">
				<h1 className="ml-[calc((100%-1024px)/2)] text-3xl font-bold">
					{breed.name}
				</h1>

				<div className="flex gap-1 text-2xl">
					<button>
						<BiSolidLike />
					</button>
					<button>
						<BiSolidDislike />
					</button>
				</div>
			</div>

			<div className="flex items-center justify-center">
				<ul className="border max-w-5xl flex flex-wrap gap-2 justify-around">
					{cats.map((cat) => (
						<li className="border w-56" key={cat.id}>
							<img
								className="object-contain"
								src={cat.url}
								width={cat.width}
								height={cat.height}
								alt={cat.id}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default CatsOnBreedPage;
