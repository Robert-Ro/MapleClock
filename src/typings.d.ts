declare module '*.less'
declare module 'timer.js' {
  export interface Options {
    tick: number
    onstart?: () => void
    onstop?: () => void
    onpause?: () => void
    onend?: () => void
    ontick?: (ms: number) => void
  }
  export type TimerStatus = 'initialized' | 'started' | 'paused' | 'stopped'
  export default class Timer {
    constructor(option: Options)
    pause(): void
    start(start: number): this
    stop(start: number): this
    on(eventName: string, handler: () => void): this
    getStatus(): TimerStatus
    getDuration(): number
    measureStart(label: string): void
    measureStop(label: string): void
  }
}

interface Window {
  electron: {
    timerEnd: () => Promise<any>
    restEnd: () => void
  }
}
