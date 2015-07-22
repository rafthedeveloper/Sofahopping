# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150722125519) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendships", force: :cascade do |t|
    t.integer "requester_id",   null: false
    t.integer "requestee_id",   null: false
    t.string  "pending_status", null: false
  end

  add_index "friendships", ["requester_id", "requestee_id"], name: "index_friendships_on_requester_id_and_requestee_id", unique: true, using: :btree

  create_table "references", force: :cascade do |t|
    t.integer  "referencer_id", null: false
    t.integer  "referencee_id", null: false
    t.string   "relationship",  null: false
    t.string   "experience",    null: false
    t.text     "description",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "references", ["referencee_id"], name: "index_references_on_referencee_id", using: :btree
  add_index "references", ["referencer_id"], name: "index_references_on_referencer_id", using: :btree

  create_table "requests", force: :cascade do |t|
    t.integer  "requester_id",   null: false
    t.integer  "requestee_id",   null: false
    t.string   "location",       null: false
    t.string   "message",        null: false
    t.date     "arrival_date",   null: false
    t.date     "departure_date", null: false
    t.integer  "num_guests",     null: false
    t.string   "requester_type"
    t.string   "status",         null: false
    t.datetime "updated_at"
    t.datetime "created_at"
  end

  add_index "requests", ["requestee_id"], name: "index_requests_on_requestee_id", using: :btree
  add_index "requests", ["requester_id"], name: "index_requests_on_requester_id", using: :btree

  create_table "trips", force: :cascade do |t|
    t.integer "user_id",        null: false
    t.string  "location",       null: false
    t.text    "description",    null: false
    t.date    "arrival_date",   null: false
    t.date    "departure_date", null: false
    t.integer "num_guests",     null: false
  end

  add_index "trips", ["user_id"], name: "index_trips_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.string   "fname",               null: false
    t.string   "lname",               null: false
    t.string   "gender",              null: false
    t.date     "birthday",            null: false
    t.string   "location",            null: false
    t.string   "hosting_status",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "provider"
    t.string   "uid"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
