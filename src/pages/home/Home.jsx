import { Navbar } from "../../component/Navbar/Navbar";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://www.cinematographe.it/wp-content/uploads/2020/08/love-guaranteed.jpg"
        alt="home banner pic"
        width="100%"
      />
    </div>
  );
};
