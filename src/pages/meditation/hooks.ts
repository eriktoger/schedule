import { useCallback, useEffect, useMemo, useState } from "react";
import {
  meditationDoneItem,
  MeditationRoutine,
  meditationRoutineOne,
  meditationRoutineTwo,
} from "./constants";

export const useGetPlaySound = () => {
  const playSound = useCallback(() => {
    const audio = new Audio("/zen-gong2.wav");
    let playCount = 0;
    const maxPlays = 3;

    audio.addEventListener("ended", () => {
      playCount += 1;
      if (playCount < maxPlays) {
        audio.currentTime = 0;
        audio.play();
      }
    });

    audio.play().catch((e) => {
      console.log("Audio playback failed:", e);
    });
  }, []);
  return playSound;
};

const meditationKey = "meditationRoutine";

export const useMeditation = () => {
  const [meditationRoutine, setMeditationRoutine] =
    useState<MeditationRoutine | null>(null);
  const [meditationIndex, setMeditationIndex] = useState(0);
  const [meditationDone, setMeditationDone] = useState(false);
  const [running, setRunning] = useState(false);
  const [meditationTimer, setMeditationTimer] = useState(0);

  const switchMeditationRoutine = useCallback(() => {
    const currentVersion = localStorage.getItem(meditationKey);
    if (currentVersion === "1") {
      localStorage.setItem(meditationKey, "2");
      setMeditationRoutine(meditationRoutineOne);
    } else {
      localStorage.setItem(meditationKey, "1");
      setMeditationRoutine(meditationRoutineTwo);
    }
  }, []);

  const playSound = useGetPlaySound();

  const switchMeditationItem = useCallback(() => {
    playSound();

    if (navigator.vibrate) {
      navigator.vibrate([1000, 1000, 1000]);
    }
    if (meditationRoutine && meditationIndex < meditationRoutine.length - 1) {
      setMeditationIndex((current) => current + 1);
    } else {
      setMeditationDone(true);
      switchMeditationRoutine();
    }
  }, [meditationRoutine, meditationIndex, switchMeditationRoutine]);

  const meditationItem = useMemo(() => {
    if (meditationDone) {
      return meditationDoneItem;
    }
    return meditationRoutine?.[meditationIndex] ?? null;
  }, [meditationRoutine, meditationIndex, meditationDone, playSound]);

  const restartMeditation = useCallback(
    () => setMeditationDone(false),
    [setMeditationDone]
  );
  const prevIsAvailable = useMemo(
    () => meditationRoutine && meditationIndex > 0,
    [meditationRoutine, meditationIndex]
  );
  const nextIsAvailable = useMemo(
    () => meditationRoutine && meditationIndex < meditationRoutine.length - 1,
    [meditationRoutine, meditationIndex]
  );

  const getPrevMeditationItem = useCallback(() => {
    if (prevIsAvailable) {
      setMeditationIndex((prev) => prev - 1);
      setRunning(false);
      setMeditationTimer(0);
    }
  }, [prevIsAvailable]);

  const getNextMediationItem = useCallback(() => {
    if (nextIsAvailable) {
      setMeditationIndex((prev) => prev + 1);
      setRunning(false);
      setMeditationTimer(0);
    }
  }, [nextIsAvailable]);

  const handleMeditation = useCallback(() => {
    playSound();
    if (meditationDone) {
      restartMeditation();
    }
    setRunning((current) => !current);
  }, [meditationDone, playSound]);
  const handleText = meditationDone ? "Restart" : running ? "Pause" : "Start";

  useEffect(() => {
    const currentVersion = localStorage.getItem(meditationKey);
    if (currentVersion === "1") {
      setMeditationRoutine(meditationRoutineOne);
    } else {
      setMeditationRoutine(meditationRoutineTwo);
    }
  }, []);

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

  return {
    meditationItem,
    handleText,
    prevIsAvailable,
    nextIsAvailable,
    getPrevMeditationItem,
    getNextMediationItem,
    handleMeditation,
  };
};

export const useWakeLock = () => {
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
};
