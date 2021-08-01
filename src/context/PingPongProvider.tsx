import { useMachine } from '@xstate/react';
import React from 'react';
import { PingMachine } from '../machines/ping/PingMachine';
import { PongMachine } from '../machines/pong/PongMachine';
import { Context } from './PingPong';

interface PingPongProviderProps {
    children?: JSX.Element
}

export const PingPongProvider = ({children}: PingPongProviderProps): JSX.Element => {
    const [pingMachine, sendPing, pingInterpreter] = useMachine(PingMachine)
    const [pongMachine, sendPong, pongInterpreter] = useMachine(PongMachine)
    return (
        <Context.Provider value={{
            pingMachine: [pingMachine,sendPing, pingInterpreter], 
            pongMachine: [pongMachine, sendPong, pongInterpreter]
            }
        }>
            {children}
        </Context.Provider>
    )
};