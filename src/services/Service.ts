import axios from "axios";

export const api = axios.create({
    baseURL:('https://blogpessoal-mtxc.onrender.com')
})

export const Login = async(url: any, dados: any, setDado: any)=> {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}