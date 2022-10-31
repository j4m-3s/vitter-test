# Setup

## Installation Guide

1. Setup the Python Environment, I recommend using a Virtual Environment, in this case please use the following commands to create and then enter the venv.

```
python3.9 -m venv myEnvironment
source myEnvironment/bin/activate
```

2. Download the source code and move into the working directory.

```
git clone --branch sample https://github.com/j4m-3s/vitter-test
cd vitter-test
```

3. Install the Python requirements.

```
pip install -r requirements.txt
```

4. Initialize the local SQLite database.

```
python manage.py migrate
```


5. Run the Django Server.

```
python manage.py runserver
```


Navigate to the port you have configured for your Django server.

<img src="https://github.com/j4m-3s/vitter-test/blob/sample/screenshot.png" data-canonical-src="https://github.com/j4m-3s/vitter-test/blob/sample/screenshot.png" width="500" />
