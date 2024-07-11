# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


**************************************************
Term 3  Capstone Project 
**************************************************

Term 3 Capstone Project Development Plan

 Project Title: Roland's Computers and Accessories


 Problem Statement
	
	Purchasers of computer devices and accessories of various kind would like a website that allows them to find, 
	research features, technical specifications have access to useful information that will better inform them on 
	what they are looking for and other options they may not know exist. 

	Future Features:
		They would like to find and leave likes/dislikes, comments,  reviews and are able  link to social media to find people and communicate who have, had or used 
		the products and find out what other options are  available that will better inform them on what they are looking for and other options they may not know exist. 


 User Stories
	1. Users should be able to view a list of available computer devices and accessories.
	2. Users should be able to search for specific products by name, category, or specifications.
	3. Users should be able to view detailed features and technical specifications of each product.
	4. Users should be able to compare multiple products side-by-side. Need to expand the functionality and page.
	6. Users should be able to see real-time product availability and stock alerts. Need to expand the functionality
	7. Users should be able to detailed information on compatible accessories and options for each product.
	8. Users should be able to view high-quality images and videos of the products to see their appearance, build quality, and functionality.
	9. Users should be able to view FAQ section so that I can find answers to common questions and concerns without having to contact customer support.

	Future Features:
			 Users should be able to read and write reviews, comments and ratings for each product.
			 Users should be able to access expert reviews and recommendations.
			 Users should be able to share product information and reviews on social media platforms.
			 Users should be able to view high-quality images (add swipe feature for images) and videos of the products to see their appearance, build quality,
				 and functionality.


 Project Architecture and MVP

MVP User Stories:
	1. Users should be able to view a list of available computer devices and accessories.
	2. Users should be able to search for specific products by name, category, or specifications.
	3. Users should be able to view detailed features and technical specifications of each product.
	4. Users should be able to create, edit and delete an order for a product.

	Future Features:
 			5. Users should be able to read and write reviews, comments and ratings for each product.


MVP Scope:
	For the MVP, we will implement the following user story: 
   	As a user, I want to be able to access, research, purchase through a website that can provide real world information to make decisions.


Acceptance Test:
	Given I am a user on the Rolands Computer and Accessories website		When I️  want to I️  should be able to access product information and order the products..			Then I should be able to get, edit, delete the products/accessories orders.


**************************************************
Mockup:

**************************************************
Mockup image 

	  Update. 




