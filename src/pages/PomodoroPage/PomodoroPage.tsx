import cl from "./PomodoroPage.module.scss";
import { ToggleButton, Button } from "../../components/UI";
import { secondsToMinutes } from "../../utilites/dateUtilites";
import { usePomodoroTimer, useTheme } from "../../hooks";
import { ICPause, ICPlay, ICRoundArrow } from "../../icons";
export type TPomodoroType = {
  duration: number;
  buttonNumber: number;
};
export const PomodoroPage = () => {
  // const [parent] = useAutoAnimate();
  const pomodoroTypesInfo: Array<TPomodoroType> = [
    { duration: 45*60, buttonNumber: 0 },
    { duration: 5*60, buttonNumber: 1 },
    { duration: 15*60, buttonNumber: 2 },
  ];
  const {
    timerTime,
    startTimer,
    stopTimer,
    resetTimer,
    changeTimerType,
    timerIndex,
    isTimerStarted,
  } = usePomodoroTimer(pomodoroTypesInfo);
  const activeTimerButton = pomodoroTypesInfo[timerIndex].buttonNumber;
  
  const time = secondsToMinutes(timerTime);
console.log('timerIndex: ', timerIndex)
console.log('timerTime: ', timerTime)
  return (
    <div className={cl.wrapper}>
      <div className={cl.pomodoro}>
        <div className={cl.timeBtns}>
          <ToggleButton
            isActive={activeTimerButton === 0}
            onClick={() => changeTimerType(0)}
          >
            pomdoro
          </ToggleButton>
          <ToggleButton
            isActive={activeTimerButton === 1}
            onClick={() => changeTimerType(1)}
          >
            short break
          </ToggleButton>
          <ToggleButton
            isActive={activeTimerButton === 2}
            onClick={() => changeTimerType(2)}
          >
            long break
          </ToggleButton>
        </div>
        <div className={cl.timer}>{time}</div>
        <div className={cl.manageBtns}>
          {isTimerStarted ? (
            <ICPause onClick={stopTimer} className={cl.btn} />
          ) : (
            <ICPlay onClick={startTimer} className={cl.btn} />
          )}
          <ICRoundArrow className={cl.btn} onClick={resetTimer} />
        </div>
      </div>
    </div>
  );
};
