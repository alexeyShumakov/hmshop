# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170315060209) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_admins_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree
  end

  create_table "banners", force: :cascade do |t|
    t.string   "url"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "carts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "title",             null: false
    t.string   "slug",              null: false
    t.string   "icon_file_name"
    t.string   "icon_content_type"
    t.integer  "icon_file_size"
    t.datetime "icon_updated_at"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "parent_id"
    t.integer  "sort_order"
    t.index ["slug"], name: "index_categories_on_slug", unique: true, using: :btree
  end

  create_table "category_hierarchies", id: false, force: :cascade do |t|
    t.integer "ancestor_id",   null: false
    t.integer "descendant_id", null: false
    t.integer "generations",   null: false
    t.index ["ancestor_id", "descendant_id", "generations"], name: "category_anc_desc_idx", unique: true, using: :btree
    t.index ["descendant_id"], name: "category_desc_idx", using: :btree
  end

  create_table "collections", force: :cascade do |t|
    t.string   "title",              null: false
    t.string   "slug",               null: false
    t.string   "description"
    t.string   "cover_file_name"
    t.string   "cover_content_type"
    t.integer  "cover_file_size"
    t.datetime "cover_updated_at"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["slug"], name: "index_collections_on_slug", unique: true, using: :btree
  end

  create_table "collections_products", id: false, force: :cascade do |t|
    t.integer "collection_id"
    t.integer "product_id"
    t.index ["collection_id"], name: "index_collections_products_on_collection_id", using: :btree
    t.index ["product_id"], name: "index_collections_products_on_product_id", using: :btree
  end

  create_table "history_items", force: :cascade do |t|
    t.integer  "cart_id"
    t.integer  "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cart_id"], name: "index_history_items_on_cart_id", using: :btree
    t.index ["product_id"], name: "index_history_items_on_product_id", using: :btree
  end

  create_table "line_items", force: :cascade do |t|
    t.integer  "product_id"
    t.integer  "cart_id"
    t.decimal  "price",      precision: 14, scale: 2, default: "0.0"
    t.integer  "count",                               default: 1,     null: false
    t.datetime "created_at",                                          null: false
    t.datetime "updated_at",                                          null: false
    t.integer  "order_id"
    t.index ["cart_id"], name: "index_line_items_on_cart_id", using: :btree
    t.index ["order_id"], name: "index_line_items_on_order_id", using: :btree
    t.index ["product_id"], name: "index_line_items_on_product_id", using: :btree
  end

  create_table "orders", force: :cascade do |t|
    t.string   "email"
    t.string   "address"
    t.string   "phone"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pictures", force: :cascade do |t|
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "pictures_products", id: false, force: :cascade do |t|
    t.integer "picture_id"
    t.integer "product_id"
    t.index ["picture_id"], name: "index_pictures_products_on_picture_id", using: :btree
    t.index ["product_id"], name: "index_pictures_products_on_product_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.string   "title",              null: false
    t.string   "slug",               null: false
    t.text     "preview"
    t.text     "body"
    t.text     "raw_body"
    t.string   "cover_file_name"
    t.string   "cover_content_type"
    t.integer  "cover_file_size"
    t.datetime "cover_updated_at"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["slug"], name: "index_posts_on_slug", unique: true, using: :btree
  end

  create_table "products", force: :cascade do |t|
    t.integer  "category_id"
    t.string   "title",                                                 null: false
    t.string   "slug",                                                  null: false
    t.integer  "line_items_count",                          default: 0
    t.text     "description"
    t.decimal  "price",            precision: 14, scale: 2
    t.datetime "created_at",                                            null: false
    t.datetime "updated_at",                                            null: false
    t.index ["category_id"], name: "index_products_on_category_id", using: :btree
    t.index ["slug"], name: "index_products_on_slug", unique: true, using: :btree
  end

  add_foreign_key "history_items", "carts"
  add_foreign_key "history_items", "products"
  add_foreign_key "line_items", "carts"
  add_foreign_key "line_items", "orders"
  add_foreign_key "line_items", "products"
  add_foreign_key "products", "categories"
end
