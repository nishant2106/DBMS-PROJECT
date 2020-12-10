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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Donation`
--

LOCK TABLES `Donation` WRITE;
/*!40000 ALTER TABLE `Donation` DISABLE KEYS */;
INSERT INTO `Donation` VALUES (40,287453872434,'Plasma','2020-12-04','200',5),(41,287453872434,'Packed Red Blood Cells','2020-12-11','200',5),(44,433545545454,'Fresh Frozen Plasma','2020-12-03','200',5);
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
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`nishant`@`localhost`*/ /*!50003 TRIGGER `addDonationDate` AFTER INSERT ON `Donation` FOR EACH ROW begin
	update Donor set donationDate=new.d_date where aadhar_no= new.aadhar_no;
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
  `blood_grp` varchar(7) DEFAULT NULL,
  `mob_no` bigint DEFAULT NULL,
  `gender` char(10) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `pinCode` int DEFAULT NULL,
  `isPlasmaDonor` varchar(5) DEFAULT NULL,
  `donationDate` date DEFAULT ((curdate() - interval 6 month)),
  PRIMARY KEY (`aadhar_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Donor`
--

LOCK TABLES `Donor` WRITE;
/*!40000 ALTER TABLE `Donor` DISABLE KEYS */;
INSERT INTO `Donor` VALUES (287453872433,'Nishant Pandey','nishantp1821@gmail.com',' Mumbai Suburban','O_pos',8369247772,'Female','Roon No. 10, Vikram Chawl, Mulgaon Dongari, Andheri (East),Mumbai-400093,Maharashtra,India',400093,'Yes','2020-06-03'),(287453872434,'Dipti Pandey','gpmlearningsystem@gmail.com','Jalna','AB_pos',8369247772,'Female','Roon No. 10, Vikram Chawl, Mulgaon Dongari, Andheri (East),Jalana\n-400093,Maharashtra,India',400093,'Yes','2020-12-11'),(433545545454,'Manorama Patil','riyajoshi@gmail.com','Thane','AB_pos',8576643434,'Female','Roon No. 10, Vikram Chawl, Mulgaon Dongari, Andheri (East),Mumbai-400093,Maharashtra,India',400093,'Yes','2020-12-03');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hospital`
--

LOCK TABLES `Hospital` WRITE;
/*!40000 ALTER TABLE `Hospital` DISABLE KEYS */;
INSERT INTO `Hospital` VALUES (7,'Jeevan Hospital',8776767675,'Mumbai',400093,'Mumbai City'),(8,'City Hospital',9877676767,'Kolhapur',333000,'Kolhapur');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nurse`
--

LOCK TABLES `Nurse` WRITE;
/*!40000 ALTER TABLE `Nurse` DISABLE KEYS */;
INSERT INTO `Nurse` VALUES (5,'Riya Joshi','Female','Mumbai',87734872343,'riyajoshi@gmail.com','2020-01-15'),(6,'Manorama Patil','Female','Mumbai',7878787878,'manoram@gmail.com','2018-02-04');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transfer`
--

LOCK TABLES `Transfer` WRITE;
/*!40000 ALTER TABLE `Transfer` DISABLE KEYS */;
INSERT INTO `Transfer` VALUES (10,7,'2020-12-02','Fresh Frozen Plasma','200','B_pos','PENDING');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaigns`
--

LOCK TABLES `campaigns` WRITE;
/*!40000 ALTER TABLE `campaigns` DISABLE KEYS */;
INSERT INTO `campaigns` VALUES (6,'Bloodrive','Andheri',7346354533,34343,'2020-12-03'),(7,'Donate Please','Pune',4353454353,243,'2020-12-18');
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
INSERT INTO `event` VALUES ('Introductory email','2020-12-05','#7e1010');
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
INSERT INTO `storage` VALUES ('Fresh Frozen Plasma',0,0,0,0,0,0,200,0),('Packed Red Blood Cells',0,0,0,0,0,0,2300,0),('Plasma',0,0,0,0,0,0,800,0),('Platelet Concentrate',0,0,0,0,0,0,400,0),('Whole Blood',0,0,0,0,0,0,187,0);
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

-- Dump completed on 2020-12-09 10:37:55
