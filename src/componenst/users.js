import React from 'react';
import User from './user';




class Users extends React.Component{

	render(){
		if(this.props.users.length > 0){
			return (
				<div>
					{this.props.users.map((item) => (
							<User onEdit={this.props.onEdit} onDelete={this.props.onDelete} user={item} key={item.id}/>
						))
					}
				</div>
			)
		} else{
			return <div className='user'>користувачів не знайдено</div>
		}
		
	}
}
export default Users
