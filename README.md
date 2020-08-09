


  
![alt text](https://i.imgur.com/0V7cqLU.png "Landing Page")


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)




## About The Project


We modelled our hotel booking website after onefinestay.com, taking inspiration in terms of design and features, while also adding some extra functionality like Payment Gateways and Google Sign-in. 
 Key Features include:
  - Users can login normally(done via JWT Tokens) or can login through Google Sign-in.
  - Users have a wide array of options via filters using which they can customize the hotels shown to them.
  - Users can see the location of a hotel(done via Google Maps Integration).
  - Users will be recommended Similar Hotels based on Price and Location.
  - Users will be able to know on which Dates a particular hotel is booked/unavailable. 
  - Users will be able to pay for their booking and get confirmation mail for the same.

<br/><br/>

![alt text](https://i.imgur.com/JUXl5SS.png "User's Needs")
<br/>
![alt text](https://i.imgur.com/ZXP8Fv0.png "Solutions I")
![alt text](https://i.imgur.com/pgi9Og7.png "Solutions II")



### Built With
- Frontend
    - [React](https://reactjs.org/)
    - [Redux](https://redux.js.org/)
    - [Bootstrap](https://getbootstrap.com/)
- Backend
    - [Python](https://www.python.org/)
    - [Flask](https://flask.palletsprojects.com/en/1.1.x/)
    - [MySQL](https://www.mysql.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
```sh
npm install npm@latest -g
```
* pip
```sh
sudo apt install python-pip
sudo pip install virtualenv 
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/ray2294/onefinestay.git
```
2. For Frontend, go to src/client and then install NPM packages
```sh
npm install
```

3. For Backend,create virtual environment, go to src/server and then install pip packages from requirements.txt
```
virtualenv venv
pip install -r requirements.txt
```
