import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from './config'

function Leads() {
  const [leads, setLeads] = useState([])
  const navigate = useNavigate()
  const createlead = () => {
    navigate('/portal/create/lead')
  }
  useEffect(() => {
    const fetchdata = async () => {
      let leads = await axios.get(`${config.api}/leads`,{
        headers:{
            "Authorization" : localStorage.getItem("crmtoken")
        }
    })
      setLeads(leads.data)
    }
    fetchdata()
  }, [])
  return (
    <div className='container pt-5'>
      <h2 className='text-center' style={{color: "green"}}>Leads</h2>
      <button className='btn btn-primary btn-sm' onClick={createlead}>Create Lead</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Mobile</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            leads.map((lead) => {
              return <tr className='table'>
                <td>{lead.fname}</td>
                <td>{lead.lname}</td>
                <td>{lead.email}</td>
                <td>{lead.company}</td>
                <td>{lead.mobile}</td>
                <td>{lead.description}</td>
                <td>{lead.status}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Leads