export default {

	async deleteUser () {
		try{
			const id=Table1.triggeredRow._id
			
			let response = await delete_user.run({id});
			if(response.error)
				throw new Error(JSON.stringify(response));
			
			response = await delete_profile.run({id});
			if(response.error)
				throw new Error(JSON.stringify(response));
			
			response = await delete_mentor_detail.run({id});
			if(response.error)
				throw new Error(JSON.stringify(response));
			
			showAlert("deleted successfully!", "success");
			await get_user.run()
		}catch(e){
			showAlert(e.message, "error");
		}
	}
}