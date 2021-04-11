import React,{Component} from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react'


class ContactForm extends Component{

    state={
        name:'',
        category:'',
        description:''
    }

    handleChange = (event) =>{
        const target = event.target;
        const{name,value} = target;
        this.setState({
            [name]:value
        })
    }

    handleCKeditorState = (event,editor) =>{
        const data = editor.getData();
        this.setState({
            content:data
        })
        console.log(data)
    }

    render(){
        console.log("State_, ",this.state);

        return(
    <div className="container">
      <div className="wrapper"> 
        <form className="form-group">
         <div className="form-group">
           <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}
            placeholder="Enter name" className="form-control" required/>
            </div>

            <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange}
            placeholder="Enter name" className="form-control" required/>
            </div>

            <div className="form-group">
            <label>Description</label>
         {/*   <textarea type="text" name='description' value={this.state.description} onChange={this.handleChange} 
             cols="25" rows="10" className="form-control" placeholder="content"/>   */}

            <CKEditor
                editor={ClassicEditor}
                onReady={ editor =>{

                }}
                config={
                    {
                        ckfinder:{
                            uploadUrl:'/uploads'
                        }
                    }
                }
                onChange={this.handleCKeditorState}
                />
        </div>

        <input type="submit" name="submit" className="btn btn-secondary" />

      </form>
      </div>
      </div>

        )}
    }




export default ContactForm;