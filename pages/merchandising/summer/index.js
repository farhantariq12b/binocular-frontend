
import SideNav from '../../../components/SideNav.js'
import Navbar from '../../../components/Navbar.js'
import Dashboard from "../../dashboard/index"


function Merchandising() {
    return (
     <Dashboard heading={"Merchandising Summer"}>
    <div className="full-card drage-drop">
      <div className="drap-drop-header">
        <div className="flex space-between">
          <div className="col-49">
          <div className="cart-heading">
            <h3>Projected Inventory Buy</h3>
          </div>
          </div>
          <div className="col-49">
            <div className="flex flex-end">
              <div className="dropdown-icon">
                <img src="../dropdown-icon.svg"></img>
              </div>
              <div className="search-widget mx-4">
                <input type="text"></input>
                <img className="search-icon-s" src="../search-ber-s.svg"></img>
              </div>
              <div className="dropdown-widget">
                <button className="dropdown-w c-light-black">Season (All)</button>
                <ul className="dropdown-widget-list dropdown-w">
                  <li>Season 1</li>
                  <li>Season 2</li>
                  <li>Season 3</li>
                  <li>Season 4</li>
                </ul>
              </div>
              <div className="dots-menu">
                <button className="dots-menu-dropdown">
                  <img src="../menu-icon.svg"></img>
                </button>
                <ul className="dots-menu-list">
                  <li>
                    <a href="#">
                      <span>
                        <img src="../edit-icon.svg"></img>
                      </span>
                      <span>Edit items</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <img src="../add-icon.svg"></img>
                      </span>
                      <span>Add items</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <img src="../add-icon.svg"></img>
                      </span>
                      <span>Add category</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <img src="../add-icon.svg"></img>
                      </span>
                      <span>Add SKUs</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-category">
          <div className="drop-category-heading">
            <h3>Womens 
              <img src="../arrow-down-red.svg"></img>
            </h3>
          </div>
          <div className="drop-card-wrap">
            <div className="sheet-name-heading">
              <h3>Core & Carryover</h3>
            </div>
            <div className="sheet-list-title">
              <ul>
                <li>Sweatshirts</li>
                <li>T - shirts</li>
                <li>Sweaters</li>
                <li>Hoodies</li>
                <li>Shirts</li>
              </ul>
            </div>
            <div className="dragdrop-table-wrap">
              <table className="full-w dragdrop-table">
                <thead>
                  <tr>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="new-sheet-colors">
              <div className="sheet-colors-heading">
                <h3>New Sheet</h3>
              </div>
              <table className="full-w dragdrop-table">
                <thead>
                  <tr>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                    <th>Style Name 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-pink text-c-pink">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-pink text-c-pink">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-brown text-c-brown">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-brown">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-brown text-c-brown">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-bordr-card">
                        
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-nava text-c-nava">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-card">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                    <td>
                      <div className="tabel-card bg-c-nava text-c-nava">
                        <h4>Road Jogger</h4>
                        <p>(Spiral Tie-Dye)</p>
                        <p>Style 1</p>
                        <p>Color 1</p>
                        <h4>$ 45</h4>
                        <p>NEW</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="table-color-picker">
                <ul>
                  <li>
                    <span className="b-box-nava bg-c-nava"></span>
                    <span>Lorem ipsum dolor sit ame</span>
                  </li>
                  <li>
                    <span className="b-box-brown bg-c-brown"></span>
                    <span>Lorem ipsum dolor sit ame</span>
                  </li>
                  <li>
                    <span className="b-box-pink bg-c-pink"></span>
                    <span>Lorem ipsum dolor sit ame</span>
                  </li>
                </ul>
              </div>
              <div className="total-sheet-wrap">
                <ul className="flex space-between">
                  <li>Total SKU (Style)</li>
                  <li>123</li>
                  <li>141</li>
                  <li>113</li>
                  <li>106</li>
                  <li>146</li>
                  <li>120</li>
                  <li>113</li>
                  <li>234</li>
                  <li>113</li>
                  <li>106</li>
                  <li>146</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Dashboard>
    )}

 export default  Merchandising