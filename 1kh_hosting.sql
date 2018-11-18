-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2018 at 08:27 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `1khosting`
--

-- --------------------------------------------------------

--
-- Table structure for table `1kh_hosting`
--

CREATE TABLE `1kh_hosting` (
  `id` int(11) NOT NULL,
  `domain` varchar(150) NOT NULL,
  `ftphost` varchar(150) NOT NULL,
  `ftpuname` varchar(150) NOT NULL,
  `ftppword` varchar(200) NOT NULL,
  `ftpport` int(2) NOT NULL,
  `dblink` varchar(150) NOT NULL,
  `dbname` varchar(150) NOT NULL,
  `dbuser` varchar(150) NOT NULL,
  `dbpword` varchar(150) NOT NULL,
  `dbhost` varchar(10) NOT NULL,
  `email` varchar(150) NOT NULL,
  `userid` int(11) NOT NULL,
  `expires` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `1kh_hosting`
--

INSERT INTO `1kh_hosting` (`id`, `domain`, `ftphost`, `ftpuname`, `ftppword`, `ftpport`, `dblink`, `dbname`, `dbuser`, `dbpword`, `dbhost`, `email`, `userid`, `expires`) VALUES
(1, 'eltonbagne.info', 'ftp.eltonbagne.info', 'eltonbagne', 'eltonbagne', 21, 'database.eltonbagne.info', 'aaaaaaa_eltonbagne', 'aaaaaaa_eltonbagne', '@123', 'localhost', 'eltonbagne@gmail.com', 1, '2018-11-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `1kh_hosting`
--
ALTER TABLE `1kh_hosting`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `1kh_hosting`
--
ALTER TABLE `1kh_hosting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
