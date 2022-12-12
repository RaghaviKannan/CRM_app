import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from './config'

function Dashboard() {
    const [data,setData]=useState({})
    useEffect(() => {
        const fetchdata = async () => {
          let dashdata = await axios.get(`${config.api}/dashboard`,{
            headers:{
                "Authorization" : localStorage.getItem("crmtoken")
            }
        })
          setData(dashdata.data)
        }
        fetchdata()
      }, [])
    return (
        <>
            <div className='container'>
                <h2 className='pt-3 text-center fst-italic'>Dashboard📊</h2>
                <div className='row py-5'>
                    <div className='col-lg-4 mt-5'>
                        <div className="card" style={{ width: "18rem", background: "#7de3e8" }}>
                            <div className="card-body">
                                <h4 className="card-title">Leads</h4>
                                <p className="card-text">Total number of leads</p>
                                <div className='btn btn-danger'>{data.leadlength}</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-5'>
                        <div className="card" style={{ width: "18rem", background: "#7de3e8" }}>
                            <div className="card-body">
                                <h4 className="card-title">Service Requests</h4>
                                <p className="card-text">Total number of Service requests</p>
                                <div className='btn btn-danger'>{data.sreqlength}</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-5'>
                        <div className="card" style={{ width: "18rem", background: "#7de3e8" }}>
                            <div className="card-body">
                                <h4 className="card-title">Contacts</h4>
                                <p className="card-text">Total number of contacts</p>
                                <div className='btn btn-danger'>{data.contlength}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard