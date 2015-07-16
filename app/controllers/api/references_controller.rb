class Api::ReferencesController < ApplicationController
  def create

    @reference = current_user.written_references.new(reference_params)

    if @reference.save
      render json: { message: "Successfully created your reference!" }
    else
      render json: @reference.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @reference = current_user.written_references.find(params[:id])
    @reference.destroy!
    render json: { message: "Successfully deleted your reference!" }
  end

  private

  def reference_params
    params.require(:reference).permit(:referencee_id, :relationship,
                                      :experience, :description)
  end
end
