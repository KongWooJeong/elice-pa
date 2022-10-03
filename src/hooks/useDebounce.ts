import { useCallback, useState } from "react";
import _ from "lodash";

function useDebounce(initialState: any, wait = 1000) {
  const [state, setState] = useState(initialState);

  const debounce = useCallback(
    _.debounce((_prop: string) => {
      setState(_prop);
    }, wait),
    []
  );

  function setDebouncedState(value: any) {
    debounce(value);
  }

  return [state, setDebouncedState];
}

export { useDebounce };
