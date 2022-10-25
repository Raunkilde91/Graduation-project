import axios from 'axios'

// BASE URL SKAL RETTES NÅR DU FÅR NY DATABASE

const api = {
    baseUrl: 'http://localhost:5099/',
    imageUrl: 'http://localhost:5099/images/'
}

export let imageUrl = api.imageUrl;




//GET  http://localhost:5099/about

export const hentAbout = () => {

    let response = axios.get(api.baseUrl + "about")
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}



//GET  http://localhost:5099/tours

export const hentTours = () => {

    let response = axios.get(api.baseUrl + "tours")
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}




export const hentUdvalgtTour = (id) => {

    let response = axios.get(api.baseUrl + "tours/" + id)
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}




// GET http://localhost:5099/contactinformation

export const hentContactInformation = () => {

    let response = axios.get(api.baseUrl + "contactinformation")
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}




// POST http://localhost:5099/contact

export const opretBesked = (nybesked) => {

    let response = axios.post(api.baseUrl + "contact", nybesked)
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}


//GET  http://localhost:5099/footer

export const hentFooter = () => {

    let response = axios.get(api.baseUrl + "footer")
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}



//ADMIN DELEN



// GET http://localhost:5099/user/admin

export const hentUser = () => {

    let response = axios.get(api.baseUrl + "user")
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}


// POST http://localhost:5099/tours/admin
export const opretTour = (nyTour) => {

    let response = axios.post(api.baseUrl + "tours/admin", nyTour)
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}

// PUT

// http://localhost:5099/user/admin/62568342b805db0aa7da2eb0

export const retTour = (id, rettetTour) => {

    let response = axios.put(api.baseUrl + "tours/admin/" + id, rettetTour)
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}



// DELETE

// DELETE http://localhost:5099/user/admin/xxxxxxxxxxxxxxxxxxxxx

export const sletTours = (userId) => {

    let response = axios.delete(api.baseUrl + "tours/admin/" + userId)
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}




// EKSTRA OPGAVER


//NYHEDSBREV *********************************

// POST http://localhost:5099/newssubscription
export const sendNyhed = (nyhed) => {

    let response = axios.post(api.baseUrl + "newssubscription", nyhed)
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}


//ADMIN NYHEDER *********************************

// GET http://localhost:5099/newssubscription/admin

export const hentAlleNews = () => {

    let response = axios.get(api.baseUrl + "newssubscription/admin")
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}


// ADMIN NYHEDER SLET

// DELETE http://localhost:5099/newssubscription/afmeld

export const sletNews = (userId) => {

    let response = axios.delete(api.baseUrl + "newssubscription/admin/" + userId)
    .then(res => {
        return res.data;
    })
    // ingen catch = fejl
    .catch(error =>{
        console.log(error);
        return null
    })

    return response; // data eller (null = fejl)
}