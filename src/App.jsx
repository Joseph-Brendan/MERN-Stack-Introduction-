import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            email:'',
            phoneNumber:'',
            nin:'',
            bvn:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.changeNin = this.changeNin.bind(this)
        this.changeBvn = this.changeBvn.bind(this)
        this.detailSubmit = this.detailSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePhoneNumber(event){
        this.setState({
            phoneNumber:event.target.value
        })
    }

    changeNin(event){
        this.setState({
            nin:event.target.value
        })
    }

    changeBvn(event){
        this.setState({
            bvn:event.target.value
        })
    }

    detailSubmit(event){
        event.preventDefault()

        const citizen = {
            fullName : this.state.fullName,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber,
            nin:this.state.nin,
            bvn:this.state.bvn
        }
        
        console.log(citizen)
        axios.post('http://localhost:4000/central/create', citizen)
            .then(response => console.log(response.data))
            

        this.setState({
            fullName:'',
            email:'',
            phoneNumber:'',
            nin:'',
            bvn:''
        })

        
    }

    render() { 
        return ( 
            <div>
                <div className='container'>
                    <div className='top-bar'></div>
                    <div className='row '>
                        <div className='col-6'>
                            <form onSubmit={this.detailSumbit}>
                                
                                <input type='text' 
                                placeholder='Enter Full Name'
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className='form-control form-group'
                                />

                                <input type='text' 
                                placeholder='Enter Email Address'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className='form-control form-group'
                                />

                                <input 
                                placeholder='Enter Phone Number'
                                onChange={this.changePhoneNumber}
                                value={this.state.phoneNumber}
                                className='form-control form-group'
                                />

                                <input 
                                placeholder='Enter NIN'
                                onChange={this.changeNin}
                                value={this.state.nin}
                                className='form-control form-group'
                                />

                                <input 
                                placeholder='Enter BVN'
                                onChange={this.changeBvn}
                                value={this.state.bvn}
                                className='form-control form-group'
                                />


                                <input type='submit' className='btn btn-block' value='Submit' />                      
                            </form>
                        </div>

                        <div className='col-6'>
                            <div >
                                <img className='ml-5 mt-5' src='https://res.cloudinary.com/mgrnt/image/upload/v1595950565/download_1_viwbby.jpg' alt='Nigeria'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;