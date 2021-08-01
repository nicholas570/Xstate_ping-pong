import { MachineConfig, MachineOptions, AssignAction, assign, sendParent } from "xstate";
import { PingPongContext, PingPongEvent, PingPongEvents, PingPongSchema, PingPongStates } from "../MachineDef";

export const PongMachineConfig: MachineConfig<PingPongContext, PingPongSchema, PingPongEvents> = {
    id: 'PongMachine',
    initial: PingPongStates.Active,
    context: {
        score: 0
    },
    states: {
        [PingPongStates.Active]: {
            type: "atomic",
            on: {
                [PingPongEvent.Ping]: {
                    actions: [sendParent({ type: PingPongEvent.Pong }, { delay: 1500 }), "updateScore"],
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



