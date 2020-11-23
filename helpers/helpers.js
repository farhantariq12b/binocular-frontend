import axios from 'axios';

export const getDataBetweenTwoDates = (startDate , endDate) => {
  let ls_date = new Date(Date.now() - startDate * 24 * 60 * 60 * 1000)
  let le_date = new Date(Date.now() - endDate * 24 * 60 * 60 * 1000)
  var ls_dateString = new Date(ls_date.getTime() - (ls_date.getTimezoneOffset() * 60000))
    .toISOString()
    .split("T")[0];
  let lst_date = ls_dateString.split("-")
  let lnew_start = `${lst_date[0]}-${lst_date[1]}-${lst_date[2]}`
  var e_dateString = new Date(le_date.getTime() - (le_date.getTimezoneOffset() * 60000))
    .toISOString()
    .split("T")[0];
  let len_date = e_dateString.split("-")
  let lnew_end = `${len_date[0]}-${len_date[1]}-${len_date[2]}`
  return axios.get(`${process.env.SERVER_URL}/api/orders?start_date=${lnew_start}&end_date=${lnew_end}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err)
    })
}

export const handleCallback = (start, end , that) => {
  var Difference_In_Time = end.getTime() - start.getTime();
  var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
  let s_date = start;
  let d = new Date(s_date);
  let data = "";
  for (var i = 0; i < Difference_In_Days; i++) {
    let format = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    data = data.concat(`'${format}'${i >= Difference_In_Days - 1 ? '' : ','}`);
    d.setDate(d.getDate() + 1);
  }
  axios.get(`${process.env.SERVER_URL}/api/orders?dates=${data}`)
    .then(res => {
      const orders = res.data;
      that.setState({ orders });
    })
    .catch(err => {
      console.log(err)
    })
}
 
export const getInitialUnits = () => {
  return axios.get(`${process.env.SERVER_URL}/api/orders`)
  .then(res => {
    return  res.data;
  })
  .catch(err => {
    console.log(err)
  })
}

//function to add commas in total revenue
export const numberWithCommas = (numberWithoutCommas) => {
  return numberWithoutCommas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}