interface IPerson {
  name: string;
  birth_year: string;
  gender: string;
  home_world: string;
  species: string[];
}

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  home_world: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface ICharacterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

