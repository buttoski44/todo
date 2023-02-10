import { Children, createContext, useState } from "react";

export const ListContext = createContext({
    list: [],
})

export const ListProvider = ({children}) =>{
    const [list, setList] = useState([]);

    const deletTask = (id) =>{
        const filterList = list.filter(task => task.id !== id)
        console.log(filterList);
        setList(filterList);
    }
    const value = {list, setList, deletTask};
    
    return <ListContext.Provider value={value} >{children}</ListContext.Provider>
}