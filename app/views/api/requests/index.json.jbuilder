json.array! @requests do |request|
	json.id request.id
	json.location request.location
	json.arrival_date request.arrival_date
	json.departure_date request.departure_date
	json.requester_id request.requester_id
	json.requestee_id request.requestee_id
	json.message request.message
	json.num_guests request.num_guests
	json.requester_type request.requester_type
	json.status request.status
	json.created_at request.created_at
	json.updated_at request.updated_at

		json.requester_details do
			json.fname request.requester.fname
			json.lname request.requester.lname
			json.id request.requester.id
			json.avatar_url json.avatar_url asset_path(request.requester.avatar.url(:thumb))
		end

		json.requestee_details do
			json.fname request.requestee.fname
			json.lname request.requestee.lname
			json.id request.requestee.id
			json.avatar_url json.avatar_url asset_path(request.requestee.avatar.url(:thumb))
		end

end
