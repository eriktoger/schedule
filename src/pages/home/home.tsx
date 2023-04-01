import { Link } from "react-router-dom";

const StyledLi = ({ children }: { children: JSX.Element }) => (
  <li className="font-medium text-xl text-blue-800 hover:underline pb-1 flex justify-center ">
    {children}
  </li>
);

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-winter bg-no-repeat bg-cover">
      <div className="bg-slate-200/70 rounded-lg p-2">
        <h1 className="text-2xl mb-5">Home page</h1>
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
        </ul>
      </div>
    </div>
  );
};

export default Home;
