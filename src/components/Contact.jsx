import React from 'react'

function Contact() {
  return (
    <div name='contact' className='pl-16 lg:pl-0 w-full h-full bg-[#08192f]  flex justify-center items-center  p-4'>
      <form method='POST' action="https://getform.io/f/9bd46f0b-958f-4b4f-b071-795d204ed44b" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
           <p className='text-4xl font-bold inline border-b-4  border-pink-600 text-gray-300  '>Contact</p>
           <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <span className='text-pink-600'>sadikalike7@gmail.com</span> </p>
        </div>
        <input className='bg-[#ccd6f6] p-2 ' type="text" placeholder='Name' name='name ' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email"  placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="messages"   rows="10" placeholder='Messages'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets collaborate</button>
      </form>
    </div>
  )
}

export default Contact


// import React,{useState} from 'react'

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     messages: ''
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add your form submission logic here

//     // Clear form values
//     setFormData({
//       name: '',
//       email: '',
//       messages: ''
//     });
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   return (
//     <div name='contact' className='pl-16 lg:pl-0 w-full h-full bg-[#08192f]  flex justify-center items-center  p-4'>
//       <form method='POST' action="https://getform.io/f/9bd46f0b-958f-4b4f-b071-795d204ed44b" onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
//         <div className='pb-8'>
//            <p className='text-4xl font-bold inline border-b-4  border-pink-600 text-gray-300  '>Contact</p>
//            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <span className='text-pink-600'>irshadalike10@gmail.com</span> </p>
//         </div>
//         <input className='bg-[#ccd6f6] p-2 ' 
//         type="text"
//          placeholder='Name'
//           name='name'  
//          value={formData.name}
//           onChange={handleChange}  />
//         <input className='my-4 p-2 bg-[#ccd6f6]'
//          type="email"  
//          placeholder='Email' 
//          name='email'
//          value={formData.email}
//          onChange={handleChange}  />
//         <textarea className='bg-[#ccd6f6] p-2'
//          name="messages"   rows="10" 
//          placeholder='Messages'
//          value={formData.messages}
//          onChange={handleChange} ></textarea>
//         <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets collaborate</button>
//       </form>
//     </div>
//   )
// }

// export default Contact
