class Api::ReferencesController < ApplicationController
  def create
    @reference = Reference.new(reference_params)

    if @reference.save
    else
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
