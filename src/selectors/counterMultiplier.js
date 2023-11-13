import { selector } from "recoil";
import { counterState } from "../states/counter";

export const counterMuliplier = selector({
    key: 'MAIN/CounterMuliplier',
    get:({get})=>{
        const result = get(counterState);

        return result * 5;
    }
})