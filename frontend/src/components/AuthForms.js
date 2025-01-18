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
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-cyberpunk-pink focus:border-cyberpunk-pink sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-cyberpunk-pink focus:border-cyberpunk-pink sm:text-sm"
              required
            />
          </div>
        </>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-cyberpunk-pink focus:border-cyberpunk-pink sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-cyberpunk-pink focus:border-cyberpunk-pink sm:text-sm"
          required
        />
      </div>
      {!isLogin && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-cyberpunk-pink focus:border-cyberpunk-pink sm:text-sm"
            required
          />
        </div>
      )}
      {!isLogin && (
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-cyberpunk-pink focus:ring-cyberpunk-pink border-gray-300 rounded"
            required
          />
          <label className="ml-2 block text-sm text-gray-900">
            I agree to the terms and conditions
          </label>
        </div>
      )}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyberpunk-pink hover:bg-cyberpunk-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyberpunk-pink"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </div>
      <div className="text-sm text-center">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <button type="button" onClick={toggleForm} className="text-cyberpunk-pink hover:text-cyberpunk-blue">
              Register
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button type="button" onClick={toggleForm} className="text-cyberpunk-pink hover:text-cyberpunk-blue">
              Login
            </button>
          </p>
        )}
      </div>
    </form>

    );

}

export default AuthForms;