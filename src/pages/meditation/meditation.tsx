import { useEffect, useState } from "react";
import { meditationVersionOne } from "./constants";

const Meditation = () => {
  if (navigator.vibrate) {
    // vibration API supported
    navigator.vibrate([1000, 1000, 1000]);
  } else {
    console.log("hej");
  }

  const [running, setRunning] = useState(false);
  const [meditationTimer, setMeditationTimer] = useState(0);
  const [meditationIndex, setMeditationIndex] = useState(0);
  const [meditationItem, setMeditationItem] = useState(meditationVersionOne[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (running) {
        setMeditationTimer((current) => current + 10);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [running, setMeditationTimer]);

  useEffect(() => {
    if (
      meditationIndex < meditationVersionOne.length &&
      meditationVersionOne[meditationIndex].time <= meditationTimer
    ) {
      setMeditationIndex((current) => current + 1);
      setMeditationTimer(0);
    }
  }, [meditationTimer]);

  useEffect(() => {
    if (meditationIndex < meditationVersionOne.length) {
      setMeditationItem(meditationVersionOne[meditationIndex]);
    } else {
      setMeditationItem({
        title: "Meditation Done!",
        time: 0,
        image: "meditationDone.webp",
      });
      setRunning(false);
    }
  }, [meditationIndex]);

  return (
    <div>
      <h1>Meditation page</h1>
      <button
        onClick={() => {
          if (meditationIndex >= meditationVersionOne.length) {
            setMeditationIndex(0);
          }
          setRunning((current) => !current);
        }}
      >
        {running ? "Pause" : "Start"}
      </button>

      <p>{meditationItem.title}</p>
      <p>{meditationItem.time - meditationTimer} </p>
      <img height={100} src={`images/${meditationItem.image}`} />
    </div>
  );
};

export default Meditation;
