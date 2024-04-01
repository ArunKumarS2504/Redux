

export const placeSearch = async (params) =>{

   const res = await axios.get(`${BASEURL}${PLACESEARCH}`)
   if(res.error){
    errorFn(res.error)
   }
   return res.data

}

export const weatherapi = async (params) =>{

    const res = await axios.get(`${BASEURL}${PLACESEARCH}`)
    if(res.error){
     errorFn(res.error)
    }
    return res.data
 
 }