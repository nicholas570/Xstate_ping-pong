import { MachineConfig, send, MachineOptions, AssignAction, assign } from "xstate";
import { PingPongContext, PingPongEvent, PingPongEvents, PingPongSchema, PingPongStates } from "../MachineDef";
import { PongMachine } from "../pong/PongMachine";

export const PingMachineConfig: MachineConfig<PingPongContext, PingPongSchema, PingPongEvents> = {
    id: 'PingMachine',
    initial: PingPongStates.Active,
    context: {
        score: 0
    },
    states: {
        [PingPongStates.Active]: {
            type: "atomic",
            invoke: {
                id: 'pongMachine',
                src: PongMachine,
            },
            entry: [send({ type: PingPongEvent.Ping }, { to: "pongMachine" }), "updateScore"],
            on: {
                [PingPongEvent.Pong]: {
                    actions: [send({ type: PingPongEvent.Ping }, { to: "pongMachine" }), "updateScore"],
                }
            }
        },
    }
};

interface PingPongOptions<PingPongContext> extends Partial<MachineOptions<PingPongContext, PingPongEvents>> {
    actions: {
        updateScore: AssignAction<PingPongContext, PingPongEvents>;
    }
};

export const Options: PingPongOptions<PingPongContext> = {
    actions: {
        updateScore: assign({ score: (context) => context.score + 1 })
    }
}

