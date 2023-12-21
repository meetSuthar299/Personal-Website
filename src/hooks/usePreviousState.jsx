import { useEffect, useState } from 'react';

function usePreviousState(initialState, state) {
  const [stateTuple, setStateTuple] = useState([initialState, state]);

  useEffect(() => {
    setStateTuple((previousState) => [previousState[1], state]);
  }, [state]);

  const previousState = stateTuple[0];

  return previousState;
}

export default usePreviousState;
