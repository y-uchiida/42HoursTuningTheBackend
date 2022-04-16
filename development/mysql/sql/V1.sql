ALTER TABLE session ADD INDEX index_key (value);

ALTER TABLE group_member ADD INDEX index_key (user_id);

ALTER TABLE record_item_file ADD INDEX index_key (linked_record_id);

ALTER TABLE record_last_access ADD INDEX index_key (user_id);

ALTER TABLE record_comment ADD INDEX index_key (linked_record_id);
