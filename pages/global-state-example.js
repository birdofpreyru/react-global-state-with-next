import { useGlobalState } from '@dr.pogodin/react-global-state';

export default function GlobalStateExample() {
  const [value, setValue] = useGlobalState('testValue', 0)
  return (
    <div>
      Value is: {value}
      <button
        onClick={() => setValue(value + 1)}
      >
        Bump the value
      </button>
    </div>
  );
}
