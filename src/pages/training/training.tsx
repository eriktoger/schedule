import { useState } from "react";
import { TrainingDays } from "./constants";

const Training = () => {
  const [trainingDay, setTrainingDay] = useState(TrainingDays[0]);

  const onChangeTrainingDay = (dayIndex: number) =>
    setTrainingDay(TrainingDays[dayIndex]);

  return (
    <div>
      <h1>Training page</h1>
      <div>
        {TrainingDays.map((day, i) => (
          <button onClick={() => onChangeTrainingDay(i)}> {day.title}</button>
        ))}
      </div>
      <ul>
        <li>Exercises: {trainingDay.exercises.join(", ")}</li>
        <li>Finisher: {trainingDay.finisher}</li>
      </ul>
    </div>
  );
};

export default Training;
