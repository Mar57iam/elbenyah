'use client'

import { createContext, useEffect, useState } from "react";

   export const DataContext = createContext();
 export default  function FetchingDataProvider(props) {
    const [projects, setProjects] = useState([])


     async function getAllProjects() {
        try {
          const allProjects = await fetch(`https://test.albenyah.com/api/public-data/projects`)
          const resProjects = await allProjects.json()
          setProjects(resProjects.data)
        } catch (error) {
          console.error("Error fetching ", error)
        }
      }
    
      useEffect(() => {
        getAllProjects()
      }, [])


    return <DataContext.Provider value={ { projects, setProjects } }>
        {props.children}
    </DataContext.Provider>
   }
