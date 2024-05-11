import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement the logic to submit the email to your backend or email service provider
        console.log(`Subscribed with email: ${email}`);
        // Clear the input field after submission
        setEmail('');
    };

    return (
        <div className='mt-16 mb-6'>
             <div className='w-1/2 mx-auto border-[1px] border-gray-400 text-center rounded-lg p-6'>
             <h2 className='font-manrope font-bold text-2xl'>Get new domains to your inbox</h2>
             <p className='font-semibold'>Please subscribe with email and name</p>
            <form onSubmit={handleSubmit}>
                <input className='p-3 border-[1px] border-purple-400 rounded-lg mt-6'
                    type="email"
                    placeholder="Enter your name"
                    value={email}
                    onChange={handleInputChange}
                    required
                /> <br /> <br />
                <input className='p-3 border-[1px] border-purple-400 rounded-lg'
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleInputChange}
                    required
                /> <br />
                <button type="submit" className='btn btn-secondary mt-4 font-bold'>Subscribe</button>
            </form>
            <p className='font-semibold'>Stay updated with our latest news, deals, and exclusive offers!</p>
             </div>
        </div>
    );
};

export default NewsletterSignup;
