export interface Store {
    emit: () => void
    on: () => Function<{}>
    getData: () => {}
    createStore: () => Store
}

declare const Store: Store

export default Store