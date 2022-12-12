import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from './config'

function Servicerequests() {
  const [servicerequests, setServicerequests] = useState([])
  const navigate = useNavigate()

  const createservicereq = () => {
    navigate('/portal/create/service-request')
  }
  useEffect(() => {
    const fetchdata = async () => {
      let servicerequests = await axios.get(`${config.api}/service-requests`,{
        headers:{
            "Authorization" : localStorage.getItem("crmtoken"),
        }
    })
      setServicerequests(servicerequests.data)
    }
    fetchdata()
  }, [])

  return (
    <div className='container pt-5'>
      <h2 className='text-center' style={{ color: "green" }}>Service requests</h2>
      <button className='btn btn-primary btn-sm' onClick={createservicereq}>Create Service request</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Date of request</th>
          </tr>
        </thead>
        <tbody>
          {
            servicerequests.map((sreq,index) => {
              return <tr className='table'>
                <td key={index}>{sreq.name}</td>
                <td>{sreq.email}</td>
                <td>{sreq.description}</td>
                <td>{sreq.priority}</td>
                <td>{sreq.status}</td>
                <td>{sreq.dor}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Servicerequests