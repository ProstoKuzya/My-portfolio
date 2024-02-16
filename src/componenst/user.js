import React from 'react';
import AddForm from './addForm';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"

class User extends React.Component{
	user = this.props.user
	constructor(props){
		super(props)
		this.state ={
			editForm: false
		}
	}
	render(){
		return (
			<div className='user' >
				<IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className='delete-icon'/>
				<IoHammerSharp onClick={() => this.setState({editForm: !this.state.editForm})} className='edit-icon'/>
				<h3>{this.user.first_name} {this.user.last_name}</h3>
				<img src={this.user.avatar}></img>
				<p>{this.user.email}</p>
				<p>{this.user.biografy}</p>
				<b>{this.user.isHappy ? "щасливий :)" : "не дуже :("}</b>
				{this.state.editForm && <AddForm user={this.user} onAdd ={this.props.onEdit}/>}
			</div>
		)
	}
}
export default User