import React from 'react';
import Header from './componenst/header';
import Users from './componenst/users';
import AddForm from './componenst/addForm';
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users?page=1"

class Elements extends React.Component{
	constructor(props){
		super(props)

		axios.get(baseUrl).then((response) => {
			this.setState({users: response.data.data})
		})

		this.state ={
			users: [
				{

				}
			]
		}
		this.addUser = this.addUser.bind(this)
		this.editUser = this.editUser.bind(this)
		this.deleteUser = this.deleteUser.bind(this)
	}
	render(){
		return (
			<div>
				<Header text="Список користувачів "/> 
				<main>
				<Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
				</main>
				<aside>
				<AddForm onAdd={this.addUser}/>
				</aside>
			</div>
		)
	}
	deleteUser(id){
		this.setState({
			users: this.state.users.filter((item)=> item.id !== id)
		})
	}
	editUser(user){
		let allUsers = this.state.users
		allUsers[user.id - 1] = user

		this.setState({users: []}, () => {
			this.setState({users: [...allUsers]})
		})
	}

	addUser(user){
		const id = this.state.users.length + 1
		this.setState({users: [...this.state.users, {id, ...user}]})
	}
}

export default Elements