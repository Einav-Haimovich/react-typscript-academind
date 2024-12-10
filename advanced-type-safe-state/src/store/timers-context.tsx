import { createContext } from "react";

type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimer: () => void,
    stopTimer: () => void,
}

const TimersContext = createContext<TimersContextValue | null>(null);