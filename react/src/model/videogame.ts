interface Videogame {
  _id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  price: number;
  platform: string[];
}

export default Videogame;