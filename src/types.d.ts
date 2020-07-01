export type Opaque<K, T> = T & { __TYPE__: K }

export type Nullable<T> = T | null
export type Base64 = Opaque<'Base64', string>
