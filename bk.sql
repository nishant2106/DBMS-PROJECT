-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: Blood_Bank_System
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Donation`
--

DROP TABLE IF EXISTS `Donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Donation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aadhar_no` bigint DEFAULT NULL,
  `component_name` varchar(30) DEFAULT NULL,
  `d_date` date DEFAULT NULL,
  `Qty` varchar(10) DEFAULT NULL,
  `nurse_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_aadhar_no` (`aadhar_no`),
  KEY `fk_nurse_id` (`nurse_id`),
  CONSTRAINT `fk_aadhar_no` FOREIGN KEY (`aadhar_no`) REFERENCES `Donor` (`aadhar_no`),
  CONSTRAINT `fk_nurse_id` FOREIGN KEY (`nurse_id`) REFERENCES `Nurse` (`nurse_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Donation`
--

LOCK TABLES `Donation` WRITE;
/*!40000 ALTER TABLE `Donation` DISABLE KEYS */;
INSERT INTO `Donation` VALUES (1,2744356754,'rbc','2020-11-20','200ml',1),(2,735874758373,'Packed Red Blood Cells','2020-12-12','53',NULL),(3,735874758373,'Fresh Frozen Plasma','2020-12-13','6767',1),(4,735874758373,'Packed Red Blood Cells','2020-12-12','53',NULL),(5,735874758374,'Packed Red Blood Cells','2020-12-09','464',1),(6,735874758373,'Fresh Frozen Plasma','2020-12-13','6767',1),(8,1,'Fresh Frozen Plasma','2020-12-19','433',1),(9,2744356754,'Packed Red Blood Cells','2020-12-09','543454',1),(10,2744356754,'Packed Red Blood Cells','2020-12-19','45454',1),(11,2744356754,'Packed Red Blood Cells','2020-12-09','543454',1),(12,2744356754,'Packed Red Blood Cells','2020-12-19','45454',1),(14,1,'Plasma','2020-12-04','4547',1),(16,1,'Plasma','2020-12-04','4547',1),(18,1,'Packed Red Blood Cells','2020-12-13','200',1);
/*!40000 ALTER TABLE `Donation` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`nishant`@`localhost`*/ /*!50003 TRIGGER `addStorage` AFTER INSERT ON `Donation` FOR EACH ROW begin
	declare blood varchar(10);
	select blood_grp into blood from Donor where aadhar_no = new.aadhar_no;
	case 
		when blood='A_pos' then update storage set A_pos = A_pos+new.Qty where component_name=new.component_name;
		when blood='A_neg' then update storage set A_neg = A_neg+new.Qty where component_name=new.component_name;
		when blood='B_pos' then update storage set B_pos = B_pos+new.Qty where component_name=new.component_name;
		when blood='B_neg' then update storage set B_neg = B_neg+new.Qty where component_name=new.component_name;
		when blood='O_pos' then update storage set O_pos = O_pos+new.Qty where component_name=new.component_name;
		when blood='O_neg' then update storage set O_neg = O_neg+new.Qty where component_name=new.component_name;
		when blood='AB_pos' then update storage set AB_pos = AB_pos+new.Qty where component_name=new.component_name;
		when blood='AB_neg' then update storage set AB_neg = AB_neg+new.Qty where component_name=new.component_name;
	end case;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Donor`
--

