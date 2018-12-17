import axios from 'axios';
 const instance = axios.create({
     baseURL:'https://burger-builder-73ac6.firebaseio.com/',
 });

 export default instance;