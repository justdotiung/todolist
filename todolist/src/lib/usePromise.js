import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  //대기중 /ㅎ완료/ 실패에 대한 상태관리
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