DROP TABLE IF EXISTS `Donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Donor` (
  `aadhar_no` bigint NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `district` varchar(30) DEFAULT NULL,
  `blood_grp` varchar(5) DEFAULT NULL,
  `mob_no` bigint DEFAULT NULL,
  `gender` char(10) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `pinCode` int DEFAULT NULL,
  `isPlasmaDonor` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`aadhar_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Donor`
--

LOCK TABLES `Donor` WRITE;
/*!40000 ALTER TABLE `Donor` DISABLE KEYS */;
INSERT INTO `Donor` VALUES (1,'Nishant Pandey','riyajoshi@gmail.com',' Mumbai Suburban','A_pos',8369247772,'Female','Roon No. 10, Vikram Chawl, Mulgaon Dongari, Andheri (East),Mumbai-400093,Maharashtra,India',400093,'Yes'),(2744356754,'Rashmi','rashmi123@gmail.com','Aurangabad','O+',8765123337,'female',NULL,NULL,NULL),(735874758373,'Rasika Patil','r@gmail.com','Mumbai City','B+',8369247772,'Female','Andher',400093,'No'),(735874758374,'Nishant Pandey','a@gmail.com','  Bhandara','B-',8369247772,'Male','Roon No. 10, Vikram Chawl, Mulgaon Dongari, Andheri (East),Mumbai-400093,Maharashtra,India',400094,'Yes');
/*!40000 ALTER TABLE `Donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Employee` (
  `e_id` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(20) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  `e_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES (1,'ritu123','ritu123456789','ritu'),(2,'admin','1234','Admin'),(3,'Mano','mano123','Manorama'),(4,'Mano','mano123','Manorama'),(5,'Mano','mano123','Manorama'),(8,'admin','1234','Admin'),(9,'admin','1234','Admin'),(10,'nish','1234','Nishant');
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hospital`
--

DROP TABLE IF EXISTS `Hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Hospital` (
  `h_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `mob_no` bigint DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `district` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`h_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hospital`
--

LOCK TABLES `Hospital` WRITE;
/*!40000 ALTER TABLE `Hospital` DISABLE KEYS */;
INSERT INTO `Hospital` VALUES (1,'Jeevan',7845127890,NULL,NULL,NULL),(2,'Jeevan Hospital',9877676767,'Mumbai',8746476,'Jalna'),(4,'Nishant Pandey',9877676767,'Pune',343454,'Ahmednagar');
/*!40000 ALTER TABLE `Hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nurse`
--

DROP TABLE IF EXISTS `Nurse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Nurse` (
  `nurse_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `mob_no` bigint DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  PRIMARY KEY (`nurse_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nurse`
--

LOCK TABLES `Nurse` WRITE;
/*!40000 ALTER TABLE `Nurse` DISABLE KEYS */;
INSERT INTO `Nurse` VALUES (1,'Riyas','female','Pune',6709123348,'riyajoshi@gmail','2020-11-20');
/*!40000 ALTER TABLE `Nurse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Transfer`
--

DROP TABLE IF EXISTS `Transfer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Transfer` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `h_id` int DEFAULT NULL,
  `t_date` date DEFAULT NULL,
  `component_name` varchar(30) DEFAULT NULL,
  `Qty` varchar(10) DEFAULT NULL,
  `blood_grp` varchar(10) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`t_id`),
  KEY `fk_h_id` (`h_id`),
  CONSTRAINT `fk_h_id` FOREIGN KEY (`h_id`) REFERENCES `Hospital` (`h_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transfer`
--

LOCK TABLES `Transfer` WRITE;
/*!40000 ALTER TABLE `Transfer` DISABLE KEYS */;
INSERT INTO `Transfer` VALUES (1,1,'2020-11-20','rbc','200ml','o+','pass'),(2,1,'2020-11-24','Fresh Frozen Plasma','200','A-','PASS'),(3,1,'2020-11-24','Fresh Frozen Plasma','200','A-','PASS'),(4,1,'2020-11-19','Packed Red Blood Cells','200','A-','PENDING'),(5,2,'2020-12-13','Packed Red Blood Cells','200','A_pos','PENDING'),(6,2,'2020-12-13','Packed Red Blood Cells','200','A_pos','PENDING'),(7,2,'2020-12-13','Packed Red Blood Cells','200','A_pos','PENDING'),(8,2,'2020-12-13','Packed Red Blood Cells','200','A_pos','PENDING'),(9,2,'2020-12-13','Packed Red Blood Cells','200','A_pos','PENDING');
/*!40000 ALTER TABLE `Transfer` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`nishant`@`localhost`*/ /*!50003 TRIGGER `minStorage` AFTER INSERT ON `Transfer` FOR EACH ROW begin
	declare blood varchar(10);
	select new.blood_grp into blood;
	case 
		when blood='A_pos' then update storage set A_pos = A_pos-new.Qty where component_name=new.component_name;
		when blood='A_neg' then update storage set A_neg = A_neg-new.Qty where component_name=new.component_name;
		when blood='B_pos' then update storage set B_pos = B_pos-new.Qty where component_name=new.component_name;
		when blood='B_neg' then update storage set B_neg = B_neg-new.Qty where component_name=new.component_name;
		when blood='O_pos' then update storage set O_pos = O_pos-new.Qty where component_name=new.component_name;
		when blood='O_neg' then update storage set O_neg = O_neg-new.Qty where component_name=new.component_name;
		when blood='AB_pos' then update storage set AB_pos = AB_pos-new.Qty where component_name=new.component_name;
		when blood='AB_neg' then update storage set AB_neg = AB_neg-new.Qty where component_name=new.component_name;
	end case;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `campaigns`
--

DROP TABLE IF EXISTS `campaigns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campaigns` (
  `camp_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `location` varchar(10) DEFAULT NULL,
  `mob_no` bigint DEFAULT NULL,
  `createdon` bigint DEFAULT NULL,
  `c_date` date DEFAULT NULL,
  PRIMARY KEY (`camp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaigns`
--

LOCK TABLES `campaigns` WRITE;
/*!40000 ALTER TABLE `campaigns` DISABLE KEYS */;
INSERT INTO `campaigns` VALUES (1,'Bloodrive','Andheri',37465734,38746873,'2020-11-21'),(2,'Dipti Pandey','Andheri',87458734,4785,'2020-12-05'),(3,'Dipti Pandey','Andher',34537,46465454,'2020-12-19'),(4,'Dipti Pande','Andheri',87458734,47857,'2020-12-05');
/*!40000 ALTER TABLE `campaigns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `title` varchar(40) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `color` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES ('Learning Management System',NULL,'#832a2a'),('Introductory email',NULL,'#9d2f2f'),('Introductory email',NULL,'#9d2f2f'),('Learning Management System',NULL,'#c11010'),('Learning Management System','2020-11-03','#a11717'),('Learning Management System','2020-11-03','#a11717'),('Learning Management System','2020-11-03','#a11717'),('hsfjdss','2020-11-05','#bb2a2a'),('Introductory email','2020-11-30','#13b98f'),('Introductory email','2020-11-29','#9b1717'),('Python Running','2020-11-17','#be1919'),('Introductory email','2020-11-11','#9c1c1c'),('Gallery Assignment','2020-12-01','#b42222'),('Introductory email','2020-11-04','#c82828'),('Introductory email','2020-11-06','#9c1c1c'),('Learning Management System','2020-11-04','#d42525'),('Gallery Assignment','2020-11-10','#8f2424'),('Show project','2020-12-03','#cc1414');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage` (
  `component_name` varchar(30) DEFAULT NULL,
  `O_pos` bigint DEFAULT NULL,
  `O_neg` bigint DEFAULT NULL,
  `A_pos` bigint DEFAULT NULL,
  `A_neg` bigint DEFAULT NULL,
  `B_pos` bigint DEFAULT NULL,
  `B_neg` bigint DEFAULT NULL,
  `AB_pos` bigint DEFAULT NULL,
  `AB_neg` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
INSERT INTO `storage` VALUES ('Fresh Frozen Plasma',0,0,0,0,0,0,0,0),('Packed Red Blood Cells',0,0,1177016,0,0,0,0,0),('Plasma',0,0,9094,0,0,0,0,0),('Platelet Concentrate',0,0,0,0,0,0,0,0),('Whole Blood',0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `storage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-02 11:42:09
