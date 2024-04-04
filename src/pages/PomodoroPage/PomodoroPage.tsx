import { PageWrapper } from "../../wrappers";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import cl from "./PomodoroPage.module.scss";
import { ToggleButton, Button } from "../../components/UI";
import { secondsToMinutes } from "../../utilites/dateUtilites";
import { usePomodoroTimer } from "../../hooks";
import { FaArrowRotateLeft, FaPause } from "react-icons/fa6";
import { ICPause, ICPlay, ICRoundArrow } from "../../icons";
type Props = {};
export type TPomodoroType = {
  duration: number;
  buttonNumber: number;
};
export const PomodoroPage = (props: Props) => {
  const [parent] = useAutoAnimate();
  const pomodoroTypesInfo: Array<TPomodoroType> = [
    { duration: 5, buttonNumber: 0 },
    { duration: 7, buttonNumber: 1 },
    { duration: 10, buttonNumber: 2 },
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
  const activeTimerButton = pomodoroTypesInfo[timerIndex.current].buttonNumber;

  const time = secondsToMinutes(timerTime);
  return (
    <PageWrapper>
      <div className={cl.wrapper}>
        <div className={cl.pomodoro}>
          <div className={cl.timeBtns} ref={parent}>
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
    </PageWrapper>
  );
};
