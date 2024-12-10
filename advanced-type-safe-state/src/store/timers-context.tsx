import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

const initialState: TimersState = {
    isRunning: true,
    timers: [],
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimer: () => void,
    stopTimer: () => void,
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const ctx = useContext(TimersContext);
    if (!ctx) {
        throw new Error('useTimersContext must be used within a TimersContextProvider');
    }
    return ctx;
}

type TimersContextProviderProps = {
    children: ReactNode;
};

type TimersAction = {
    type: 'ADD_TIMER' | 'START_TIMER' | 'STOP_TIMER';
}

function timersReducer(state: TimersState, action: TimersAction): TimersState {

}

export default function TimersContextProvider({children}: TimersContextProviderProps) {

    const [timerState, dispatch] = useReducer(timersReducer, initialState)

    const ctx: TimersContextValue = {
        isRunning: false,
        timers: [],
        addTimer: (timerData: Timer) => {
            dispatch({type: 'ADD_TIMER', timerData});
        },
        startTimer: () => {
            dispatch({type: 'START_TIMER'});
        },
        stopTimer: () => {
            dispatch({type: 'STOP_TIMER'});
        },
    }
    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    )
}