import { useState } from "react"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"



type FormDataProps  ={
  name:string,
  email:string,
  department:string,
  subject:string,
  message:string,
}
const ContactForm = () => {

  const[formData , setFormData] = useState<FormDataProps>({
    name:'',
    email:'',
    department: 'deparments' ,
    subject:'',
    message:''
  })
const departments = ['Personal Department', 'Support', 'Sales', 'Marketing'];

  
  const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>{
      const {name,value} = e.target
      setFormData(prevState =>({...prevState, [name]:value}))
  }


  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formData)

  }
  return (
    <div className="max-w-2xl " >
        <form 
         onSubmit={handleSubmit}>
          <div className="flex gap-6  justify-between flex-col lg:flex-row  ">
          <FormInput
           type="text"
           label='your name(require)'
           name="name"
           value={formData.name}
           required= {true}
          onChange={handleChange}
          />
          <FormInput
           type="text"
           label='Enter your email(require)'
           name="email"
           value={formData.email}
           required= {true}
          onChange={handleChange}
          />
          </div>
          <FormInput
           type="text"
           label='subject'
           name="subject"
           value={formData.subject}
          onChange={handleChange}
          />
          <FormSelect
          label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            options={departments}/>
            <button
          type="submit"
          className="w-full mt-8 bg-amber-400 rounded-full text-white py-3  hover:bg-black transition-colors"
        >
          Send Message
        </button>
        </form>

        
    </div>
  )
}

export default ContactForm