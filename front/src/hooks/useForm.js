import { useState } from 'react'
import { createActivity } from '../redux/actions'
import { useDispatch } from 'react-redux'

export const useForm = (initialForm, validateForm) => {
    const [ form, setForm ] = useState(initialForm)
    const [ err, setErr ] = useState({})
    const dispatch = useDispatch()

    const handleChange =  (e) => {
        if(e.target.name === 'nation'){
           setForm((current) => {
            if(current.nation.includes(e.target.value)){
              return {
                ...current
              }
            }else{
              return {
                ...current,
                [e.target.name] : [...current.nation,e.target.value]
              }
            }
          })
        }else{
          setForm((current) => {
            return {
              ...current,
              [e.target.name] : e.target.value
            }
          }) 
        }
    }

    const handleBlur = (e) => {
      handleChange(e)
      setErr(validateForm(form))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(form)
      let errs = await validateForm(form)
      console.log(Object.keys(errs))
      if(Object.keys(errs).length === 0)
      {
        dispatch(createActivity(form))
      }else{
        setErr(errs)
        return 
      }
    }

    return {
      handleBlur,
      handleChange,
      handleSubmit,
      form,
      err
    }
}

