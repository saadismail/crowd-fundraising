CREATE SCHEMA `crowd` ;


create table if not exists regUser(
	userName varchar(25) NOT NULL,
    userId INT NOT NULL AUTO_INCREMENT UNIQUE,
    userEmail varchar(50) NOT NULL Unique,
    userPassword varchar(60) NOT NULL,
    cnic BIGINT(13) NOT NULL UNIQUE,
    ccNumber BIGINT(16) NOT NULL UNIQUE,
    fundsSent DOUBLE ,
    Primary Key(userId)
);


CREATE TABLE `crowd`.`Projects` (
  `projectId` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `proDesc` VARCHAR(500) NOT NULL,
  `milestone` DOUBLE NOT NULL,
  `fundsRecieved` DOUBLE NULL,
  `proStatus` TINYINT(1) NOT NULL DEFAULT 0,
  `maxVotes` INT NOT NULL,
  `totalVotes` INT NULL,
  `creationDate` DATE NOT NULL,
  PRIMARY KEY (`projectId`),
  UNIQUE INDEX `projectId_UNIQUE` (`projectId` ASC) VISIBLE,
  UNIQUE INDEX `title_UNIQUE` (`title` ASC) VISIBLE);


create table if not exists Categories(
	cname varchar(45) NOT NULL UNIQUE,
    projectID INT NOT NULL UNIQUE AUTO_INCREMENT,
    Primary KEY(cname)
);



create table if not exists Administrator(
	adminId INT not null unique auto_increment,
    adminName varchar(50) not null,
    adminPost varchar(20) not null,
    Primary Key(adminId)
);

CREATE TABLE `crowd`.`user_likes_Projects` (
  `userId` INT NOT NULL,
  `projectId` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userId`, `projectId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `projectId_UNIQUE` (`projectId` ASC) VISIBLE);

CREATE TABLE `crowd`.`user_votes_Projects` (
  `userId` INT NOT NULL ,
  `projectId` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userId`, `projectId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `projectId_UNIQUE` (`projectId` ASC) VISIBLE);

CREATE TABLE `crowd`.`user_sponsors_Projects` (
  `userId` INT NOT NULL ,
  `amount` DOUBLE not null,
  `dateofsending`  DATE not null,
  `projectId` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userId`, `projectId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `projectId_UNIQUE` (`projectId` ASC) VISIBLE);


CREATE TABLE `crowd`.`Projects_listedin_cat` (
  `projectId` INT NOT NULL AUTO_INCREMENT unique,
  `cname` varchar(45) NOT NULL,
  PRIMARY KEY ( `projectId`),
  UNIQUE INDEX `projectId_UNIQUE` (`projectId` ASC) VISIBLE);




Alter TABLE regUser
ADD column dateofReg DATE NOT NULL;

Alter TABLE Projects
ADD column category varchar(45) NOT NULL;

ALTER TABLE `crowd`.`Categories` 
CHANGE COLUMN `projectID` `description` TEXT(500) NOT NULL ,
DROP INDEX `projectID` ;

alter table crowd.user_likes_Projects
add foreign key (userId)
references regUser(userId)
on delete cascade
on update no action;

alter table crowd.user_likes_Projects
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowd.user_sponsors_Projects
add foreign key (userId)
references regUser(userId)
on delete cascade
on update no action;

alter table crowd.user_sponsors_Projects
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowd.user_votes_Projects
add foreign key (userId)
references regUser(userId)
on delete cascade
on update no action;

alter table crowd.user_votes_Projects
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowd.Projects_listedin_cat
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowd.Projects_listedin_cat
add foreign key (cname)
references Categories(cname)
on delete cascade
on update no action;

