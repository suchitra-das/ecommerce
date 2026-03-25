import { createContext } from "react";


export type EcommerceContextType ={
    count:{[key:number]: number}
     handleAdd: (id: number) => void;
     handleDelete: (id: number) => void;
}

export const EcommerceContext = createContext<EcommerceContextType | null>(null)