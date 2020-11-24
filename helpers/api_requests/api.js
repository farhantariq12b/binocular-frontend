import axios from 'axios';

export const ordersBetweenDates = (start, end) => {
   return axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${start}&end_date=${end}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err)
    })
  }

export const initialunits = () => {
    return axios.get(`${process.env.SERVER_URL}/api/orders`)
    .then(res => {
        return  res.data;
    })
    .catch(err => {
        console.log(err)
    })
}