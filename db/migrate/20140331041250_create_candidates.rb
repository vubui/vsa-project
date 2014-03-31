class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|
      t.string :name
      t.string :major
      t.integer :class

      t.timestamps
    end
  end
end
