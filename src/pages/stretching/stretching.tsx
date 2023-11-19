import { Button, Header } from "components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Stretches } from "./constants";
type StretchingKeys = keyof typeof Stretches;
type StretchingValue = (typeof Stretches)[StretchingKeys];

const Stretching = () => {
  const [stretchPosition, setStretchPosition] = useState<
    [string, StretchingValue]
  >(["Sitting", Stretches.Sitting]);
  return (
    <>
      <Link to={"../"}>Home</Link>
      <Header text="Stretching page" />
      <div>
        {Object.entries(Stretches).map((entry, i) => {
          return (
            <Button
              key={i}
              selected={stretchPosition[0] === entry[0]}
              text={entry[0]}
              onClick={() => setStretchPosition(entry)}
            />
          );
        })}
      </div>
      <div className="h-56">
        <ul className="grid grid-cols-2 gap-1 ">
          {stretchPosition[1].map((position) => (
            <li key={position}>{position}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Stretching;
