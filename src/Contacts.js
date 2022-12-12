import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { config } from './config'

function Contacts() {
  const [contacts, setContacts] = useState([])
  const navigate= useNavigate()
  const createcontact = () => {
    navigate('/portal/create/contact')
  }
  useEffect(() => {
    const fetchdata = async () => {
      let contacts = await axios.get(`${config.api}/contacts`,{
        headers:{
            "Authorization" : localStorage.getItem("crmtoken")
        }
    })
      setContacts(contacts.data)
    }
    fetchdata()
  }, [])
  return (
    <div className='container pt-5'>
      <h2 className='text-center' style={{color: "green"}}>Contacts</h2>
      <button className='btn btn-primary btn-sm' onClick={createcontact}>Create Contact</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Lead source</th>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((ct) => {
              return <tr className='table'>
                <td>{ct.name}</td>
                <td>{ct.email}</td>
                <td>{ct.mobile}</td>
                <td>{ct.leadsource}</td>
                <td>{ct.title}</td>
                <td>{ct.department}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Contacts