class CreateTransactions < ActiveRecord::Migration[7.1]
  def change
    create_table :transactions do |t|
      t.float :amount
      t.string :category
      t.text :description

      t.timestamps
    end
  end
end
