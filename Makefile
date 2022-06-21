########################################################################
#
# Set variables needed for the specific project
#
REPO_UPDATE_COMMAND											=	git pull
FOSSIL_COMMIT_CHECKSUM_FILE							= manifest.uuid

NPM_INSTALL_COMMAND											= npm install
NPM_BUILD_COMMAND												= npm run build
APOS_MIGRATE_COMMAND										= node app @apostrophecms/migration:migrate
DEV_SERVER_PORT													= 3100

PROCESS_MANAGER													= pm2
MANAGED_PROCESS_NAME_INSTANCE_1 				= ""
MANAGED_PROCESS_NAME_INSTANCE_2 				= ""

REMOTE_NSTANCE_BACKOFF_TIME							= 60

REMOTE_USER															= nodeapps
REMOTE_SITE_URL													= ""
SSH_DESTINATION													= $(REMOTE_USER)@$(REMOTE_SITE_URL)

MONGO_DB_NAME														= ""
PRODUCTION_DB_BACKUP_LOCATION						= mongodb-prod-backup
DEV_DB_BACKUP_LOCATION									= mongodb-dev-backup
LOCAL_TEMP_LOCATION											= /tmp
REMOTE_TEMP_LOCATION										= /tmp
LOCAL_PRODUCTION_DB_BACKUP_LOCATION			= $(LOCAL_TEMP_LOCATION)/$(PRODUCTION_DB_BACKUP_LOCATION)
LOCAL_DEV_DB_BACKUP_LOCATION						= $(LOCAL_TEMP_LOCATION)/$(DEV_DB_BACKUP_LOCATION)
REMOTE_PRODUCTION_DB_BACKUP_LOCATION		= $(REMOTE_TEMP_LOCATION)/$(PRODUCTION_DB_BACKUP_LOCATION)
REMOTE_DEV_DB_BACKUP_LOCATION						= $(REMOTE_TEMP_LOCATION)/$(DEV_DB_BACKUP_LOCATION)

INSTANCE_DIR														= ""
REMOTE_INSTANCE_LOCATION								= /home/$(REMOTE_USER)/$(INSTANCE_DIR)
LOCAL_INSTANCE_LOCATION									= 

all: help

test:
	@echo $(REMOTE_INSTANCE_LOCATION)

help:
	@echo "Make options help: "
	@echo "    run											Run production server"
	@echo "    run-dev									Run development server"
	@echo "    help-updates							Get help with update directives"
	@echo "    help-db									Get help with database directives"
	@echo "    help-filesystem					Get help with Apostrophe instance filesystem directives"

run:
	@echo "\n===> Locally running Apostrophe in PRODUCTION mode...\n"
	npm -- run serve

link-release-id-to-fossil-manifest-uuid:
	@echo "\n===> Linking ./repo-id file to Fossil's manifest.uuid, containing the commit checksum...\n"
	ln -s $(FOSSIL_COMMIT_CHECKSUM_FILE) release-id
	@echo "\n===> Successfully linked ./repo-id to Fossil's manifest.uuid, containing the commit checksum.\n"

run-dev:
	@echo "\n===> Locally running Apostrophe in DEVELOPMENT mode...\n"
	PORT=$(DEV_SERVER_PORT) npm run dev

help-updates:
	@echo "Update options  - help: "
	@echo "    update-apostrophe-dev							Locally update Apostrophe instance"
	@echo "    update-site-code										Locally update Apostrophe site from repository"
	@echo "    remotely-update-site-code					Remotely update Apostrophe site from repository"
	@echo "    install-and-update-npm-packages		Locally install and update NPM, migrate database"
	@echo "    remotely-install-and-update-npm-packages		Remotely install and update NPM, migrate database"
	@echo "    remotely-start-site								Remotely start stopped site"
	@echo "    remotely-stop-site									Remotely stop site"
	@echo "    remotely-restart-site							Remotely restart started site"

update-apostrophe-dev:
	@echo "\n===> Updating Apostrophe development instance...\n"
	npm update
	@echo "\n===> Apostrophe development instance successfully updated.\n"

