import os.path

# Try and import the local config, otherwise use default values
try:
    from is_it_rick.local_config import PRODUCTION, \
        BASE_URL, DATABASE_DIRECTORY, DATABASE_READ_INTERVAL, \
        TESTING_PORT, SESSION_ID_DURATION
except:
    PRODUCTION = True
    BASE_URL = '/'
    DATABASE_DIRECTORY = '/var/www/is_it_rick_data/'
    DATABASE_READ_INTERVAL = 1
    TESTING_PORT = 5000
    SESSION_ID_DURATION = 60 * 60 * 24 * 7 # 1 week (in seconds)

# Compute the database files based on base path
RICK_ROLL_DATABASE_FILE = os.path.join(DATABASE_DIRECTORY, 'rick_rolls.json')
USER_DATABASE_FILE = os.path.join(DATABASE_DIRECTORY, 'users.json')
SESSION_ID_DATABASE_FILE = os.path.join(DATABASE_DIRECTORY, 'session_ids.json')

VERSION = '1.1.0'
SESSION_ID_COOKIE_NAME = 'isItRickSessionId'
RICK_ROLLS_DISPLAYED = 10 # how many rick rolls are displayed on the management page?