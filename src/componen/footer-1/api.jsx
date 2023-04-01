import axios from "axios";

const url = ` https://newsapi.org/v2/everything?`

const ApiBrita = async (getData) => {
    const datas = await axios.get(`${url}q=${getData}&apiKey=f6f9b5ff08ed46d8ab32401be3684d00`)
    const result = await datas.data.articles;
    console.log(result)
    return result
}

export { ApiBrita };