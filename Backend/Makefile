install:
	sudo apt-get update
	sudo apt-get install -y python3 python3-pip
	sudo apt install -y libgl1 libglib2.0-0
	git clone https://github.com/aarevalom0/AIris-MachineLearning.git

run:
	cd AIris-MachineLearning/Backend
	pip install -r requirements.txt
	tmux new -s servidor
	uvicorn APIRest:app --host 0.0.0.0 --port 8000 --reload

test:
	python -m pytest -vv test_back.py
clean:
	rm -rf AIris-MachineLearning
	sudo apt-get remove --purge -y python3 python3-pip
	sudo apt-get autoremove -y
	sudo apt-get clean
	sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*