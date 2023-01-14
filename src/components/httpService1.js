import axios from "axios";
let baseurl='http://localhost:2410'
function get(url){
    return axios.get(baseurl+url)
}
function deleteCust(url){
    return axios.delete(baseurl+url)
}

function post(url,js){
    return axios.post(baseurl+url,js)
}
function put(url,js){
    return axios.put(baseurl+url,js)
}

export default {
    get,
    deleteCust,
    put,
    post,

}