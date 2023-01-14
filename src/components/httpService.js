import axios from "axios";
let baseurl='http://localhost:2410'

function get(url){
    return axios.get(baseurl+url)
}
function delstudent(url){
    return axios.delete(baseurl+url)
}
function post(url,obj){
    return axios.post(baseurl+url,obj)
}
function put(url,obj){
    return axios.put(baseurl+url,obj)
}



export default {
    get,
    delstudent,
    post,
    put,
    

}