import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { MdCancel } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
import moment from "moment";

const MyBooking = () => {
  const { user } = useContext(AuthContext)
  const [bookData, setBookData] = useState([])

  //State to manage time:
  const [startDate, setStartDate] = useState(new Date());
  //setToday date
  const todayDate = moment().format("YYYY-MM-DD");



  console.log(startDate);


  //data fetching:

  useEffect(() => {
    getBookData()
  }, [user])

  const getBookData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookData/${user?.email}`)
    setBookData(data)
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to cancel the booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/bookData/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deleteCount > 0) {
              const remaining = bookData.filter(booking => booking._id !== id)
              setBookData(remaining)
            }
          })
        Swal.fire({
          text: "Your booking has been canceled!.",
          icon: "success"
        });
        location.reload()
      }
    });
  } //end block



  // Handle update:
  const handleUpdate = (e) => {
    e.preventDefault()
    const date = startDate
    console.log(date);

    //  fetch(`${import.meta.env.VITE_API_URL}/bookData/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify({ status: "confirm" })

    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if (data.modifiedCount > 0) {
    //      //Updating....
    //       const remaining = bookData.filter( date => date._id !== id);
    //       const updated = bookData.find(data => data._id === id);
    //       updated.status = "confirm"
    //       const newDate = [updated, ...remaining];
    //       setBookData(newDate)

    // //     }
    //   })

  }





  //Handling feedback:
  const handleFeedback = (id) => {
    Swal.fire({
      title: "Share your feedback",
      html: `
        <form id="feedbackForm" class="flex flex-col gap-4">
          <label for="username" class="mb-1">Username:</label>
          <input type="text" id="username" value="${user?.displayName || 'Your name'}" name="username" class="border border-gray-300 rounded-md p-2 h-10">
    
          <label for="rating" class="mb-1">Rating:</label>
          <select id="rating" name="rating" class="border border-gray-300 rounded-md p-2 h-10">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
    
          <label for="comment" class="mb-1">Comment:</label>
          <textarea id="comment" name="comment" class="border border-gray-300 rounded-md p-2 h-20"></textarea>
    
          <label for="timestamp" class="mb-1">Timestamp:</label>
          <input type="text" id="timestamp" name="timestamp" class="border border-gray-300 rounded-md p-2 h-10" value="${new Date().toLocaleString()}">
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      focusConfirm: false,


      preConfirm: async () => {
        // Handle form submission here
        const formData = new FormData(document.getElementById('feedbackForm'));
        const username = formData.get('username');
        const rating = formData.get('rating');
        const comment = formData.get('comment');
        const timestamp = formData.get('timestamp');
        const bookId = id

        const UserReviews = {
          username, rating, comment, timestamp, bookId
        };

        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, UserReviews);
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }

        console.log(UserReviews);
        // You can perform further validation and submit the form data as required
        console.log("Form submitted:", {
          username,
          rating,
          comment,
          timestamp
        });
      }

    });


  }


  return (
    <div>
      <Helmet>
        <title>Modern-Hotel | MyBooking</title>
      </Helmet>
      <div className='myBooking mt-20 lg:mt-8'>
        <section className='container px-4 mx-auto pt-12'>
          <div className='flex items-center gap-x-3'>
            <h2 className='text-lg font-medium text-red-500'>My Booking Status:</h2>

            <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
              {bookData.length} Booked
            </span>
          </div>

          <div className='flex flex-col mt-6'>
            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-green-200'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 px-4 text-sm text-left rtl:text-right text-gray-500 font-manrope font-bold'
                        >
                          <div className='flex items-center gap-x-3'>
                            <span>Room Name</span>
                          </div>
                        </th>

                        <th
                          scope='col'
                          className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500 font-manrope font-bold'
                        >
                          <span>Date of booking</span>
                        </th>

                        <th
                          scope='col'
                          className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500 font-manrope font-bold'
                        >
                          <button className='flex items-center gap-x-2'>
                            <span>Provide feedback</span>
                          </button>
                        </th>

                        <th
                          scope='col'
                          className='px-4 py-3.5 text-s text-left rtl:text-right text-gray-500 font-manrope font-bold'
                        >
                          Update Date
                        </th>

                        <th className='px-4 py-3.5 text-sm text-left rtl:text-right text-gray-500 font-manrope font-bold'>
                          Booking Cancel
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 '>
                      {
                        bookData.map(singleBookData => <tr key={singleBookData._id}>
                          <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                            {singleBookData.title}
                          </td>

                          <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                            {new Date(singleBookData.date).toLocaleDateString()}
                          </td>

                          <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                            User Feedback:
                            <button onClick={() => handleFeedback(singleBookData.roomId)}><MdFeedback className='font-extrabold text-xl ml-12' /></button>
                          </td>
                          <td className='px-4 py-4 text-sm whitespace-nowrap'>
                            <div className='flex items-center gap-x-2'>
                              {/* Open the modal using document.getElementById('ID').showModal() method */}
                              <div className='flex items-center gap-x-2'>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Update Date</button>
                                <dialog id="my_modal_1" className="modal">
                                  <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <DatePicker className="border p-2 rounded-lg " selected={startDate} onChange={(date) => setStartDate(date)} />
                                    <div className="modal-action">
                                      <form onSubmit={handleUpdate} method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button type="submit" className="btn">Ok</button>
                                      </form>
                                      {/* Close button to close the modal without submitting */}
                                      <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Cancel</button>
                                    </div>
                                  </div>
                                </dialog>
                              </div>

                            </div>
                          </td>
                          <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                            <button onClick={() => handleDelete(singleBookData._id)}
                              title='Mark Complete'
                              className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
                            >
                              <MdCancel className='font-extrabold text-2xl ml-12' />
                            </button>
                          </td>

                        </tr>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyBooking;