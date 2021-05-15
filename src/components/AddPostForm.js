import React from 'react'
import {useFormik} from 'formik'
import {MDBInput,MDBCard,MDBCardBody,MDBBtn,MDBCol} from 'mdbreact';

const AddPostForm = ({setPosts})=>{
    const formik = useFormik({
        initialValues: {
            text: "",
            imageUrl: ""
        },
        onSubmit: () =>{
            console.log(formik.values)
            setPosts((prev)=>[...prev, {...formik.values}])
        }
    })
    return(
        <MDBCol md="6">
            <MDBCard>
                <MDBCardBody>
                    <form onSubmit={formik.handleSubmit}>
                        <p className="h4 text-center py-4">Add a new post</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Add an image to your post"
                            icon="image"
                            group
                            name="imageUrl"
                            onChange={formik.handleChange}
                        />
                        <MDBInput 
                            name="text" 
                            type="textarea" 
                            onChange={formik.handleChange} 
                            rows="4" 
                            label="What are you doing?" 
                            icon="pencil-alt"/>
                        </div>
                        <div className="text-center py-4 mt-3">
                        <MDBBtn color="cyan" type="submit">
                            Post
                        </MDBBtn>
                        </div>
                    </form>
                </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
}

export default AddPostForm