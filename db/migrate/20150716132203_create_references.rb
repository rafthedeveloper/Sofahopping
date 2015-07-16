class CreateReferences < ActiveRecord::Migration
  def change
    create_table :references do |t|
      t.integer :referencer, null: false
      t.integer :referencee, null: false
      t.string :relationship, null: false
      t.string :experience, null: false
      t.text :description, null: false


      t.timestamps
    end

    add_index(:references, :referencer)
    add_index(:references, :referencee)
  end
end
