import { StateSchema } from "xstate";

// states
export enum PingPongStates {
    Active = "active",
}

export type PingPongSchema = StateSchema<any> & {
    states: {
        [PingPongStates.Active]: {},
    }
}

export type PingPongTypeState = {
    value: PingPongStates.Active;
    context: PingPongContext
}

// Events
export enum PingPongEvent {
    Pong = "pong",
    Ping = "ping",
}

export type PingPongEvents = { type: PingPongEvent.Pong }
    | { type: PingPongEvent.Ping };

// context
export interface PingPongContext {
    score: number;
}