Design Solution:

 Pages
	1. Home Page: Lists the latest and greatest computer devices and accessories, highlights featured products, and provides a search bar.
	2. Product Listing Page: Displays a list of products in a selected category with brief details and a link to each product's detailed page.
	3. Product Detail Page: Provides detailed information about the product, including features, specifications, reviews, and comparison options.
	4. Order Management Page: Allows users to create, edit and delete orders for products.
	5. Review Page: Allows users to read and write reviews for products.
	6. Comparison Page: Enables users to compare multiple products side-by-side based on their specifications and features.
	7. Search Results Page: Displays products that match the user's search query with options to filter and sort results.
	8. User Profile Page: Shows user activity, including reviews written and products liked or saved.
	9. Product FAQ Page: Shows user can find answers to common questions and concerns about a product.

 Components
	1. Product Card Component: Displays a brief overview of a product, including image, name, price, and key features.
	2. Search Bar Component: Allows users to input search queries and view results.
	3. Review Form Component: Enables users to submit reviews and ratings for products.
	4. Comparison Table Component: Displays the specifications and features of selected products in a table format for easy comparison.
	5. Stock Alert Component: Allows users to sign up for notifications when a product is back in stock.

 Endpoints
	1. GET /products: Retrieves a list of all products.
	2. GET /products/{id}: Retrieves detailed information about a specific product.
	3. POST /reviews: Submits a new review for a product.
	4. GET /reviews/{productId}: Retrieves all reviews for a specific product.
	5. GET /compare: Retrieves comparison data for selected products.
	6. POST /stock-alerts: Subscribes a user to stock alerts for a specific product.

 Database Models
	1. Product Model:
 	   - id: Integer, Primary Key
 	   - productNBR: String
 	   - name: String
 	   - category: String
	   - price: Number
	   - features: String
	   - specifications: String
 	  - availability: Number
 	  - image_url: String

	2. Order Model:
 	   - id: Integer, Primary Key
 	   - order Number: Number
	 - ordercontentsr:Array
		 - productnbr: String
	   	 - name: String
 	  	 - category: String
		 - price: Number
 		 - item quantity: Number
 		 - image_url: String
	  - couponRate: Number
	  - orderTotal: Number
	  - shippingTime: Number
	  - shippingDate: Number
 	 -timestamps: true

	3. Customer Model:
	   - id: Integer, Primary Key
	   - username: String
	   - email: String
	   - address: String
	   - phone: String
 	   - password: String
 	   - saved items: String

	4. ShippingAddress Model 
 	     - shippingFirstName: String
	     - shippingLastName: String
	     - shippingContactPhoneNumber: String
	     - shippingAddress1: String
	     - shippingAddress2: String
	     - shippingCity: String
	     - shippingState: String
	     - shippingZipCode: String

	Future Feature: 
		A. Review Model:
		     - id: Integer, Primary Key
 		     - product_id: Integer, Foreign Key
 		     - user_id: Integer, Foreign Key
 		     - rating: Integer
 		     - comment: Text
 	 	     - date: DateTime

		B. FAQ Model:
		    - id: Integer, Primary Key
  		    - product_id: Number
 		    - productName: String
 		    - faqInformation: String

		C. StockAlert Model:
		   - id: Integer, Primary Key
  	  	   - product_id: Number
 	   	   - user_id: Number
		   - email: String
 		   -timestamps: true


 Technical Tasks
	1. Set up the project repository - Small
	2. Design database schemas - Medium
	3. Implement backend endpoints - Large
	4. Develop frontend pages and components - Large
	5. Integrate backend with frontend - Large
	6. Implement search functionality - Medium
	7. Test and deploy the application - Large

	Future Feature: 
		A. Develop review and rating system - Medium
		B. Create product comparison feature - Large
		C. Implement stock alert notifications - Medium



Additional information:

Information Architecture

Pages:

	•HeadererPage
	•	Navigation Menu (Home Page, Categories Links, Cart)

	•	FooterPage
	•	Navigation Menu (Address, Social Media, Contact Us, bottom links)

	•	Home Page
	•	Featured Products
	•	New Products
	•	Search Bar
	•	Navigation Menu
	•	Category Selection Container

	•	Category Page
	•	Search Bar
	•	Filter By section
	     	Sorting Options (Popularity, Price, Rating, In Stock, On Sale)
	•	Category Items Selection Container
	•	Compare/Trade In Container

	•	Product Detail Page
	•	Product Images (add additional images feature)
	•	DetailedDetails
	•	Detailed Specifications
	•	Add to Cart Button
	•	Stock Availability
	•	Expert Reviews and Recommendations (future Link/functionality)
	•	User Reviews and Ratings (future Link/functionality)
	•	Social Media Share Buttons (future Link/functionality)
	•	Similar Products/Accessories (future Link/functionality)

	•	SideBar Cart Page
	•	Items in Cart Section Section
	•	Items delete
	•	Item Price
	•	Items Quantity (decrease/increase)
	•	Items Summary (shipping/Cart Total)
	•	Continue/Proceed to Checkout)

	•	User Account Page
	•	Account Information Section
	•	Change PassWord Section
	•	Order History (select by order number link)
	•	Tips for Passwords Section

	•	User Account Orders Page
	•	Account Information Section
	•	Items in Cart Summary
	•	Shipping Information Section
	•	Payment Options
	•	Confirm and Submit Order option

	Future Feature or Updates: 

	Comparison Page
        Selected Products Comparison Table (Specifications, Prices, Reviews)

	FAQ Page
        Common Questions and Answers
        Search Function for FAQ

	Review Submission Page
        Review Form
        Rating System
        Comments System

	Order Management Page (administration)
        Account Edit Page
        Order Edit Page
        Product Edit Page


Wireframes:

