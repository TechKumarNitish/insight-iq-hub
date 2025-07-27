export default {
	async getUserData(){
		try{
			const response=await get_user.run();
			const userData=response.map(x=>{
				return{
					...x,
					...x.profile,
					userId:x._id,
					profileId:x.profile._id
				
				}
			})
			return userData
		}catch(e){
			showAlert(e.message, "error")
		}
	},

	// async deleteUser () {
		// try{
			// const id=Table1.triggeredRow._id
			// 
			// let response = await delete_user.run({id});
			// if(response.error)
				// throw new Error(JSON.stringify(response));
			// 
			// response = await delete_profile.run({id});
			// if(response.error)
				// throw new Error(JSON.stringify(response));
			// 
			// showAlert("deleted successfully!", "success");
			// await get_user.run()
		// }catch(e){
			// showAlert(e.message, "error");
		// }
	// }
}