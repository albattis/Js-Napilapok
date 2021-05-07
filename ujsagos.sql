
CREATE DATABASE IF NOT EXISTS `ujsagos` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ujsagos`;



CREATE TABLE `napilapok` (
  `id` int NOT NULL,
  `cim` varchar(14) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `alapitva` int DEFAULT NULL,
  `kiado` varchar(40) DEFAULT NULL,
  `peldany` int DEFAULT NULL,
  `tematika` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `napilapok` (`id`, `cim`, `alapitva`, `kiado`, `peldany`, `tematika`) VALUES
(1, 'Népszava ', 1877, 'XXI. Század Média Kft. ', 20122, 'politika, közélet '),
(2, 'Magyar Nemzet ', 2019, 'Magyar Idők Kiadó Kft. ', NULL, 'politika, közélet '),
(3, 'Magyar Hírlap ', 1968, 'Magyar Hírlap Kiadói Kft. ', 8000, 'politika, közélet '),
(4, 'Blikk ', 1994, 'Ringier Axel Springer Magyarország Kft. ', 80000, 'bulvár '),
(5, 'Bors ', 2007, 'Mediaworks Hungary Zrt. ', 50000, 'bulvár, politika '),
(6, 'Ripost ', 2016, 'Mediaworks Hungary Zrt. ', NULL, 'bulvár, politika '),
(7, 'Nemzeti Sport ', 1903, 'Mediaworks Hungary Zrt. ', 27835, 'sport '),
(8, 'Világgazdaság ', 1969, 'Mediaworks Hungary Zrt. ', NULL, 'gazdaság, politika');


ALTER TABLE `napilapok`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `napilapok`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;
