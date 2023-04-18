

type Delegate<T, S> = (value: T) => S;
type Callback<T> = Delegate<T, void>;
type Predicate<T> = Delegate<T, boolean>;