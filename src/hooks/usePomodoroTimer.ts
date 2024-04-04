import { useEffect, useRef, useState } from "react";
import { TPomodoroType } from "../pages/PomodoroPage/PomodoroPage";

export const usePomodoroTimer = (timerSequences: Array<TPomodoroType>) => {
  const [timerTime, setTimerTime] = useState(timerSequences[0].duration);
  const timerIndex = useRef<number>(0);
  const timerId = useRef<ReturnType<typeof setInterval> | null>();
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  useEffect(() => {
    if (timerTime === 0) {
      const newTimerIndex = (timerIndex.current + 1) % timerSequences.length;
      changeTimerType(newTimerIndex);
    }
  }, [timerTime]);
  function startTimer() {
    timerId.current = setInterval(() => {
      setTimerTime((prev) => prev - 1);
    }, 1000);
    setIsTimerStarted(true);
  }

  function stopTimer() {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    setIsTimerStarted(false);
  }
  function resetTimer() {
    if (timerId.current) {
      clearInterval(timerId.current);
      setTimerTime(timerSequences[timerIndex.current].duration);
    }
    setIsTimerStarted(false);
  }

  const changeTimerType = (newTimerIndex: number) => {
    timerIndex.current = newTimerIndex;
    resetTimer();
  };

  return {
    timerTime,
    startTimer,
    stopTimer,
    resetTimer,
    changeTimerType,
    timerIndex,
    isTimerStarted,
  };
};
