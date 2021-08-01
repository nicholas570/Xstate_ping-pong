import { createMachine } from "xstate";
import { PingPongContext, PingPongEvents, PingPongTypeState } from "../MachineDef";
import { Options, PongMachineConfig } from "./PongMachineConfig";

export const PongMachine = createMachine<PingPongContext, PingPongEvents, PingPongTypeState>(PongMachineConfig, Options)
