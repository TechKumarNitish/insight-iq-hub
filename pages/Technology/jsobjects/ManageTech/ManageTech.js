export default {
	
	async getTech () {
		try{
			const response=await get_technology.run();
			const tagData=await get_tag.data
			const techData=response.map(x=>{
				const tags=x.tag?.map(y=>tagData.find(z=>z._id===y).tag_name).join(", ")
				return{
					...x,
					tags
				}
			})
			return techData
		}catch(e){
			showAlert(e.message, "error")
		}
	}
}