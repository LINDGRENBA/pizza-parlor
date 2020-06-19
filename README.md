# Pizza Parlor

#### It's always the right time for pizza! Order yours today with this Pizza Parlor app - Independent Project for Epicodus, 06.19.2020

## By Brittany Lindgren

## Description

Have you ever found yourself on a Zoom call, and all of your friends and family are ordering pizzas and eating them in front of you? Well now you don't have to be the sad, pizza-less one. Use our Pizza Parlor app today and join in on the pizza eating fun! Click on the link to [see this project in your browser](LINK HERE).

## Setup/Installation Requirements

| Steps | Example |
| -------- | ----- |
|  1. Follow this [link to the project repository](LINK HERE) on GitHub.   |  n/a  |    
|  2. Click on the "Clone or download" button to copy the project link.   |   ![Image of GitHub Clone or download button](img/readme/clone-download-button.PNG)   |   
|  3. If you are comfortable with the command line, you can copy the project link and clone it through your commad line with the command `git clone`. Otherwise, I recommend choosing "**Download ZIP**".   |   ![Download ZIP option on GitHub](img/readme/download-zip.PNG)  |   
|   4. Once the ZIP file has finished downloading, you can right click on the file to view the zip folder in your downloads.   |   ![ZIP folder in downloads](img/readme/zip-folder.PNG)  |   
|  5. Right click on the project ZIP folder that you have just downloaded and choose the option "**Copy To...**", then choose the location where you would like to save this folder.    |   ![Saving ZIP to new location with 'Copy To'](img/readme/copy-to.PNG)  |   
|  6. Navigate to the final location where you have chosen to save the project folder.   |   n/a  |   
|  7. To view the code itself, right click, choose "open with..." and open using a text editor such as VS Code or Atom, etc.   |  n/a   |   

#### Additional Setup/Installation Notes:

* You do not need to run a server to view this document.

* No additional code is necessary to view this project.   

## Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
|  Program will create a new pizza object with size, crust, sauce and cheese properties and empty toppings array  |  n/a  |  pizza{size: small, crust: thick, sauce: marinara, cheese: mozzarella, toppings = [ ]}  |
|  Program will change/update size, crust, sauce and cheese properties based on user selection  |  user selects large, thin crust and vegan cheese  |  pizza{size: large, crust: thin, sauce: marinara, cheese: vegan, toppings = [ ]}  |
|  Program will take in a selection of toppings from user  |  shrimp, olives  |  shrimp, olives  |
|  Program will add toppings to new pizza object  |  shrimp, olives, sausage  |   pizza{size: large, crust: thick, sauce: marinara, cheese: mozzarella, toppings = ["shrimp", "olives", "sausage"]}   |
|  Program will give each added topping a unique id  |  shrimp, sausage  |  shrimp id = 1, sausage id = 2  |
|  Program will delete topping  |  user selects sausage topping and chooses delete icon  |  toppings: shrimp  |
|  Program will give cost of pizza  |  user clicks confirm order  |  $20  |
|  Program will increase pizza cost by $3 if size is large |  size:large  |  $20 + $3  |
|  Program will increase pizza cost by $1 for each topping added |  size: large, toppings.length = 5  |  $23 + $5  |

<!-- |     |     |     |
|     |     |     |
|     |     |     | -->

## Known Bugs

| Location (html/css/js & specific location if known) | Bug | Resolved (Y/N) |  How was the issue resolved?  |
| -------- | ----- | ------ | ------ |
|   |   |   |    |
|   |   |   |    |
|   |   |   |    |
|   |   |   |    |

## Support and contact details

Please feel free to contact me through GitHub (username: LINDGRENBA) with any questions, ideas or concerns.  

## Technologies Used

* HTML5
* CSS3
* Bootstrap v-3.3.7
* JavaScript
* jQuery v-3.5.0
* Visual Studio Code 
* Git and Git BASH 

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Brittany A Lindgren_**