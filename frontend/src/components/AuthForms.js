import React, { useState } from 'react';   

const AuthForms = ({ isLogin, toggleForm }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });
    const  handleChange = (e) =>{
        const { name,value,type,checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const hendleSubmit = (e) =>{
        e.preventDefault();

    };


    return(

        <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
                    <>
                    
                    
                    
                    </>
                )
    
    
            }
        )



        </form>



};