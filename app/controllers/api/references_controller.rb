class Api::ReferencesController < ApplicationController
  def create
    @reference = Reference.new(reference_params)
    @reference.referencer_id = current_user.id
    
    if @reference.save
      render json: { message: "Successfully created your reference!" }
    else
      render json: @reference.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @reference = Reference.find(params[:id])
    @reference.destroy!
  end

  private

  def reference_params
    params.require(:reference).permit(:referencee_id, :relationship,
                                      :experience, :description)
  end
end
