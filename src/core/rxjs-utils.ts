import { useEffect, useMemo, useState } from "react";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { Unmanaged, Injectable } from "./di";

export function useDestroy(): Subject<void> {
  let destroy$: Subject<void> = useMemo(() => new Subject(), []);

  useEffect(() => {
    return () => destroy$.next();
  }, [destroy$]);

  return destroy$;
}

export function useGetter<T>(state$: Observable<T>, initialState: T): T {
  const [val, setVal] = useState<T>(initialState);

  useEffect(() => {
    const subscription = state$.subscribe((s: T) => {
      setVal(s);
    });
    return () => subscription.unsubscribe();
  }, [state$]);

  return val;
}

@Injectable()
export class RxStore<T> {
  protected state: BehaviorSubject<T>;

  constructor(@Unmanaged() initialState: T) {
    this.state = new BehaviorSubject(initialState);
  }

  get snapshot(): T {
    return this.state.value;
  }

  get state$(): Observable<T> {
    return this.state.asObservable();
  }
}
