import { Link } from "react-router-dom";
import { Header } from "components";

const StyledLi = ({ children }: { children: JSX.Element }) => (
  <li className="font-medium text-xl text-blue-800 hover:underline pb-1 flex justify-center ">
    {children}
  </li>
);

const Home = () => {
  return (
    <>
      <Header text="Home page" />
      <ul>
        <StyledLi>
          <Link to={"training"}>Training</Link>
        </StyledLi>
        <StyledLi>
          <Link to={"meditation"}>Meditation</Link>
        </StyledLi>
        <StyledLi>
          <Link to={"stretching"}>Stretching</Link>
        </StyledLi>
        <StyledLi>
          <Link to={"break-activities"}>Break activities</Link>
        </StyledLi>
      </ul>
    </>
  );
};

export default Home;
