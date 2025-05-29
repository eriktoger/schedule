import { Button, Header } from "components";
import { useGetPlaySound, useWakeLock } from "./hooks";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const timers = [1, 5, 10, 15];
const oneSecond = 1000;

export const MeditationTimer = () => {
  const meditationTimer = useRef(0);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const playSound = useGetPlaySound();
  useWakeLock();

  useEffect(() => {
    const timer = setInterval(() => {
      if (running) {
        meditationTimer.current += 1;
        if (meditationTimer.current >= currentTimer * 60) {
          playSound();
          setRunning(false);
          clearInterval(timer);
        }
      }
    }, oneSecond);
    return () => clearInterval(timer);
  }, [running]);

  if (paused) {
    return (
      <div className="w-72 h-36 flex flex-col justify-center items-center">
        <p>Timer is paused</p>
        <Button
          text="Unpause"
          onClick={() => {
            setRunning(true);
            setPaused(false);
          }}
        />
      </div>
    );
  }

  if (running) {
    return (
      <div className="w-72 h-36 flex flex-col justify-center items-center">
        <p>Timer is running</p>
        <div className=" flex justify-center items-center">
          <Button
            text="Cancel"
            onClick={() => {
              setRunning(false);
              setCurrentTimer(0);
            }}
          />
          <Button
            text="Pause"
            onClick={() => {
              setRunning(false);
              setPaused(true);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-72 h-36">
      <Link to={"../"}>Home</Link>
      <Header text="Meditation Timer Page" />
      <div className="flex justify-center items-center">
        {timers.map((time) => (
          <Button
            key={time}
            text={`${time} min`}
            onClick={() => {
              playSound();
              meditationTimer.current = 0;
              setCurrentTimer(time);
              setRunning(true);
            }}
          />
        ))}
      </div>
    </div>
  );
};
