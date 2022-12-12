import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { config } from './config'

function Createcontact() {
  const contactform = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      leadsource: "None",
      title: "",
      department: ""
    },
    onSubmit: async (values) => {
      try {
        const contact = await axios.post(`${config.api}/create/contact`, values,{
          headers:{
              "Authorization" : localStorage.getItem("crmtoken")
          }
      })
        contactform.resetForm()
        alert(contact.data.message)
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className='container'>
      <h2 className='text-center' style={{ color: "green" }}>Create Contact</h2>
      <form onSubmit={contactform.handleSubmit}>
        <div className='row'>
          <div className='col-lg-12'>
            <label>Name</label>
            <input name="name" onChange={contactform.handleChange} value={contactform.values.name} type={'text'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Email</label>
            <input name="email" onChange={contactform.handleChange} value={contactform.values.email} type={'email'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Mobile</label>
            <input name="mobile" onChange={contactform.handleChange} value={contactform.values.mobile} type={'text'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Lead source</label>
            <br />
            <select name="leadsource" className='form-control' onChange={contactform.handleChange} value={contactform.values.leadsource}>
              <option value={"None"}>None</option>
              <option value={"Advertisement"}>Advertisement</option>
              <option value={"Facebook"}>Facebook</option>
              <option value={"Medium"}>Google</option>
              <option value={"Google"}>Twitter</option>
              <option value={"Employee referral"}>Employee referral</option>
              <option value={"Web research"}>Web research</option>
              <option value={"Chat"}>Chat</option>
            </select>
          </div>
          <div className='col-lg-12'>
            <label>Title</label>
            <input name="title" onChange={contactform.handleChange} type={"text"} value={contactform.values.title} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Department</label>
            <input name="department" onChange={contactform.handleChange} type={"text"} value={contactform.values.department} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <input type={"submit"} value="Create contact" className='btn btn-primary mt-2'></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Createcontact