update-site-code:
	@echo "\n===> Locally updating Apostrophe site code from repository...\n"
	$(REPO_UPDATE_CALL)
	@echo "\n===> Local Apostrophe site code successfully updated from repository.\n"

remotely-update-site-code:
	@echo "\n===> Remotely updating Apostrophe site code...\n"
	ssh $(SSH_DESTINATION) "cd $(REMOTE_INSTANCE_LOCATION) && $(REPO_UPDATE_COMMAND)"
	@echo "\n===> Remote Apostrophe site code successfully updated.\n"

install-and-update-npm-packages:
	@echo "\n===> Locally installing and updating npm packages, building site, migrating database...\n"
	$($NPM_INSTALL_COMMAND) && $(NPM_BUILD_COMMAND) && $(APOS_MIGRATE_COMMAND)
	@echo "\n===> Local npm packages successfully installed and updated, site built, database migrated.\n"

remotely-install-and-update-npm-packages:
	@echo "\n===> Remotely installing and updating npm packages...\n"
	ssh $(SSH_DESTINATION) "$(REMOTE_INSTANCE_LOCATION) && $($NPM_INSTALL_COMMAND) && $(NPM_BUILD_COMMAND) && $(APOS_MIGRATE_COMMAND)"
	@echo "\n===> Remote npm packages successfully installed and updated.\n"

remotely-start-site:
	@echo "\n===> Remotely starting site...\n"
	@echo "\n=====> Remotely starting instance 1...\n"
	ssh $(SSH_DESTINATION) "$(REMOTE_INSTANCE_LOCATION) && $(PROCESS_MANAGER) start $(MANAGED_PROCESS_NAME_INSTANCE_1)"
	@echo "\n=====> Sleeping before starting instance 2...\n"
	sleep $(REMOTE_INSTANCE_BACKOFF_TIME)
	@echo "\n=====> Remotely starting instance 2...\n"
	ssh $(SSH_DESTINATION) "$(REMOTE_INSTANCE_LOCATION) && $(PROCESS_MANAGER) start $(MANAGED_PROCESS_NAME_INSTANCE_2)"
	@echo "\n===> Successfuly started remote site.\n"

remotely-stop-site:
	@echo "\n===> Remotely stopping site...\n"
	@echo "\n=====> Remotely stopping instance 1...\n"
	ssh $(SSH_DESTINATION) "$(REMOTE_INSTANCE_LOCATION) && $(PROCESS_MANAGER) stop $(MANAGED_PROCESS_NAME_INSTANCE_1)"
	@echo "\n=====> Sleeping before stopping instance 2...\n"
	sleep $(REMOTE_INSTANCE_BACKOFF_TIME)
	@echo "\n=====> Remotely stopping instance 2...\n"
	ssh $(SSH_DESTINATION) "$(REMOTE_INSTANCE_LOCATION) && $(PROCESS_MANAGER) stop $(MANAGED_PROCESS_NAME_INSTANCE_2)"
	@echo "\n===> Successfuly stopped remote site.\n"

remotely-restart-site:
	@echo "\n===> Remotely restarting site...\n"
	@echo "\n=====> Remotely restarting instance 1...\n"
	ssh $(SSH_DESTINATION) "$(REMOTE_INSTANCE_LOCATION) && $(PROCESS_MANAGER) restart $(MANAGED_PROCESS_NAME_INSTANCE_1)" 
	@echo "\n=====> Sleeping before restarting instance 2...\n"
	sleep $(REMOTE_INSTANCE_BACKOFF_TIME)
	@echo "\n=====> Remotely restarting instance 2...\n"
	ssh $(SSH_DESTINATION) "$(REMOTE_INSTANCE_LOCATION) && $(PROCESS_MANAGER) restart $(MANAGED_PROCESS_NAME_INSTANCE_2)" 
	@echo "\n===> Successfuly restarted remote site.\n"

