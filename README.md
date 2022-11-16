# Binar Rental Car API

REST API ini dikerjakan untuk memenuhi tugas **Challenge 05 FSW BINAR X SYNRGY**.


## Entity Relationship Diagram

![Design ERD on dbdiagram.io](https://firebasestorage.googleapis.com/v0/b/bcr-rental-car.appspot.com/o/databases%2FDesign%20ERD.png?alt=media)

## Setup Project

### 1. Install terlebih dahulu [PostgreSQL](https://www.postgresql.org/download/)

### 2. Install Dependencies

    npm install
    atau
    yarn install

`npm install` dipakai ketika anda menggunakan npm sebagai package default

`yarn install` dipakai ketika anda menggunakan yarn sebagai package default

### 3. Enviroment Variable

Atur terlebih dahulu .env dengan cara merename file bernama .env-example

### 4. Setup Database

Lakukan Migrasi Database dengan command berikut :

    npm run db:setup
    atau
    yarn db:setup

### 5. Jalankan Projectnya

Sekarang tinggal menjalankan projectnya, berikut ini commandnya :

    npm run start:dev
    atau
    yarn start:dev


## Route Endpoints on Binar Rental Car API

### Show All Cars

Mengembalikan array berisi data mobil dari database.

#### *HTTP Request*
> **GET**   
> `/api/cars`

#### *Default Request URL*

    http://localhost:8080/api/cars

#### *Expected Response*
Response Code: `200`  
Response Type: `application/json`

    {
    	"message": "Berhasil Menampilkan Daftar Mobil",
        "data": [
	        {
	            "id": 1,
	            "name": "Toyota Yaris",
	            "category": "small",
	            "price": 800000,
	            "status": "false",
	            "image": "https://firebasestorage.googleapis.com/v0/b/bcr-rental-car.appspot.com/o/uploads%2Fcars%2Fmobil-small-toyota-yaris.png?alt=media",
	            "startRentAt": null,
	            "finishRentAt": null,
	            "createdAt": "2022-11-15T03:18:57.343Z",
	            "updatedAt": "2022-11-15T03:18:57.343Z"
	        }
	    ]
    }
    
-----------------------

### Get Car with ID

Mengembalikan data car berdasarkan dengan ID dari database.

#### *HTTP Request*
> **GET**   
> `/api/cars/:id`

#### *Default Request URL*

    http://localhost:8080/api/cars/:id

#### *Expected Response*
Response Code: `200`  
Response Type: `application/json`   
Response Body:

    {
    	    "message": "Berhasil Menampilkan Detail Mobil",
		    "data": {
		        "id": 1,
		        "name": "Toyota Yaris",
		        "category": "small",
		        "price": 800000,
		        "status": "false",
		        "image": "https://firebasestorage.googleapis.com/v0/b/bcr-rental-car.appspot.com/o/uploads%2Fcars%2Fmobil-small-toyota-yaris.png?alt=media",
		        "startRentAt": null,
		        "finishRentAt": null,
		        "createdAt": "2022-11-15T03:18:57.343Z",
		        "updatedAt": "2022-11-15T03:18:57.343Z"
		    }
    }

-----------------------

### Add New Car

Menambahkan data mobil baru ke database.

#### *HTTP Request*
> **POST**   
> `/api/cars`

#### *Default Request URL*

    http://localhost:8080/api/cars

#### *Expected Request*
Request Type: `multipart/form-data`  
Request Body:

![enter image description here](https://firebasestorage.googleapis.com/v0/b/bcr-rental-car.appspot.com/o/Endpoints%2FAdd%20Car.png?alt=media)

#### *Expected Response*
Response Code: `201`   
Response Type: `application/json`   
Response Body:

    {
	    "message": "Mobil Berhasil Ditambahkan",
	    "data": {
	        "id": 1,
	        "name": "Toyota Yaris",
	        "category": "small",
	        "price": 800000,
	        "status": "false",
	        "image": "https://firebasestorage.googleapis.com/v0/b/bcr-rental-car.appspot.com/o/uploads%2Fcars%2Fmobil-small-toyota-yaris.png?alt=media",
	        "startRentAt": null,
	        "finishRentAt": null,
	        "createdAt": "2022-11-15T03:18:57.343Z",
	        "updatedAt": "2022-11-15T03:18:57.343Z"
	   }
    }
    
-----------------------

### Edit Car Data with ID

Mengedit data car berdasarkan ID nya di database.

#### *HTTP Request*
> **PATCH**   
> `/api/cars/:id`

#### *Default Request URL*

    http://localhost:8080/api/cars/:id

#### *Expected Request*
Request Type: `multipart/form-data`   
Request Body:

![enter image description here](https://firebasestorage.googleapis.com/v0/b/bcr-rental-car.appspot.com/o/Endpoints%2FAdd%20Car.png?alt=media)

#### *Expected Response*
Response Code: `200`    
Response Type: `application/json`   
Response Body:

    {
    	"id": 1,
	    "name": "Toyota",
	    "category": "medium",
	    "price": 450000,
	    "status": "false",
	    "image": "https://firebasestorage.googleapis.com/v0/b/bcr-rental-car.appspot.com/o/uploads%2Fcars%2Fmobil-1668639502724-mobil-medium-toyota-fortuner.png?alt=media",
	    "startRentAt": null,
	    "finishRentAt": null,
	    "createdAt": "2022-11-15T03:18:57.343Z",
	    "updatedAt": "2022-11-16T22:58:22.731Z"
    }

   
-----------------------

### Delete Car with ID

Menghapus data car berdasarkan dengan ID dari database.

#### *HTTP Request*
> **DELETE**   
> `/api/cars/:id`

#### *Default Request URL*

    http://localhost:80880/api/cars/:id

#### *Expected Response*
Response Code: `200`   
Response Type: `application/json`   
Response Body:

    {
        "message": "Berhasil Menghapus Mobil Dengan ID = 3"
    }