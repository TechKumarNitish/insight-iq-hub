export default {

	async myFun2 () {
		try{
			const params=[
				{
					"fullName":user_name.text,
					"email":user_email.text,
					"password":user_password.text,
					"accountType":user_role.selectedOptionValue
				}
			]
			const response = await add_user.run(params);
			if(response.error)
				throw new Error(JSON.stringify(response));
			showAlert("User added successfully!", "success");
			await get_user.run()
		}catch(e){
			showAlert(e.message, "error");
		}
	}
}