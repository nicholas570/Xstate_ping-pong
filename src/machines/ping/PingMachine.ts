import { createMachine } from "xstate";
import { PingPongContext, PingPongEvents, PingPongTypeState } from "../MachineDef";
import { Options, PingMachineConfig } from "./PingMachineConfig";

export const PingMachine = createMachine<PingPongContext, PingPongEvents, PingPongTypeState>(PingMachineConfig, Options)
