import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {

  const [loading, setLoading] = useState(false);
  const [resolved, setResloved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResloved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    //eslint-disble-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}
