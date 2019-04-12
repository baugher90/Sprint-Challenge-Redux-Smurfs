import React from 'react'

class SmurfForm extends React.Component{
    state = {
        name:'',
        age:'',
        height:''
    }
    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.props.addSmurf({
            name:this.state.name,
            age:this.state.age,
            height:this.state.height
        })
        this.setState({name:'',age:'',height:''})
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="height"
                    placeholder="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default SmurfForm;