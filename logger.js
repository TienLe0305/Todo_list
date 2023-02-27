export default function logger(reducer) {
  return (prevState, action, args) => {
    const nextState = reducer(prevState, action, args);

    console.groupEnd();
    return nextState;
  };
}
