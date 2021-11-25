import React, { Component } from "react";
import './contact-form.css';
import axios from '../../../axios';

class contactForm extends Component{
    state={
            firstname:'',
            lastname:'',
            email:'',
            text:''
    }


    handleSubmit = e => {
        e.preventDefault();
        
        const user = {
             firstname: this.state.firstname,
             lasttname: this.state.lastname,
             email: this.state.email,
             text: this.state.text
        };

        axios.post('/users.json', user)
        .then(response => 
            console.log(response)
        ).catch(error => console.log(error));

        this.setState({
            firstname:'',
            lastname:'',
            email:'',
            text:''
        })
    };


    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div className='name'>
                        <div className='fname'>
                            <input
                             placeholder='First name' 
                             type = 'text'  
                             value={this.state.firstname}
                             onChange={e => this.setState({firstname: e.target.value})}
                            />
                        </div>
                        <div className='lname'>
                            <input 
                            placeholder='Last name' 
                            type = 'text'  
                            value={this.state.lastname}
                            onChange={e => this.setState({lastname: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className ='email'>
                        <input placeholder='Email' 
                        type = 'email'  
                        value={this.state.email}
                        onChange={e => this.setState({email: e.target.value})} 
                        />
                    </div>
                    <div className='mext'>
                        <textarea 
                        name="text" 
                        cols="30" 
                        rows="10" 
                        placeholder='Briefly tell us what you want' 
                        className='message'  
                        value={this.state.text}
                        onChange={e => this.setState({text: e.target.value})} 
                        ></textarea>
                    </div>
                    <button type='submit' className='form-button'>Send Message</button>
                </form>
            </div>
        );
    }
}

export default contactForm;