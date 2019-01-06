import {FETCH_PRODUCTS} from '../Enum'
import axios from 'axios';

const token = "3f2o3hf2ougo2gbvg3lgb3lqpi1321d";
const url = "https://www.breadfast.com/wp-json/breadfast/testing/products"

export function FetchProducts(){
    const request = axios.post(url,{
        "token":token
    })
    return {
        type: FETCH_PRODUCTS,
        payload:request
    }
}