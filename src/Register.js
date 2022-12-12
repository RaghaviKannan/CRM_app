import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React from 'react'
import { config } from './config'

function Register() {
  const registerform = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      role: ""
    },
    onSubmit: async (values) => {
      try {
        const user = await axios.post(`${config.api}/user/register`, values)
        registerform.resetForm()
        alert(user.data.message)
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className='container'>
      <form onSubmit={registerform.handleSubmit}>
        <div className='row'>
          <div className='col-lg-12'>
            <label>First Name</label>
            <input name="fname" onChange={registerform.handleChange} value={registerform.values.fname} type={'text'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Last Name</label>
            <input name="lname" onChange={registerform.handleChange} value={registerform.values.lname} type={'text'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Email</label>
            <input name="email" onChange={registerform.handleChange} value={registerform.values.email} type={'email'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Password</label>
            <input name="password" onChange={registerform.handleChange} value={registerform.values.password} type={'password'} className='form-control'></input>
          </div>
          <div className='col-lg-12'>
            <label>Role</label>
            <br />
            <select name="role" className='form-control' onChange={registerform.handleChange} value={registerform.values.role}>
              <option value={""}>---</option>
              <option value={"admin"}>Admin</option>
              <option value={"employee"}>Employee</option>
              <option value={"manager"}>Manager</option>
            </select>
          </div>
          <div className='col-lg-12'>
            <input type={"submit"} value="Register" className='btn btn-primary mt-2'></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register