help-db:
	@echo "Update options - database manipulation: "
	@echo "    remotely-backup-production-db				Remotely back up remote production database"
	@echo "    backup-dev-db												Back up local production database"
	@echo "    restore-dev-db-dry-run								Dry run locally restore development database"
	@echo "    restore-dev-db												Locally restore development database"
	@echo "    locally-restore-prod-db-dry-run			Dry run locally restore production database"
	@echo "    locally-restore-prod-db							Locally restore production database"
	@echo "    remotely-restore-prod-db-dry-run			Dry run remotely restore production database"
	@echo "    remotely-restore-prod-db							Remotely restore production database"
	@echo "    remotely-restore-dev-db-dry-run			Dry run remotely restore development database"
	@echo "    remotely-restore-dev-db							Remotely restore development database"
	@echo "    copy-dev-db-to-live-server						Copy local development database to live server"
	@echo "    copy-prod-db-from-live-server				Copy production database from live server to local"
	@echo "    drop-dev-db													Drop local development database"
	@echo "    remotely-drop-prod-db								Remotely drop live server production database"
	@echo "    deploy-dev-db-to-production					Deploy local database to production server"
	@echo "    deploy-prod-db-to-development				Deploy production database to local development server"

remotely-backup-production-db:
	@echo "\n===> Remotely backing up production database...\n"
	ssh $(SSH_DESTINATION) "rm -rf $(REMOTE_PRODUCTION_DB_BACKUP_LOCATION) && mongodump -d $(MONGO_DB_NAME) -o $(REMOTE_PRODUCTION_DB_BACKUP_LOCATION) --gzip"
	@echo "\n===> Production database successfully backed up on remote server.\n"

backup-dev-db:
	@echo "\n===> Backing up development database...\n"
	rm -rf $(LOCAL_DEV_DB_BACKUP_LOCATION) && mongodump -d $(MONGO_DB_NAME) -o $(LOCAL_DEV_DB_BACKUP_LOCATION) --gzip
	@echo "\n===> Development database successfully backed up locally.\n"

restore-dev-db-dry-run:
	@echo "\n===> Performing development database restore from backup dry run...\n"
	mongorestore --db $(MONGO_DB_NAME) --gzip --dryRun $(LOCAL_DEV_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)
	@echo "\n===> Successfully performed development database restore from backup dry run.\n"

restore-dev-db:
	@echo "\n===> Restoring development database from backup...\n"
	mongorestore --db $(MONGO_DB_NAME) --gzip $(LOCAL_DEV_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)
	@echo "\n===> Development database successfully restored from backup.\n"

locally-restore-prod-db-dry-run:
	@echo "\n===> Performing local production database restore from backup dry run...\n"
	mongorestore --db $(MONGO_DB_NAME) --gzip --dryRun $(LOCAL_PRODUCTION_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)
	@echo "\n===> Successfully performed local production database restore from backup dry run.\n"

locally-restore-prod-db:
	@echo "\n===> Performing local production database restore from backup...\n"
	mongorestore --db $(MONGO_DB_NAME) --gzip $(LOCAL_PRODUCTION_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)
	@echo "\n===> Successfully performed local production database restore from backup.\n"

remotely-restore-prod-db-dry-run:
	@echo "\n===> Performing remote production database restore from backup dry run...\n"
	ssh $(SSH_DESTINATION) "mongorestore --db $(MONGO_DB_NAME) --gzip --dryRun $(REMOTE_PRODUCTION_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)"
	@echo "\n===> Successfully performed remote production database restore from backup dry run.\n"

remotely-restore-prod-db:
	@echo "\n===> Performing remote production database restore from backup...\n"
	ssh $(SSH_DESTINATION) "mongorestore --db $(MONGO_DB_NAME) --gzip $(REMOTE_PRODUCTION_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)"
	@echo "\n===> Successfully performed remote production database restore from backup.\n"

remotely-restore-dev-db-dry-run:
	@echo "\n===> Performing remote development database restore from backup dry run...\n"
	ssh $(SSH_DESTINATION) "mongorestore --db $(MONGO_DB_NAME) --gzip --dryRun $(REMOTE_DEV_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)"
	@echo "\n===> Successfully performed remote development database restore from backup dry run.\n"

