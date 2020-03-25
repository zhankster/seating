CREATE TABLE `table` (
  `id` varchar(12) NOT NULL,
  `section` varchar(12) DEFAULT NULL,
  `seats` int(11) NOT NULL,
  `max_seats` int(11) NOT NULL,
  `location` varchar(20) DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `active` bit DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `table` (
  `id` varchar(12) NOT NULL,
  `section` varchar(12) DEFAULT NULL,
  `seats` int(11) NOT NULL,
  `max_seats` int(11) NOT NULL,
  `location` varchar(20) DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `current_seating` int(11) DEFAULT 0,
  `active` bit(1) DEFAULT b'1',
  `status_change` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `badge_num` varchar(20) DEFAULT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `dept` varchar(50) DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `manager` int(11) DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `pwd` varchar(256) DEFAULT NULL,
  `start_date` datetime NOT NULL DEFAULT current_timestamp(),
  `active` bit(1) DEFAULT b'1',
  `level` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



