import React from 'react';

class AddForm extends React.Component{
	userAdd = {}
	constructor(props){
		super(props)
		this.state ={
			first_name: "",
			last_name: "",
			age: 1,
			biografy: "",
			isHappy: false
		}
	}
	render(){
		return (
			<form ref={(item) => this.myForm = item}>
				<input placeholder="Ім'я" onChange={(event) => this.setState({first_name: event.target.value})}/>
				<input placeholder="Фамілія" onChange={(event) => this.setState({last_name: event.target.value})}/>
				<input placeholder="Скільки років" onChange={(event) => this.setState({age: event.target.value})}/>
				<textarea placeholder="Біографія" onChange={(event) => this.setState({biografy: event.target.value})}></textarea>
				<label htmlFor='isHappy'>Щасливий?</label>
				<input type="checkbox" id="isHappy" onChange={(event) => this.setState({isHappy: event.target.checked})}/>
				<button type="button" onClick={() =>{
					this.myForm.reset()
					this.userAdd = {
						first_name: this.state.first_name,
						last_name: this.state.last_name,
						age: this.state.age,
						biografy: this.state.biografy,
						isHappy: this.state.isHappy
					}
					if(this.props.user)
						this.userAdd.id = this.props.user.id
					
					this.props.onAdd(this.userAdd)}}>Добавить</button>
			</form>
		)
	}
}
export default AddForm