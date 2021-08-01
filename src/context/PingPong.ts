import React from "react";
import { Interpreter, State } from "xstate";
import { PingPongContext, PingPongEvents, PingPongSchema } from "../machines/MachineDef";

export interface PingPongProps {
    pingMachine?: [
        State<PingPongContext, PingPongEvents, PingPongSchema>,
        Interpreter<PingPongContext, PingPongSchema, PingPongEvents>['send'],
        Interpreter<PingPongContext, PingPongSchema, PingPongEvents>
    ],
    pongMachine?: [
        State<PingPongContext, PingPongEvents, PingPongSchema>,
        Interpreter<PingPongContext, PingPongSchema, PingPongEvents>["send"],
        Interpreter<PingPongContext, PingPongSchema, PingPongEvents>
    ],
}

export const Context = React.createContext<PingPongProps>({});
