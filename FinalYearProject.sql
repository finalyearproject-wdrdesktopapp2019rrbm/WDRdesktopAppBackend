-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 04, 2019 at 08:09 AM
-- Server version: 5.7.25-0ubuntu0.18.10.2
-- PHP Version: 7.2.15-0ubuntu0.18.10.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `FinalYearProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(18) NOT NULL,
  `when_added` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `username`, `email`, `password`, `when_added`) VALUES
(1, 'Michael', 'michael', 'michael@gmail.com', 'michael', '2019-04-04 08:22:30'),
(2, 'Richard', 'richard', 'richard@gmail.com', 'richard', '2019-04-04 08:23:00'),
(3, 'Ronnald', 'ronnie', 'ronnie@gmail.com', 'ronnie', '2019-04-04 08:23:27'),
(4, 'brian', 'Brian', 'brian@gmail.com', 'brian', '2019-04-04 08:23:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
