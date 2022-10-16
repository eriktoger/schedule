import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to={"training"}>Training</Link>
        </li>
        <li>
          <Link to={"meditation"}>Meditation</Link>
        </li>
        <li>
          <Link to={"stretching"}>Stretching</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
