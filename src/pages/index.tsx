import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      Pornhub
      <h1 className="text-xl text-red-700">Only for you</h1>
      <Link href={"/video"}>
        <button className="mx-2 my-2 rounded-xl border-4 border-orange-800 bg-orange-600 py-2 px-1 hover:border-orange-700 hover:bg-orange-500">
          Watch Video
        </button>
      </Link>
    </div>
  );
};

export default Home;
