import React from 'react'
import {useFormik} from 'formik'

const AddPostForm = ({setPosts})=>{
    const formik = useFormik({
        initialValues: {
            text: "",
            imageUrl: ""
        },
        onSubmit: () =>{
            setPosts((prev)=>[...prev, {...formik.values}])
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>
            <input name='text' onChange={formik.handleChange}></input>
            <input name='imageUrl' onChange={formik.handleChange}></input>
            <button type='submit'>create post</button>
        </form>
    )
}

export default AddPostForm