remotely-restore-dev-db:
	@echo "\n===> Performing remote development database restore from backup...\n"
	ssh $(SSH_DESTINATION) "mongorestore --db $(MONGO_DB_NAME) --gzip $(REMOTE_DEV_DB_BACKUP_LOCATION)/$(MONGO_DB_NAME)"
	@echo "\n===> Successfully performed remote development database restore from backup.\n"

copy-dev-db-to-live-server: 
	@echo "\n===> Copying development database backup to remote server...\n"
	ssh $(SSH_DESTINATION) rm -rf $(REMOTE_DEV_DB_BACKUP_LOCATION) && scp -r $(LOCAL_DEV_DB_BACKUP_LOCATION) $(SSH_DESTINATION):$(REMOTE_TEMP_LOCATION)
	@echo "\n===> Development database successfully copied to remote server.\n"

copy-prod-db-from-live-server: remotely-backup-production-db
	@echo "\n===> Copying production database backup from remote server...\n"
	rm -rf $(LOCAL_PRODUCTION_DB_BACKUP_LOCATION) && scp -r $(SSH_DESTINATION):$(REMOTE_PRODUCTION_DB_BACKUP_LOCATION) $(LOCAL_TEMP_LOCATION)
	@echo "\n===> Production database backup successfully copied from remote server.\n"

drop-dev-db:
	@echo "\n===> Dropping local development database...\n"
	mongo --eval 'db.getSiblingDB("$(MONGO_DB_NAME)").dropDatabase();'
	@echo "\n===> Local development database successfully dropped.\n"

remotely-drop-prod-db:
	@echo "\n===> Remotely dropping production database...\n"
	ssh $(SSH_DESTINATION) "mongo --eval 'db.getSiblingDB(\"$(MONGO_DB_NAME)\").dropDatabase();'"
	@echo "\n===> Remote production database successfully dropped.\n"

deploy-dev-db-to-production: copy-prod-db-from-live-server backup-dev-db copy-dev-db-to-live-server remotely-drop-prod-db remotely-restore-dev-db

deploy-prod-db-to-development: copy-prod-db-from-live-server backup-dev-db drop-dev-db locally-restore-prod-db

help-filesystem:
	@echo "Update options - filesystem manipulation: "
	@echo "    sync-uploads-directory-local-push-dry-run				Synchronise remote uploads directory with local development, by rsync push, dry run"
	@echo "    sync-uploads-directory-local-push								Synchronise remote uploads directory with local development, by rsync push"
	@echo "    sync-uploads-directory-remote-pull-dry-run				Synchronise local uploads directory with remote by rsync pull, dry run"
	@echo "    sync-uploads-directory-remote-pull								Synchronise local uploads directory with remote by rsync pull"

sync-uploads-directory-local-push-dry-run:
	@echo "\n===> Synchronising Uploads directory by local push (DRY RUN)...\n"
	rsync -aznvP --delete ./public/uploads/ $(SSH_DESTINATION):$(REMOTE_INSTANCE_LOCATION)/public/uploads
	@echo "\n===> Uploads directory synchronisation local push dry run successful.\n"

sync-uploads-directory-local-push:
	@echo "\n===> Synchronising Uploads directory by local push...\n"
	rsync -azvP --delete ./public/uploads/ $(SSH_DESTINATION):$(REMOTE_INSTANCE_LOCATION)/public/uploads
	@echo "\n===> Uploads directory successfuly synchronised by local push.\n"

sync-uploads-directory-remote-pull-dry-run:
	@echo "\n===> Synchronising Uploads directory by remote pull (DRY RUN)...\n"
	rsync -aznvP --delete $(SSH_DESTINATION):$(REMOTE_INSTANCE_LOCATION)/public/uploads ./public/uploads/ 
	@echo "\n===> Uploads directory synchronisation remote pull dry run successful.\n"

sync-uploads-directory-remote-pull:
	@echo "\n===> Synchronising Uploads directory by remote pull...\n"
	rsync -azvP --delete $(SSH_DESTINATION):$(REMOTE_INSTANCE_LOCATION)/public/uploads ./public/uploads/ 
	@echo "\n===> Uploads directory successfuly synchronised by remote pull.\n"
