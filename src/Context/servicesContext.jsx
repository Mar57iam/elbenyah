'use client'

import { createContext, useEffect, useState } from "react";

   export const ServicesContext = createContext();
 export default  function FetchingServicesProvider(props) {

    const [servicesArr, setServicesArr] = useState([])

    async function getServices() {

    
        try {
                 
        const allServices = await fetch ( `https://test.albenyah.com/api/public-data/services`)
        const servicesData = await allServices.json() 
        console.log(servicesData.data);
        setServicesArr(servicesData.data)
    
        } catch (error) {
            console.log('errorFetching' , error);
            
        }
        
    }
    
    
    useEffect(() => {
        getServices()
    }, [])


    return <ServicesContext.Provider value={ { servicesArr, setServicesArr } }>
        {props.children}
    </ServicesContext.Provider>
   }
