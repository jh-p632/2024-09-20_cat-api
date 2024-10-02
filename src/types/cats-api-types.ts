export type Breed = {
	id: string;
	name: string;
	wikipedia_url: string;
	description: string;
};

export type Breeds = Breed[];

export type Cat = {
	id: string;
	url: string;
	width: number;
	height: number;
}

export type Cats = Cat[]