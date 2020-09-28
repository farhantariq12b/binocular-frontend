import SideNav from '../../components/SideNav.js'
import Navbar from '../../components/Navbar.js'

//callback for datepicker


const handleCallback = (start, end)=> {
    // console.log(process.env.SERVER_URL,"process")
    
    // var Difference_In_Time =end._d.getTime()- start._d.getTime() ; 
    // var Difference_In_Days =Math.ceil( Difference_In_Time / (1000 * 3600 * 24)); 
  
  
    // let s_date = start._d;
    // let d = new Date(s_date);
    // let data = "";
    // for(var i=0; i<Difference_In_Days; i++ ){
    //   let format = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    //   data = data.concat(`'${format}'${i >= Difference_In_Days - 1 ? '' : ',' }`);
    //   d.setDate(d.getDate() + 1);  
      
    // }
    // axios.get(`${process.env.SERVER_URL}/api/orders?dates=${data}`)
    // .then(res => {
    //  const orders  = res.data;
    //  this.setState({ orders });
    // })
    // .catch(err =>{
    //   console.log(err)
    // })
   
  }
function InventoryBuy() {

    return <div className = "main-wrapper">
        <div className="sidenavbar">
        <SideNav />
      </div>
      <div className="nav-size">
        <div >
            <Navbar props = {handleCallback} heading = {"Inventory Buy"}/> 
        </div>

      <div className="inventory-page">
        <div className="inventory-page-header">
          <div className="flex space-between align-center">
            <div className="col-49 t-left">
              <div className="cart-heading">
                <h3>Projected Inventory Buy</h3>
              </div>
            </div>
            <div className="col-49 t-right">
              <div className="flex content-end">
                <div className="items-01 search-margin">
                  <div className="dropdown-widget">
                    <button className="dropdown-w c-light-black">Season (All)</button>
                    <ul className="dropdown-widget-list dropdown-w">
                      <li>Season 1</li>
                      <li>Season 2</li>
                      <li>Season 3</li>
                      <li>Season 4</li>
                    </ul>
                  </div>
                </div>
                <div className="items-01">
                  <div className="dropdown-widget">
                    <button className="dropdown-w c-light-black">Season (All)</button>
                    <ul className="dropdown-widget-list dropdown-w">
                      <li>Season 1</li>
                      <li>Season 2</li>
                      <li>Season 3</li>
                      <li>Season 4</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inventory-subtitle">
            <h3>TARGET</h3>
          </div>
          <div className="inventory-value">
            <div className="flex space-between">
              <div className="inventory-value-item w-20">
                <p className="inventory-value-text ">Cost</p>
                <h3 className="inventory-value-heading">$20<span className="inventory-t">k</span> </h3>
              </div>
              <div className="inventory-value-item w-20">
                <p className="inventory-value-text">Units</p>
                <h3 className="inventory-value-heading">$1684<span className="inventory-t">k</span></h3>
              </div>
              <div className="inventory-value-item w-20">
                <p className="inventory-value-text">Revenue</p>
                <h3 className="inventory-value-heading">$2000<span className="inventory-t">k</span></h3>
              </div>
              <div className="inventory-value-item w-20">
                <p className="inventory-value-text">Plan</p>
                <h3 className="inventory-value-heading">$250<span className="inventory-t">k</span></h3>
              </div>
            </div>
  
          </div>
        </div>
        <div className="inventory-table-title">
          <h3>BUY PROJECTIONS</h3>
        </div>
        <div className="inventory-table">
          <table className="full-w inventory-table-main">
            <thead>
              <tr>
                <th>STYLE
                  <span className="sort-arrow-table">
                    <img src="sort-top.svg"></img>
                  </span>
                  <span>
                    <img src="sort-bottom.svg"></img>
                  </span>
                </th>
                <th>Projected cost
                <span className="sort-arrow-table">
                    <img src="sort-top.svg"></img>
                  </span>
                  <span>
                    <img src="sort-bottom.svg"></img>
                  </span>
                </th>
                <th>Projected UNITS
                <span className="sort-arrow-table">
                    <img src="sort-top.svg"></img>
                  </span>
                  <span>
                    <img src="sort-bottom.svg"></img>
                  </span>
                </th>
                <th>PROJECTED REVENUE
                <span className="sort-arrow-table">
                    <img src="sort-top.svg"></img>
                  </span>
                  <span>
                    <img src="sort-bottom.svg"></img>
                  </span>
                </th>
                <th>PROJECTED PLAN
                <span className="sort-arrow-table">
                    <img src="sort-top.svg"></img>
                  </span>
                  <span>
                    <img src="sort-bottom.svg"></img>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Road Jogger (Spiral Tie-Dye)</td>
                <td>34,150</td>
                <td>245,890</td>
                <td>$96,480</td>
                <td className="flex space-between align-center">
                  <span>
                    $108,562
                  </span>
                  <span className="table-edit-btn">
                    <button className="bg-c-danger c-white">Edit</button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Road Jogger (Spiral Tie-Dye)</td>
                <td>34,150</td>
                <td>245,890</td>
                <td>$96,480</td>
                <td className="flex space-between align-center">
                  <span>
                    $108,562
                  </span>
                  <span className="table-edit-btn">
                    <button className="bg-c-danger c-white">Edit</button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Road Jogger (Spiral Tie-Dye)</td>
                <td>34,150</td>
                <td>245,890</td>
                <td>$96,480</td>
                <td className="flex space-between align-center">
                  <span>
                    $108,562
                  </span>
                  <span className="table-edit-btn">
                    <button className="bg-c-danger c-white">Edit</button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Road Jogger (Spiral Tie-Dye)</td>
                <td>34,150</td>
                <td>245,890</td>
                <td>$96,480</td>
                <td className="flex space-between align-center">
                  <span>
                    $108,562
                  </span>
                  <span className="table-edit-btn">
                    <button className="bg-c-danger c-white">Edit</button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Road Jogger (Spiral Tie-Dye)</td>
                <td>34,150</td>
                <td>245,890</td>
                <td>$96,480</td>
                <td className="flex space-between align-center">
                  <span>
                    $108,562
                  </span>
                  <span className="table-edit-btn">
                    <button className="bg-c-danger c-white">Edit</button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Road Jogger (Spiral Tie-Dye)</td>
                <td>34,150</td>
                <td>245,890</td>
                <td>$96,480</td>
                <td className="flex space-between align-center">
                  <span>
                    $108,562
                  </span>
                  <span className="table-edit-btn">
                    <button className="bg-c-danger c-white">Edit</button>
                  </span>
                </td>
              </tr>
  
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
     
}

export default InventoryBuy