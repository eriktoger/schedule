import { useEffect, useState } from "react";
import { useMeditation } from "./hooks";

const Meditation = () => {
  const [running, setRunning] = useState(false);
  const [meditationTimer, setMeditationTimer] = useState(0);
  const {
    meditationItem,
    meditationDone,
    switchMeditationItem,
    restartMeditation,
  } = useMeditation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (running && !meditationDone) {
        setMeditationTimer((current) => current + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [running, setMeditationTimer, meditationDone]);

  useEffect(() => {
    if (
      !meditationDone &&
      meditationItem &&
      meditationItem.time <= meditationTimer
    ) {
      switchMeditationItem();
      setMeditationTimer(0);
    }
  }, [meditationTimer, meditationItem, meditationDone]);

  useEffect(() => {
    const wakeLock = async () => {
      let wakeLock = null;
      if ("wakeLock" in navigator) {
        // create an async function to request a wake lock
        try {
          wakeLock = await window.navigator.wakeLock.request("screen");
        } catch (err) {
          console.log("what", err);
        }
      }
    };
    wakeLock();
  }, []);

  return (
    <div>
      <h1>Meditation page</h1>
      <button
        onClick={() => {
          if (meditationDone) {
            restartMeditation();
          }
          setRunning((current) => !current);
        }}
      >
        {meditationDone ? (
          "Restart"
        ) : (
          <span> {running ? "Pause" : "Start"}</span>
        )}
      </button>

      <p>{meditationItem?.title}</p>
      <p>{meditationItem?.time} </p>
      <img height={100} src={`images/${meditationItem?.image}`} />
    </div>
  );
};

export default Meditation;
