import React, { useState, useEffect, omponent } from 'react';
import ReactPaginate from 'react-paginate';
import { DateRange } from 'react-date-range';
import { customFetch } from '../Helper/api-helper';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../Pagination.css'


export default function Dashboard() {

  const [detail, setDetail] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [totalItemsCount, setTotalItemsCount] = useState(10);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const [app, setApp] = useState([]);
  useEffect(() => {
    gettabledata();
    apphandle();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [itemsCountPerPage,activePage,startDate,endDate]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber)
  }

  const pagecountchange = (e) => {
    
    setItemsCountPerPage(e.target.value)}

  const changedate =(dates,end)=>{
    setStartDate(format(dates[0], "yyyy-MM-dd"));
    setEndDate(format(dates[1], "yyyy-MM-dd"));
    


  }


  const gettabledata = async () => {
  
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    var res = await customFetch(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startDate || '2022-04-01'}&todate=${endDate || '2022-08-24'}&page=${activePage}&limit=${itemsCountPerPage}`);

    setTotalItemsCount(res.data.total_documents);
    setDetail(res.data.data);
  }

  const apphandle = async () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    var res = await customFetch(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${startDate || '2022-04-01'}&todate=${endDate || '2022-08-24'}&page=${activePage}&limit=${itemsCountPerPage}`);

    setApp(res.data);
  }
  return (
    <div>
      <div style={{ backgroundColor: "#161C32" }} className="container-fluid">
        <div className="row flex-nowrap">
          <div style={{ backgroundColor: "#283046" }} className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline"><img className='px-2' src='logo.png' width={'130px'} ></img></span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i class="fs-4 bi bi-person"/><span className="ms-1 d-none d-sm-inline">Wow User</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi-camera-video" /> <span className="ms-1 d-none d-sm-inline">Video Clips</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi-exclamation-triangle" /> <span className="ms-1 d-none d-sm-inline">Reported Content</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi-file-bar-graph" /> <span className="ms-1 d-none d-sm-inline">Category</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi-file-earmark-text" /> <span className="ms-1 d-none d-sm-inline">FAQ</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi-bell" /> <span className="ms-1 d-none d-sm-inline">Push Notification</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">Internal User</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">Explict Content</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">Feedback Message</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">KYC</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">Coin Purchased</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">Free Coin </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0 text-white px-3 rounded">
                    <i className="fs-4 bi bi bi-person-plus" /> <span className="ms-1 d-none d-sm-inline">User Deleted</span>
                  </a>
                </li>
              
              </ul>


            </div>
          </div>
          <div className="col py-3">

            <div style={{ backgroundColor: "#283046" }}class="container px-4 py-4">
              <div class="row">
                <div class="col-md-4">
                  <div class="d-flex align-items-center text-white">
                    <div class="icon-box px-3 py-2 rounded-circle bg-light">
                      <i class="fs-5 bi bi-arrow-down-circle text-black"></i>
                    </div>
                    <div class="line px-2"></div>
                    <div class="content">
                      <h4>{app.totalInstall}</h4>
                      <p>App Installed</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="d-flex align-items-center text-white">
                    <div class="icon-box px-3 py-2 rounded-circle bg-light">
                      <i class="fs-5 bi bi-circle text-black"></i>
                    </div>
                    <div class="line px-2"></div>
                    <div class="content">
                      <h4>{app.activeinstall}</h4>
                      <p>Active Installs</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="d-flex align-items-center text-white">
                    <div class="icon-box px-3 py-2 rounded-circle bg-light">
                      <i class="fs-5 bi bi-arrow-left-right text-black"></i>
                    </div>
                    <div class="line px-2"></div>
                    <div class="content">
                      <h4>{app.churn}%</h4>
                      <p>Churn Rate</p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="row py-3">
                <div class="col-md-4">
                  <div class="d-flex align-items-center text-white">
                    <div class="icon-box px-3 py-2 rounded-circle bg-light">
                      <i class="fs-5 bi bi-globe-americas text-black"></i>
                    </div>
                    <div class="line px-2"></div>
                    <div class="content">
                      <h4>{app.totaluninstall}</h4>
                      <p>App Uninstalled</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="d-flex align-items-center text-white">
                    <div class="icon-box px-3 py-2 rounded-circle bg-light">
                      <i class="fs-5 bi bi-check2-circle text-black"></i>
                    </div>
                    <div class="line px-2"></div>
                    <div class="content">
                      <h4>{app.aliveappusers}</h4>
                      <p>Alive App Users</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="d-flex align-items-center text-white">
                    <div class="icon-box px-3 py-2 rounded-circle bg-light">
                      <i class="fs-5 bi bi-arrow-repeat text-black"></i>
                    </div>
                    <div class="line px-2"></div>
                    <div class="content">
                      <h4>{app.alivechurn}%</h4>
                      <p>Alive Churn Rate</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div style={{ backgroundColor: "#283046" }} class="container my-4">
              <div class="row py-3">
                <div class='col-md-2 text-white '>Show Entries per page</div>
                <div class="col-md-2 px-0">
                  <div class="float-lg-left">
                    <select id="select" value={itemsCountPerPage} onChange={pagecountchange}>
                      <option value="10">10</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="500">500</option>
                      <option value="1000">1000</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="float-sm-right">
                    <DateRangePicker
                      format="yyyy-MM-dd"
                      placeholder="Select Date Range" className='text-right' onOk={changedate} />
                  </div>
                </div>
              </div>
            
 
  
            <div style={{ backgroundColor: "#283046" }} class="table-container">
              <table class="responsive-table1">
                <thead>
                    <tr className='px-2 py-2'>
                      <th className='px-2 py-2' scope="col">Date</th>
                      <th className='px-2 py-2' scope="col">Day Install</th>
                      <th className='px-2 py-2' scope="col">Platform</th>
                      <th className='px-2 py-2' scope="col">Day Uninstall</th>
                      <th className='px-2 py-2' scope="col">Platform</th>
                      <th className='px-2 py-2' scope='col'>Churn Rate</th>
                      <th className='px-2 py-2' scope='col'>Churn Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.map((detail, index) => (
                    <tr key={detail.id}>
                      <td className='px-2 py-2'>{detail.created_At}</td>
                      <td className='px-2 py-2'>{detail.ios_install + detail.android_install}</td>
                      <td className='px-2 py-2'><i class="fa fa-android" aria-hidden="true"></i>{detail.android_install}<br></br><i class="fa fa-apple" aria-hidden="true"></i>{detail.ios_install}</td>
                      <td className='px-2 py-2'>{detail.ios_uninstall + detail.android_uninstall}</td>
                      <td className='px-2 py-2'><i class="fa fa-android" aria-hidden="true"></i>{detail.android_uninstall}<br></br><i class="fa fa-apple" aria-hidden="true"></i>{detail.ios_uninstall}</td>
                      <td className='px-2 py-2'>{detail.ios_churn + detail.android_churn}%</td>
                      <td className='px-2 py-2'><i class="fa fa-android" aria-hidden="true"></i>{detail.android_churn}%<br></br><i class="fa fa-apple" aria-hidden="true"></i>{detail.ios_churn}%</td>

                    </tr>
                  ))}






                </tbody>
              </table>
              <Pagination
                className="text-white"
                style={{ Color: "#283046" }}
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />

  

            </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
