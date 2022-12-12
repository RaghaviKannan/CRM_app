import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { config } from './config'

function Updateservicereq() {
  useEffect(() => {
    const fetchdata = async () => {
      let servicerequests = await axios.get(`${config.api}/service-request/:servicereqid`,{
        headers:{
            "Authorization" : localStorage.getItem("crmtoken"),
        }
    })
      console.log(servicerequests)
    }
    fetchdata()
  }, [])
  // const servicereqform = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     description: "",
  //     priority: "Low",
  //     status: "New",
  //     dor: Date()
  //   },
  //   onSubmit: async (values) => {
  //     try {
  //       const servicerequest = await axios.post(`${config.api}/create/service-request`, values, {
  //         headers: {
  //           "Authorization": localStorage.getItem("crmtoken")
  //         }
  //       })
  //       servicereqform.resetForm()
  //       alert(servicerequest.data.message)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // })
  return (
    <div className='container'>
      {/* <h2 className='text-center' style={{ color: "green" }}>Create Service request</h2>
      <form onSubmit={servicereqform.handleSubmit}>
        <div className='row'>
          <div className='col-lg-12'>
            <label>Name</label>
            <input name="name" onChange={servicereqform.handleChange} value={servicereqform.values.name} type={'text'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Email</label>
            <input name="email" onChange={servicereqform.handleChange} value={servicereqform.values.email} type={'email'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Request description</label>
            <input name="description" onChange={servicereqform.handleChange} value={servicereqform.values.description} type={'text'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Priority</label>
            <br />
            <select name="priority" className='form-control' onChange={servicereqform.handleChange} value={servicereqform.values.priority}>
              <option value={"Low"}>Low</option>
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
            </select>
          </div>
          <div className='col-lg-12'>
            <label>Status</label>
            <br />
            <select name="status" className='form-control' onChange={servicereqform.handleChange} value={servicereqform.values.status}>
              <option value={"New"}>New</option>
              <option value={"In Progress"}>In Progress</option>
              <option value={"On hold"}>On hold</option>
              <option value={"Closed"}>Closed</option>
              <option value={"Canceled"}>Canceled</option>
            </select>
          </div>
          <div className='col-lg-12'>
            <label>Date of Request</label>
            <input name="dor" onChange={servicereqform.handleChange} value={new Date()} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <input type={"submit"} value="Create Service request" className='btn btn-primary mt-2'></input>
          </div>
        </div>
      </form> */}
    </div>
  )
}

export default Updateservicereq