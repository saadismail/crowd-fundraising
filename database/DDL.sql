-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DbProj
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DbProj
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DbProj` ;
USE `DbProj` ;

-- -----------------------------------------------------
-- Table `DbProj`.`User_sponsors_Projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`User_sponsors_Projects` (
  `SUserId` INT NOT NULL,
  `ProjectId` INT NOT NULL,
  `fundsSent` DOUBLE NOT NULL,
  `SponsorDate` DATE NOT NULL,
  PRIMARY KEY (`SUserId`, `ProjectId`),
  UNIQUE INDEX `SUserId_UNIQUE` (`SUserId` ASC) VISIBLE,
  UNIQUE INDEX `ProjectId_UNIQUE` (`ProjectId` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `DbProj`.`User_Likes_Projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`User_Likes_Projects` (
  `LUserId` INT NOT NULL,
  `LProjectId` INT NOT NULL,
  `DateLiked` DATE NOT NULL,
  PRIMARY KEY (`LUserId`, `LProjectId`),
  UNIQUE INDEX `LUserId_UNIQUE` (`LUserId` ASC) VISIBLE,
  UNIQUE INDEX `LProjectId_UNIQUE` (`LProjectId` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `DbProj`.`User_votesFor_Projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`User_votesFor_Projects` (
  `VUserId` INT NOT NULL,
  `votedFor` INT NOT NULL,
  `DateVoted` DATE NOT NULL,
  PRIMARY KEY (`VUserId`, `votedFor`),
  UNIQUE INDEX `VUserId_UNIQUE` (`VUserId` ASC) VISIBLE,
  UNIQUE INDEX `votedFor_UNIQUE` (`votedFor` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `DbProj`.`User_sponsors_Projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`User_sponsors_Projects` (
  `SUserId` INT NOT NULL,
  `ProjectId` INT NOT NULL,
  `fundsSent` DOUBLE NOT NULL,
  `SponsorDate` DATE NOT NULL,
  PRIMARY KEY (`SUserId`, `ProjectId`),
  UNIQUE INDEX `SUserId_UNIQUE` (`SUserId` ASC) VISIBLE,
  UNIQUE INDEX `ProjectId_UNIQUE` (`ProjectId` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `DbProj`.`Administrators_post_Project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`Administrators_post_Project` (
  `PAdminId` INT NOT NULL,
  `P_Id` INT NOT NULL,
  `DatePosted` DATE NOT NULL,
  PRIMARY KEY (`PAdminId`, `P_Id`),
  UNIQUE INDEX `PAdminId_UNIQUE` (`PAdminId` ASC) VISIBLE,
  UNIQUE INDEX `P_Id_UNIQUE` (`P_Id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProj`.`listedIn`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`listedIn` (
  `IProj_Id` INT NOT NULL,
  `Category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IProj_Id`, `Category`),
  UNIQUE INDEX `IProj_Id_UNIQUE` (`IProj_Id` ASC) VISIBLE,
  UNIQUE INDEX `Category_UNIQUE` (`Category` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DbProj`.`Projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`Projects` (
  `ProjectId` INT NOT NULL AUTO_INCREMENT,
  `fundsRecieved` DOUBLE NULL,
  `Milestone` DOUBLE NOT NULL,
  `Status` VARCHAR(10) NOT NULL,
  `Title` VARCHAR(45) NOT NULL,
  `Category` VARCHAR(45) NOT NULL,
  `MaxVotes` INT NOT NULL,
  `Description` LONGTEXT NOT NULL,
  `Votes` INT NULL,
  PRIMARY KEY (`ProjectId`),
  UNIQUE INDEX `ProjectId_UNIQUE` (`ProjectId` ASC) VISIBLE,
  UNIQUE INDEX `Title_UNIQUE` (`Title` ASC) VISIBLE,
  CONSTRAINT `fk_Projects_User_sponsors_Projects1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DbProj`.`User_sponsors_Projects` (`ProjectId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projects_User_Likes_Projects1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DbProj`.`User_Likes_Projects` (`LProjectId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projects_User_votesFor_Projects1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DbProj`.`User_votesFor_Projects` (`votedFor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projects_Administrators_post_Project1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DbProj`.`Administrators_post_Project` (`P_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projects_listedIn1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `DbProj`.`listedIn` (`IProj_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



-- -----------------------------------------------------
-- Table `DbProj`.`Administrators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`Administrators` (
  `AdminId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Post` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`AdminId`),
  UNIQUE INDEX `AdminId_UNIQUE` (`AdminId` ASC) VISIBLE,
  CONSTRAINT `fk_Administrators_Administrators_post_Project1`
    FOREIGN KEY (`AdminId`)
    REFERENCES `DbProj`.`Administrators_post_Project` (`PAdminId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `DbProj`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DbProj`.`Category` (
  `Name` VARCHAR(45) NOT NULL,
  `Projects` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) VISIBLE,
  PRIMARY KEY (`Name`),
  INDEX `fk_Category_listedIn1_idx` (`Projects` ASC) VISIBLE,
  CONSTRAINT `fk_Category_listedIn1`
    FOREIGN KEY (`Projects`)
    REFERENCES `DbProj`.`listedIn` (`Category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
