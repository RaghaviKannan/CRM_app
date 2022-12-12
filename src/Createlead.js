import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { config } from './config'

function Createlead() {
    const leadform = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            company: "",
            status: "New",
            mobile: "",
            description: ""
        },
        onSubmit: async (values) => {
            try {
                const user = await axios.post(`${config.api}/create/lead`, values,{
                    headers:{
                        "Authorization" : localStorage.getItem("crmtoken")
                    }
                })
                leadform.resetForm()
                alert(user.data.message)
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div className='container'>
            <h2 className='text-center' style={{ color: "green" }}>Create Lead</h2>
            <form onSubmit={leadform.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <label>First Name</label>
                        <input name="fname" onChange={leadform.handleChange} value={leadform.values.fname} type={'text'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <label>Last Name</label>
                        <input name="lname" onChange={leadform.handleChange} value={leadform.values.lname} type={'text'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <label>Email</label>
                        <input name="email" onChange={leadform.handleChange} value={leadform.values.email} type={'email'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <label>Company</label>
                        <input name="company" onChange={leadform.handleChange} value={leadform.values.company} type={'text'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <label>Status</label>
                        <br />
                        <select name="status" className='form-control' onChange={leadform.handleChange} value={leadform.values.status}>
                            <option value={"New"}>New</option>
                            <option value={"Contacted"}>Contacted</option>
                            <option value={"Qualified"}>Qualified</option>
                            <option value={"Lost"}>Lost</option>
                            <option value={"Canceled"}>Canceled</option>
                            <option value={"Confirmed"}>Confirmed</option>
                        </select>
                    </div>
                    <div className='col-lg-12'>
                        <label>Mobile</label>
                        <input name="mobile" onChange={leadform.handleChange} value={leadform.values.mobile} type={'text'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <label>Description</label>
                        <input name="description" onChange={leadform.handleChange} value={leadform.values.description} type={'text'} className='form-control'></input>
                    </div>
                    <div className='col-lg-12'>
                        <input type={"submit"} value="Create lead" className='btn btn-primary mt-2'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Createlead