USE cis197_spring_2021;

INSERT INTO category VALUES
	("C1","must evac, secure lockdown"),
    ("C2","may evac, secure lockdown"),
    ("C3","no evac, limited lockdown"),
    ("C4","no evac, no lockdown");
    
INSERT INTO unit VALUES
	(1,"hour"),
    (2,"day"),
    (3,"week"),
    (4,"month"),
    (5,"use"),
    (6,"each");
    
INSERT INTO func VALUES
	(1,"Transportation"),
    (2,"Communications"),
    (3,"Engineering"),
    (4,"Search & Rescue"),
    (5,"Education"),
    (6,"Energy"),
    (7,"Firefighting"),
    (8,"Human Services");
    
INSERT INTO user VALUES
	('admin123','password','System Administrator','Admin','admin@email.com',null,null),
	("brotze","brotze1234","System Administrator","Todd Brotze","tbrotze@go.pasadena.edu",null,null),
    ("castaneda","castaneda1234","CIMT User","Eddy Castaneda",null,"81-012-345-6789",null),
    ("thi","thi1234","Resource Provider","Paul Thi",null,null,"1570 E. Colorado Blvd, Pasadena, CA 91106"),
    ('user123','password','CIMT User','CIMT_User',null,'1234567890',null),
    ("su","su1234","CIMT User","Joseph Su",null,"+13235551234",null),
    ("bond","bond1234","CIMT User","James Bond",null,"+44007007007",null),
    ("swift","swift1234","Resource Provider","Taylor Swift",null,null,"131 N. San Gabriel Blvd, Pasadena, CA 91107"),
    ('provider123', 'password','Resource Provider','provider',null,null,'123 Fake Street, Pasadena, CA 91107');
    
INSERT INTO resource VALUES
	(null,"CARE Ambulance Service",8,null,"Ambulance service for emergency & non-emergency services","['Ambulance','Triage Care','Non-emergency transport']",2.1,150,1,"swift"),
	(null, 'police vehicle', 2,null, 'desc', 'haul the bad guys away', 2, 7, 2, 'user123'),
	(null, 'news crew', 2,null, 'desc', 'radio', 3, 8, 3, 'provider123'),
    (null, 'scientist', 3,null, 'desc', 'brain power', 4, 9, 4, 'admin123'),
    (null, 'helicopter', 4,null, 'desc', 'search', 5, 10, 5, 'user123'),
    (null, 'teacher', 5,null, 'desc', 'educate & teach', 6, 11, 1, 'provider123'),
    (null, 'flying car', 6,null, 'desc', 'looking awesome', 7, 12, 2, 'admin123'),
    (null, 'firefighter', 7,null, 'desc', 'water hose', 8, 13, 3, 'user123'),
	(null, 'nurse', 8,null, 'desc', 'kiss boo boo away', 9, 14, 4, 'provider123'),
    (null, 'psychologist', 8,null, 'desc', 'brain scan', 10.2, 15.5, 5, 'admin123'),
    (null, 'counselor', 8,null, 'desc', 'listen to people\'s whining', 11.5, 16.3, 1, 'user123'),
    (null, 'youth worker', 8,null, 'desc', 'work with young people', 12.1, 17.7, 2, 'provider123'),
    (null, 'probation officer', 8,null, 'desc', 'watch the re-offenders', 13.9, 18.95, 3, 'admin123'),
    (null, 'compact car', 2,null, 'desc', 'seats 5 people', .1, 1.25, 4, 'user123'),
    (null, 'public phone mobile', 2,null, 'desc', 'no cellphone, no problem, go retro', .2, 2.99, 5, 'provider123'),
    (null, 'cad cam technician', 3,null, 'desc', 'autocad and solidworks software solutions', 1.5, 100, 1, 'admin123'),
    (null, 'coast guard', 4,null, 'desc', 'rescue people out of dangerous oceans', 300, 5000, 2, 'user123'),
	(null, 'private tutor', 5,null, 'desc', 'tutoring services for those that just don\'t get it', 100.8, 30, 3, 'provider123'),
    (null, 'light saber', 6,null, 'desc', "['force 1', 'force 2', 'force 3', 'force 4', 'force 5']", 3000.9, 99999.99, 4, 'admin123'),
    (null, 'ladder', 7,null, 'desc', "['incredibly long ladder', 'super long ladder']", 56.1, 4215.75, 5, 'user123');
    
INSERT INTO incident VALUES
    ('C1',1,'2021-05-04','May the Fourth be with you','user123'),
    ('C1',2,'2121-02-14','Alien Invasion','provider123'),
    ('C2',1,'1929-10-29','Stock market crash','admin123'),
	('C2',2,'2020-01-01','New year campus streaker','provider123'),
    ('C3',1,'1989-12-31','Riot to celebrate the end of a great decade','admin123'),
    ('C3',2,'2090-06-11','Nuclear fusion meltdown','user123'),
    ('C3',3,'2021-05-09','Villainous secret agent roaming halls','bond'),
    ('C4',1,'2265-12-05','Great Winter apocalypse','provider123'),
    ('C4',2,'2021-05-01','Racoon in CIS building.','brotze'),
    ('C4',3,'1999-12-31','Y2K','user123');

