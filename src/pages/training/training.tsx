import { useState } from "react";
import { Button, Header } from "components";
import { TrainingDay, TrainingDays } from "./constants";

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
  const [trainingDay, setTrainingDay] = useState<TrainingDay>(TrainingDays[0]);

  const onChangeTrainingDay = (dayIndex: number) =>
    setTrainingDay(TrainingDays[dayIndex]);

  return (
    <>
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
