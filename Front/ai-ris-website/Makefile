install:
	sudo apt install -y npm nodejs
	sudo apt install tmux
run:
	npm install
	npm install react-router-dom
	tmux new -s vitavision
	npm run dev
test:
	npm run test
clean:
	rm -rf node_modules
	sudo apt-get remove --purge -y npm nodejs
	sudo apt-get autoremove -y
	sudo apt-get clean
	sudo rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*