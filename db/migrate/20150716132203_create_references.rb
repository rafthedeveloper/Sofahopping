class CreateReferences < ActiveRecord::Migration
  def change
    create_table :references do |t|
      t.integer :referencer_id, null: false
      t.integer :referencee_id, null: false
      t.string :relationship, null: false
      t.string :experience, null: false
      t.text :description, null: false


      t.timestamps
    end

    add_index(:references, :referencer_id)
    add_index(:references, :referencee_id)
  end
end
