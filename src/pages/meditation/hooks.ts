import { useCallback, useEffect, useMemo, useState } from "react";
import {
  meditationDoneItem,
  MeditationRoutine,
  meditationRoutineOne,
  meditationRoutineTwo,
} from "./constants";

const meditationKey = "meditationRoutine";

export const useMeditation = () => {
  const [meditationRoutine, setMeditationRoutine] =
    useState<MeditationRoutine | null>(null);
  const [meditationIndex, setMeditationIndex] = useState(0);
  const [meditationDone, setMeditationDone] = useState(false);

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

  const switchMeditationItem = useCallback(() => {
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
  }, [meditationRoutine, meditationIndex, meditationDone]);

  const restartMeditation = useCallback(
    () => setMeditationDone(false),
    [setMeditationDone]
  );

  useEffect(() => {
    const currentVersion = localStorage.getItem(meditationKey);
    if (currentVersion === "1") {
      setMeditationRoutine(meditationRoutineOne);
    } else {
      setMeditationRoutine(meditationRoutineTwo);
    }
  }, []);

  return {
    meditationItem,
    meditationDone,
    switchMeditationItem,
    restartMeditation,
  };
};
