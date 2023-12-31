
const BASE_URL = 'https://clothes-shop-ubov.onrender.com/clothes?category=';

export const getData = async (query) => {
  try{
    const res = await fetch(`${BASE_URL}${query}`);
    if(!res.ok){
      throw new Error('Fetch data error')
    }
    return await res.json()
  }catch (err) {
    throw new Error(err)
  }
}
