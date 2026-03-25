// import { createContext } from "react";


// export type EcommerceContextType = {

//     handleAdd: (id: number) => void;
//     handleDelete: (id: number) => void;
// }

// export const EcommerceContext = createContext<EcommerceContextType | null>(null)


import { createContext } from "react";

export type dataType = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
};

export type EcommerceContextType = {
    data: dataType[];
    countCart: Record<number, number>;
    handleAddCart: (id: number) => void;
    handleDeleteCart: (id: number) => void;
};

// default value (important for TS)
export const EcommerceContext = createContext<EcommerceContextType | null>(null);