Create schema crowdfundraising;
create table if not exists crowdfundraising.regUser(
	userName varchar(25) NOT NULL,
    userId INT NOT NULL AUTO_INCREMENT UNIQUE,
    userEmail varchar(50) NOT NULL Unique,
    userPassword varchar(60) NOT NULL,
    cnic BIGINT(13) NOT NULL UNIQUE,
    ccNumber BIGINT(16) NOT NULL UNIQUE,
    fundsSent DOUBLE ,
    Primary Key(userId)
);


CREATE TABLE crowdfundraising.Projects (
  projectId INT NOT NULL AUTO_INCREMENT unique,
  title VARCHAR(100) NOT NULL unique,
  proDesc VARCHAR(500) NOT NULL,
  milestone DOUBLE NOT NULL,
  fundsRecieved DOUBLE NULL,
  proStatus TINYINT(1) NOT NULL DEFAULT 0,
  maxVotes INT NOT NULL,
  totalVotes INT NULL,
  creationDate DATE NOT NULL,
  PRIMARY KEY (projectId));


create table if not exists crowdfundraising.Categories(
	cname varchar(45) NOT NULL UNIQUE,
    projectID INT NOT NULL UNIQUE AUTO_INCREMENT,
    Primary KEY(cname)
);

oken:"JWT "+token,
          user: {
            id: user.userId,
            name: user.userName,
            email: user.userEmail,

create table if not exists crowdfundraising.Administrator(
	adminId INT not null unique auto_increment,
    adminName varchar(50) not null,
    adminPost varchar(20) not null,
    Primary Key(adminId)
);

CREATE TABLE crowdfundraising.user_likes_Projects (
  userId INT NOT NULL unique,
  projectId INT NOT NULL AUTO_INCREMENT unique,
  PRIMARY KEY (userId, projectId)
);

CREATE TABLE crowdfundraising.user_votes_Projects (
  userId INT NOT NULL unique,
  projectId INT NOT NULL AUTO_INCREMENT unique,
  PRIMARY KEY (userId, projectId));

CREATE TABLE crowdfundraising.user_sponsors_Projects (
  userId INT NOT NULL unique,
  amount DOUBLE not null,
  dateofsending  DATE not null,
  projectId INT NOT NULL AUTO_INCREMENT unique,
  PRIMARY KEY (userId, projectId));


CREATE TABLE crowdfundraising.Projects_listedin_cat (
  projectId INT NOT NULL AUTO_INCREMENT unique,
  cname varchar(45) NOT NULL,
  PRIMARY KEY ( projectId));




Alter TABLE crowdfundraising.regUser
ADD column dateofReg DATE NOT NULL;

Alter TABLE crowdfundraising.Projects
ADD column category varchar(45) NOT NULL;

ALTER TABLE crowdfundraising.Categories 
CHANGE COLUMN projectID description TEXT(500) NOT NULL ,
DROP INDEX projectID ;

alter table crowdfundraising.user_likes_Projects
add foreign key (userId)
references regUser(userId)
on delete cascade
on update no action;

alter table crowdfundraising.user_likes_Projects
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowdfundraising.user_sponsors_Projects
add foreign key (userId)
references regUser(userId)
on delete cascade
on update no action;

alter table crowdfundraising.user_sponsors_Projects
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowdfundraising.user_votes_Projects
add foreign key (userId)
references regUser(userId)
on delete cascade
on update no action;

alter table crowdfundraising.user_votes_Projects
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowdfundraising.Projects_listedin_cat
add foreign key (projectId)
references Projects(projectId)
on delete cascade
on update no action;

alter table crowdfundraising.Projects_listedin_cat
add foreign key (cname)
references Categories(cname)
on delete cascade
on update no action;

