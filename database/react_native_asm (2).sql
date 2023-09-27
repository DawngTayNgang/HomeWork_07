-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 27, 2023 lúc 12:09 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `react_native_asm`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uid` text NOT NULL,
  `email` text NOT NULL,
  `pass` text NOT NULL,
  `lastdater` datetime NOT NULL,
  `img_profile` text NOT NULL,
  `story` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `uid`, `email`, `pass`, `lastdater`, `img_profile`, `story`) VALUES
(1, 'test_01', 'testuser01@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(2, 'test_02', 'testuser02@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(3, 'test_03', 'testuser03@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(4, 'test_04', 'testuser04@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(5, 'test_05', 'testuser05@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(6, 'test_06', 'testuser06@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(7, 'test_07', 'testuser07@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(8, 'test_08', 'testuser08@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(9, 'test_09', 'testuser09@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(10, 'test_10', 'testuser10@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(11, 'test_11', 'testuser11@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(12, 'test_12', 'testuser12@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(13, 'test_13', 'testuser13@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(14, 'test_14', 'testuser14@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(15, 'test_15', 'testuser15@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam'),
(16, 'test_16', 'testuser16@gmail.com', '123456789a', '2023-09-27 10:26:28', 'https://via.placeholder.com/150/92c952', 'reprehenderit est deserunt velit ipsam');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
