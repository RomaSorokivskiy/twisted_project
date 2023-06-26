import { createContext, useContext } from "react";

export const StoreContext = <A extends unknown | null>() => {
    const useStoreActionContext = createContext<A | undefined>(undefined);
    const useStoreContext = () => {
        const ctx = useContext(useStoreActionContext);
        if (ctx === undefined) {
            throw new Error("invalid");
        }
        return ctx;
    };
    return {useStoreContext, useStoreActionContext} as const;
};
