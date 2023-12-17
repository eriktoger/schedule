import { useState } from "react";
import { Button, Header } from "components";
import { Link } from "react-router-dom";
import { activities } from "./constants";

type ActivitiesKey = keyof typeof activities;
const BreakActivities = () => {
  const [breakKey, setBreakKey] = useState<ActivitiesKey>("home");

  return (
    <>
      <Link to={"../"}>Home</Link>
      <Header text="Break Activities page" />
      <div>
        <Button
          selected={breakKey == "home"}
          text={"Home"}
          onClick={() => setBreakKey("home")}
        />
        <Button
          selected={breakKey == "work"}
          text={"Work"}
          onClick={() => setBreakKey("work")}
        />
      </div>
      <div className="h-56 overflow-auto">
        <ul className="">
          {activities[breakKey].map(({ title, info }) => (
            <li className="mb-5" key={title}>
              <div className="flex flex-col">
                <span className="font-bold">{title}</span>
                {info.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BreakActivities;
