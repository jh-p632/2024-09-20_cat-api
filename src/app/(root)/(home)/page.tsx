import { Breeds } from "@/types/cats-api-types";
import Link from "next/link";

async function HomePage() {
	const response = await fetch("https://api.thecatapi.com/v1/breeds", {
		headers: {
			"x-api-key":
				"live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
		},
	});

	const breeds = (await response.json()) as Breeds;

	// console.log(breeds);

	return (
		<div>
			<ul className="ml-20">
				{breeds.map((breed) => (
					<li key={breed.id}>
						<article className="border-b mt-5">
							<h2 className="font-bold text-lg">
								<Link
									className="text-blue-500 underline"
									href={`/cats/${breed.id}`}
								>
									{breed.name}
								</Link>
							</h2>
							<p className="text-sm">
								<a href={breed.wikipedia_url} target="_blank">
									{breed.description}
								</a>
							</p>
							{breed.name}
						</article>
					</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
