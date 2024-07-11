import { useState } from "react";
import { Button, Header } from "components";
import { TrainingDay, TrainingDays } from "./constants";
import { Link } from "react-router-dom";

const TrainingList = ({ trainingDay }: { trainingDay: TrainingDay }) => (
  <ul>
    <li className="text-lg">
      Exercises:{" "}
      <span className="text-base font-light">
        {trainingDay.exercises.join(", ")}{" "}
      </span>
    </li>
    <li className="text-lg">
      Finisher:{" "}
      <span className="text-base font-light">{trainingDay.finisher}</span>
    </li>
  </ul>
);
const Training = () => {
  const currentDay = new Date().getDay();
  const [trainingDay, setTrainingDay] = useState<TrainingDay>(
    TrainingDays[(currentDay + 6) % 7],
  );

  const onChangeTrainingDay = (dayIndex: number) =>
    setTrainingDay(TrainingDays[dayIndex]);

  return (
    <>
      <Link to={"../"}>Home</Link>
      <Header text="Training page" />
      <div className="mb-5">
        {TrainingDays.map((day, i) => (
          <Button
            key={i}
            onClick={() => onChangeTrainingDay(i)}
            text={day.title}
            selected={trainingDay.title === day.title}
          />
        ))}
      </div>
      <TrainingList trainingDay={trainingDay} />
    </>
  );
};

export default Training;
