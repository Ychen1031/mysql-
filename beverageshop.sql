-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-12-25 04:02:12
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `beverageshop`
--

-- --------------------------------------------------------

--
-- 資料表結構 `contain`
--

CREATE TABLE `contain` (
  `pId` varchar(10) NOT NULL,
  `oId` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `mId` varchar(10) NOT NULL,
  `name` varchar(10) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`mId`, `name`, `phone`, `email`, `password`) VALUES
('1231', '123', '123', '123132', '23324'),
('yuzhang', 'yy', '0930057193', 'aa@nkust.edu.tw', '123');

-- --------------------------------------------------------

--
-- 資料表結構 `order1`
--

CREATE TABLE `order1` (
  `mId` varchar(10) NOT NULL,
  `oId` varchar(10) NOT NULL,
  `quantity` int(11) NOT NULL,
  `orderTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `pId` varchar(10) NOT NULL,
  `pName` varchar(10) NOT NULL,
  `category` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  `size` enum('小','中','大','特大') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`pId`, `pName`, `category`, `price`, `size`) VALUES
('珍珠奶茶', 'yy', '0909', 102, '中');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `contain`
--
ALTER TABLE `contain`
  ADD UNIQUE KEY `pId` (`pId`),
  ADD UNIQUE KEY `oId` (`oId`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`mId`);

--
-- 資料表索引 `order1`
--
ALTER TABLE `order1`
  ADD PRIMARY KEY (`oId`),
  ADD KEY `mId` (`mId`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pId`);

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `contain`
--
ALTER TABLE `contain`
  ADD CONSTRAINT `contain_ibfk_2` FOREIGN KEY (`oId`) REFERENCES `order1` (`oId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contain_ibfk_3` FOREIGN KEY (`pId`) REFERENCES `product` (`pId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `order1`
--
ALTER TABLE `order1`
  ADD CONSTRAINT `order1_ibfk_1` FOREIGN KEY (`mId`) REFERENCES `member` (`mId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
