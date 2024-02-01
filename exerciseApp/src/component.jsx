export const exerciseOption={ 
    method: 'GET',
    headers: { 'X-Api-Key': '9MPRnbG8rZxHAPOyPYnUXpEveCQ588vMgeKiX2vZ'},
    contentType: 'application/json',
    
}

export const fetchData=async(url,options)=>{
    const response=await fetch(url,options)
    const data=await response.json()
    return data
}