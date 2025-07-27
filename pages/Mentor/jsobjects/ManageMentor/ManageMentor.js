export default {
	async getMentor () {
		try{
			const response=await get_user.run();
			const techData=get_tech.data
			const mentorData=response.map(x=>{
				const area_Of_Expertise=x.profile.areaOfExpertise?.map(y=>techData.find(w=>w._id==y).tech_name).join(", ");
				return {
					userId:x._id,
					profileId:x.profile._id,
					...x,
					...x.profile,
					area_Of_Expertise
				}
			})
			return mentorData
		}catch(e){
			showAlert(e.message, "error")
		}
	},
	



}