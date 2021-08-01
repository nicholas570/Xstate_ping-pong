import React, { useContext } from 'react'
import { Context } from './context/PingPong';

export const Game = () => {
  const {pingMachine, pongMachine} = useContext(Context)
  const [ping, _, pingInterpreter] = pingMachine!
  const [pong, __, pongInterpreter] = pongMachine!

  pingInterpreter.onTransition((listener) => {
    console.log(`ping machine transitions to ${listener.value}`);
  });
  pongInterpreter.onTransition((listener) => {
    console.log(`pong machine transitions to ${listener.value}`);
  });

  return (
    <div>
      game
    </div>
  )
};
