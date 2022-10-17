import { useState } from "react";
import { Stretches } from "./constants";
type StretchingKeys = keyof typeof Stretches;
type StretchingValue = typeof Stretches[StretchingKeys];

const Stretching = () => {
  const [stretchPosition, setStretchPosition] = useState<
    [string, StretchingValue]
  >(["sitting", Stretches.sitting]);
  return (
    <div>
      <h1>Streching page</h1>
      <div>
        {Object.entries(Stretches).map((entry) => {
          return (
            <button onClick={() => setStretchPosition(entry)}>
              {entry[0]}
            </button>
          );
        })}
      </div>
      <h3>{stretchPosition[0]}</h3>
      <ul>
        {stretchPosition[1].map((position) => (
          <li>{position}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stretching;
