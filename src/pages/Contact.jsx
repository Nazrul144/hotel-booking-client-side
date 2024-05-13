
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter'

const Contact = () => {

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div>

      <div className='ml-8'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
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
        <p className='animate__animated animate__backInDown'>Thank you for your interest in  Jute & wooden Crafts. We value your demand, feedback, and requests, and we're here to assist you in any way we can. Please find our contact information below:</p>
       </Fade>
     

          <div className="phone-email font-bold animate__animated animate__backInDown ">
          <Fade cascade damping={0.1}>
          <h3>Phone:</h3>
            <p>[+8801758752528]</p>
            <h3>Email:</h3>
            <p>[nazrulislam.cse28@gmail.com]</p>
       </Fade>
          
          </div>

          <div className="customer-service-hours mb-6 animate__animated animate__bounceInLeft">
          <Fade cascade damping={0.1}>
          <h3 className='font-bold'>Customer Service Hours:</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM [Time Zone]</p>
            <p>Saturday & Sunday: Closed</p>
       </Fade>
            
          </div>



          <div className="media-press-inquiries mb-6 font-bold animate__animated animate__fadeInLeft">
          <Fade cascade damping={0.1}>
          <h3>Media & Press Inquiries:</h3>
            <p>Members of the media seeking information about  Jute & wooden Crafts, press releases, or interview opportunities, please contact our media relations team at [Insert Email Address].</p>

       </Fade>
          </div>

          <div className="connect-with-us mb-6 font-bold text-sky-400 animate__animated animate__fadeInRight">
          <Fade cascade damping={0.1}>
          <h3>Connect With Us:</h3>
            <p>Stay updated on the latest news, promotions, and design inspiration by following us on social media:</p>
            <p>Facebook: [Insert Facebook Page Link]</p>
            <p>Instagram: [Insert Instagram Profile Link]</p>
            <p>Twitter: [Insert Twitter Profile Link]</p>
       </Fade>
        
          </div>
            
          <p>Thank you for choosing Regal House. We look forward to serving you!</p>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;