Home Page
	⁃	Navigation Bar: Home, Categories, Search, User Account, Cart
	⁃	Search Functionality
	⁃	Categories Section (Laptops, Desktops, Accessories, etc.)
	⁃	Footer Section

	Category Page
	⁃	Search Bar
	⁃	Filter By section
	⁃	Sorting Options (Popularity, Price, Rating, In Stock, On Sale)
	⁃	Category Items Selection Container
	⁃	Compare/Trade In Container

	Product Detail Page
	⁃	Product Images (add additional images feature)
	⁃	DetailedDetails
	⁃	Detailed Specifications
	⁃	Add to Cart Button
	⁃	Stock Availability

	SideBar Cart Page
	⁃	Items in Cart Section Section
	⁃	Items add/delete
	⁃	Item Price
	⁃	Items Quantity (decrease/increase)
	⁃	Items Summary (shipping/Cart Total)
	⁃	Continue/Proceed to Checkout

	User Account Page
	⁃	Account Information Section
	⁃	Change PassWord Section
	⁃	Order History (select by order number link)
	⁃	Tips for Passwords Section

	User Account Orders Page
	⁃	Account Information Section
	⁃	Items in Cart Summary
	⁃	Shipping Information Section
	⁃	Payment Options
	⁃	Confirm and Submit Order option


User Interface Design

Color Scheme:
	•	Primary Colors: Blue, White
	•	Secondary Colors: Gray, Black, Yellow

Typography:
	•	Headings: Sans-serif, Bold
	•	Body Text: Sans-serif, Regular

Icons:
	•	Cart, Search, User, Share, Star Rating, etc.


Functionality

Search Functionality:
	•	Autocomplete Suggestions
	•	Filters by Category, Specifications, Price

  Future Features:   

Review System:
	•	Star Rating
	•	Text Reviews
	•	Like/Dislike
	•	Comments

Social Media Integration:
	•	Share Product Details
	•	Login/Signup via Social Media Accounts
	•	Page for products to allow interactive posts and communication

Comparison Tool:
	•	Select Products for Comparison
	•	View Comparison Table

Order Management:
	•	modify orders
	•	modify products
	•	customers



Technical Architecture

Frontend:

	•	Framework: React.js
	•	Styling: CSS, SASS, BootStrap
	•	State Management: Redux

Backend:

	•	Framework: Node.js, Express.js
	•	Database: MongoDB, Mongoose
	•	Authentication: JWT, OAuth

APIs:

	•	Product Information
	•	User Reviews
	•	Social Media Integration
	•	Order Processing

**************************************************
Capstone Project Development Plan Flow Chart



**************************************************
Capstone Project Reflections:

There were many take aways from this project that now knowing I would have done differently.
I learned the importance of inheritence and global css and standards.  Trying to use css, bootstrap, toastify and 
sass was a real challenge and I did this to learn deeper how each works together or against each other. I figured to be able to reuse the code from Kenzie Cart  Learning was not a short cut to eliminate writing code and make things easier.  It was that to be able to repurpose the code it meant that I really had to understand all of it to be able to make it work for what I wanted it to do.   I also learned how important reusable code is.  In the near future I am going to not only implement features that I wanted to finish but there was not enough time, but I am going to refactor code so that the code snippets and components can be reusable to greatly reduce the reduncdancy of the code and lessen collisions and proliferating problems throughout the code and making it more efficient. Naming standards and better understanding what is needed will allow me to better plan a project.  There were so many things that I learned but also realized as I went along and learned more there were much better ways to do things. I knew the time frame we were working on and at times chose a direct but crude way to get the coding completed knowing that the mvp must be met and as I would go along I would learn more and better be able to go back a refactor code. I knew hitting the mvp was critical and I had been very ambitious in my goals.  We did refactor quite a bit of code but there is still allot that needs to be done. I am very excited and eager to complete the capstone to its fullest.  I have a great knowledge base to work from and it has also showed me where I really need to concentrate to get very proficient and fluent in coding. This is the first step to a very rewarding and exciting career.  I am very grateful to Kenzie and all the crew who went out of their way to help me get to this point. It is just the first of many steps on a path towards being a software engineer.


**************************************************
Capstone Project: future implementations and features: 

Review System:
	•	Star Rating
	•	Text Reviews
	•	Like/Dislike
	•	Comments

Social Media Integration:
	•	Share Product Details
	•	Login/Signup via Social Media Accounts
	•	Page for products to allow interactive posts and communication

Comparison Tool:
	•	Select Products for Comparison
	•	View Comparison Table

Order Management:
	•	modify orders
	•	modify products
	•	customers
    



