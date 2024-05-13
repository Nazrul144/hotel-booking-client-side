
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter'

const Contact = () => {

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div>

      <div className='ml-8'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal',  fontSize: '2.5rem' }}>
        {/* Life is simple{' '} */}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Contact Us']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
           
          />
        </span>
      </h1>
      </div>

      <section className="contact-us ml-8">
        <div className="contact-info">
        <Fade cascade damping={0.1}>
        <p className='animate__animated animate__backInDown bg-[#49699e] text-white p-8 text-justify rounded-sm '>
        Thank you for your interest in our hotel booking website. At <span className='font-bold text-red-300'>ElysianStays</span>, we highly value your preferences, feedback, and requests, and we're dedicated to providing you with exceptional service. Whether you have inquiries, suggestions, or need assistance, our team is here to help. Please find our contact information below:</p>
       </Fade>
     

          <div className="phone-email font-bold animate__animated animate__backInDown ">
          <Fade cascade damping={0.1}>
          <h3 className='text-2xl mt-12  text-pink-400 '>Phone:</h3>
            <div className='bg-[#49699e] text-white p-8 text-justify rounded-sm'>
            <p>[+8801758752528]</p>
            <h3>Email:</h3>
            <p>[nazrulislam.cse28@gmail.com]</p>
            </div>
       </Fade>
          
          </div>

          <div className="customer-service-hours mb-6 animate__animated animate__bounceInLeft">
          <Fade cascade damping={0.1}>
          <h3 className='font-bold text-2xl mt-12  text-pink-400 '>Customer Service Hours:</h3>
            <div className='bg-[#49699e] text-white p-8 text-justify rounded-sm'>
            <p>Friday - Friday: 9:00 AM - 11:00 PM [Time Zone]</p>
            <p>We don' have any off day!</p>
            </div>
       </Fade>
            
          </div>



          <div className="media-press-inquiries mb-6 font-bold animate__animated animate__fadeInLeft">
          <Fade cascade damping={0.1}>
          <h3 className='text-2xl mt-12  text-pink-400 '>Media & Press Inquiries:</h3>
            <p className='bg-[#49699e] text-white p-8 text-justify rounded-sm'>
          For media inquiries regarding our hotel booking website, press releases, or interview opportunities, please reach out to our media relations team at
           [nazrulislam@gmail.com]. We look forward to connecting with you and providing any information or assistance you may need.</p>

       </Fade>
          </div>

          <div className="connect-with-us mb-6 font-bold text-pink-400 animate__animated animate__fadeInRight">
          <Fade cascade damping={0.1}>
          <h3 className='text-2xl mt-12'>Connect With Us:</h3>
            <div className='bg-[#49699e] text-white p-8 text-justify rounded-sm'>
            <p>Stay updated on the latest news, promotions, and design inspiration by following us on social media:</p>
            <p>Facebook: [Insert Facebook Page Link]</p>
            <p>Instagram: [Insert Instagram Profile Link]</p>
            <p>Twitter: [Insert Twitter Profile Link]</p>
            </div>
       </Fade>
        
          </div>
            
          <p>Thank you for choosing us. We look forward to serving you!</p>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;