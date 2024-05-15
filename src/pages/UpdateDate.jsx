import React, { useEffect, useState } from 'react';
import moment from "moment";
import DatePicker from "react-datepicker";
const UpdateDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    //setToday date
    const todayDate = moment().format("YYYY-MM-DD");
    const [bookData, setBookData] = useState('')



    // Handle update:
    const handleUpdate = (e) => {
        e.preventDefault()
        const date = startDate
        console.log(date);

         fetch(`${import.meta.env.VITE_API_URL}/bookData/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ status: "confirm" })

        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              // Update......
              // const remaining = bookData.filter( date => date._id !== id);
              // const updated = bookData.find(data => data._id === id);
              // updated.status = "confirm"
              // const newDate = [updated, ...remaining];
              // setBookData(newDate)

            }
          })

    }




    return (
        <div>
            <h1 className='font-bold text-2xl mb-4'>Update booking date:</h1>
            <div>
                

            </div>
        </div>
    );
};

export default UpdateDate;