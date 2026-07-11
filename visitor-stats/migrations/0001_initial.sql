CREATE TABLE IF NOT EXISTS visitor_map_points (
  country TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  views INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (country, latitude, longitude)
);
