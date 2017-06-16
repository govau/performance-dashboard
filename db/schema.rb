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

ActiveRecord::Schema.define(version: 20170522052200) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.string   "author_type"
    t.integer  "author_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree
  end

  create_table "audits", force: :cascade do |t|
    t.integer  "auditable_id"
    t.string   "auditable_type"
    t.integer  "associated_id"
    t.string   "associated_type"
    t.integer  "user_id"
    t.string   "user_type"
    t.string   "username"
    t.string   "action"
    t.text     "audited_changes"
    t.integer  "version",         default: 0
    t.string   "comment"
    t.string   "remote_address"
    t.string   "request_uuid"
    t.datetime "created_at"
    t.index ["associated_id", "associated_type"], name: "associated_index", using: :btree
    t.index ["auditable_id", "auditable_type"], name: "auditable_index", using: :btree
    t.index ["created_at"], name: "index_audits_on_created_at", using: :btree
    t.index ["request_uuid"], name: "index_audits_on_request_uuid", using: :btree
    t.index ["user_id", "user_type"], name: "user_index", using: :btree
  end

  create_table "dashboards", force: :cascade do |t|
    t.integer  "organisation_id",                null: false
    t.text     "name",                           null: false
    t.text     "description",                    null: false
    t.text     "target_users",                   null: false
    t.text     "notes"
    t.text     "url"
    t.boolean  "display_hero",    default: true, null: false
    t.boolean  "display_kpis",    default: true, null: false
    t.datetime "published_at"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.index ["name"], name: "index_dashboards_on_name", unique: true, using: :btree
    t.index ["organisation_id"], name: "index_dashboards_on_organisation_id", using: :btree
    t.index ["published_at"], name: "index_dashboards_on_published_at", using: :btree
  end

  create_table "data_rows", force: :cascade do |t|
    t.integer  "data_table_id", null: false
    t.date     "row_date",      null: false
    t.jsonb    "data",          null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["data_table_id"], name: "index_data_rows_on_data_table_id", using: :btree
  end

  create_table "data_table_datasets", force: :cascade do |t|
    t.integer "data_table_id", null: false
    t.integer "dataset_id",    null: false
    t.index ["data_table_id"], name: "index_data_table_datasets_on_data_table_id", using: :btree
    t.index ["dataset_id"], name: "index_data_table_datasets_on_dataset_id", using: :btree
  end

  create_table "data_tables", force: :cascade do |t|
    t.integer  "dashboard_id"
    t.text     "name"
    t.jsonb    "options",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["dashboard_id"], name: "index_data_tables_on_dashboard_id", using: :btree
  end

  create_table "datapoints", force: :cascade do |t|
    t.integer  "dataset_id", null: false
    t.datetime "ts",         null: false
    t.decimal  "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dataset_id"], name: "index_datapoints_on_dataset_id", using: :btree
    t.index ["ts"], name: "index_datapoints_on_ts", using: :btree
  end

  create_table "dataset_widgets", force: :cascade do |t|
    t.integer  "dataset_id",             null: false
    t.integer  "widget_id",              null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "order_num",  default: 0, null: false
    t.index ["dataset_id"], name: "index_dataset_widgets_on_dataset_id", using: :btree
    t.index ["widget_id"], name: "index_dataset_widgets_on_widget_id", using: :btree
  end

  create_table "datasets", force: :cascade do |t|
    t.integer  "organisation_id"
    t.text     "name",                              null: false
    t.text     "label",                             null: false
    t.text     "units",                             null: false
    t.text     "notes"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "period",          default: "month", null: false
    t.jsonb    "options",         default: {},      null: false
    t.index ["organisation_id"], name: "index_datasets_on_organisation_id", using: :btree
  end

  create_table "flipper_features", force: :cascade do |t|
    t.string   "key",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["key"], name: "index_flipper_features_on_key", unique: true, using: :btree
  end

  create_table "flipper_gates", force: :cascade do |t|
    t.string   "feature_key", null: false
    t.string   "key",         null: false
    t.string   "value"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["feature_key", "key", "value"], name: "index_flipper_gates_on_feature_key_and_key_and_value", unique: true, using: :btree
  end

  create_table "organisations", force: :cascade do |t|
    t.text     "name",        null: false
    t.text     "url",         null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "permissions", force: :cascade do |t|
    t.string   "resource_type"
    t.integer  "resource_id"
    t.integer  "user_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["resource_type", "resource_id"], name: "index_permissions_on_resource_type_and_resource_id", using: :btree
    t.index ["user_id"], name: "index_permissions_on_user_id", using: :btree
  end

  create_table "sessions", force: :cascade do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
    t.index ["updated_at"], name: "index_sessions_on_updated_at", using: :btree
  end

  create_table "tokens", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "token",                      null: false
    t.boolean  "session",    default: false, null: false
    t.datetime "expired_at"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["expired_at"], name: "index_tokens_on_expired_at", using: :btree
    t.index ["token"], name: "index_tokens_on_token", unique: true, using: :btree
    t.index ["user_id"], name: "index_tokens_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.integer  "organisation_id",                               null: false
    t.string   "email",                         default: "",    null: false
    t.string   "encrypted_password",            default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                 default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",               default: 0,     null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.boolean  "admin",                         default: false, null: false
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.string   "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer  "invitation_limit"
    t.string   "invited_by_type"
    t.integer  "invited_by_id"
    t.integer  "invitations_count",             default: 0
    t.integer  "second_factor_attempts_count",  default: 0
    t.string   "encrypted_otp_secret_key"
    t.string   "encrypted_otp_secret_key_iv"
    t.string   "encrypted_otp_secret_key_salt"
    t.string   "direct_otp"
    t.datetime "direct_otp_sent_at"
    t.datetime "totp_timestamp"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["encrypted_otp_secret_key"], name: "index_users_on_encrypted_otp_secret_key", unique: true, using: :btree
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true, using: :btree
    t.index ["invitations_count"], name: "index_users_on_invitations_count", using: :btree
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id", using: :btree
    t.index ["organisation_id"], name: "index_users_on_organisation_id", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true, using: :btree
  end

  create_table "widgets", force: :cascade do |t|
    t.integer  "dashboard_id",                              null: false
    t.integer  "row",             limit: 2,                 null: false
    t.integer  "pos",             limit: 2,                 null: false
    t.text     "name",                                      null: false
    t.text     "type",                                      null: false
    t.text     "size",                                      null: false
    t.text     "units",                                     null: false
    t.text     "description"
    t.text     "options"
    t.boolean  "is_hero",                   default: false, null: false
    t.datetime "last_updated_at",                           null: false
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.integer  "data_table_id"
    t.index ["dashboard_id"], name: "index_widgets_on_dashboard_id", using: :btree
    t.index ["data_table_id"], name: "index_widgets_on_data_table_id", using: :btree
  end

  add_foreign_key "widgets", "data_tables"
end
