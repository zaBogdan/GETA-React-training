import React from 'react'
import {useFormik} from 'formik'

const AddCommentForm = ({setComments})=>{
    const formik = useFormik({
        initialValues: {
        comment: ""
        },
        onSubmit: () =>{
        setComments((prev)=>[...prev, formik.values.comment])
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>
            <input name='comment' onChange={formik.handleChange}></input>
            <button type='submit'>create post</button>
        </form>
    )
}

export default AddCommentForm