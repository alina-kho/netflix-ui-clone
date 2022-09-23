import { Featured } from "../../component/Featured/Featured";
import { Navbar } from "../../component/Navbar/Navbar";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
    </div>
  );
};
