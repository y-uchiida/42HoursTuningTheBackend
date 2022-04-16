ALTER TABLE session ADD INDEX index_key (value);

ALTER TABLE group_member ADD INDEX index_key (user_id);

ALTER TABLE record_item_file ADD INDEX index_key (linked_record_id);

ALTER TABLE record_last_access ADD INDEX index_key (user_id);

ALTER TABLE record_comment ADD INDEX index_key (linked_record_id);

ALTER TABLE record ADD INDEX index_status (status);
ALTER TABLE record ADD INDEX index_title (title);
ALTER TABLE record ADD INDEX index_detail (detail);
ALTER TABLE record ADD INDEX index_category_id (category_id);
ALTER TABLE record ADD INDEX index_application_group (application_group);
ALTER TABLE record ADD INDEX index_created_by (created_by);
ALTER TABLE record ADD INDEX index_created_at (created_at);
ALTER TABLE record ADD INDEX index_updated_at (updated_at);

ALTER TABLE record ADD INDEX index_updated_id (updated_at desc, record_id asc);
ALTER TABLE record ADD INDEX category_application_group (category_id asc, application_group asc);
