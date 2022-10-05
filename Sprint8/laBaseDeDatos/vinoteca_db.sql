-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vinoteca_db
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categorys` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categorys_UNIQUE` (`categorys`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Joven','2022-08-29 15:59:05'),(2,'Crianza','2022-08-29 15:59:30'),(3,'Reserva','2022-08-29 15:59:41'),(4,'Gran Reserva','2022-08-29 15:59:45');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `category_id` int NOT NULL,
  `price` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_category_idx` (`category_id`),
  CONSTRAINT `category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Vino-Tinto.jpg','Vino Tinto','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.',2,1700,'2022-08-29 16:25:15'),(2,'Vino-Blanco.jpg','Vino Blanco','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.',3,1770,'2022-08-29 16:30:09'),(3,'Vino-Rosado.jpg','Vino Rosado','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.',1,1250,'2022-08-29 16:31:01'),(4,'Vino-Espumeante.jpg','Vino Espumoso','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia, iure eum quam labore quod quas debitis, deserunt, atque sapiente.Sed ea itaque minima commodi saepe odit rem minus possimus quaerat quia.',4,8500,'2022-08-29 16:31:47');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ROMINA','GONZALEZ','ijijij@hotmail.com','$2a$10$5RVehwGVTwxkGNLzBpW4HezexgygU/2w5SNN36JDkV/fFXISBZx.q','userAvatar-1660432565652.jpg','2022-05-11 08:00:00'),(2,'ezequiel','GONZALEZ','romin_s@hotmail.com','$2a$10$HCDEOr1c.jg4gvgwHXVWaewtmeNfYoE.7dcf5.Bwv7y/wGWJGYVLK','userAvatar-1659912277578.jpg','2022-08-29 15:30:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-29 17:11:44
