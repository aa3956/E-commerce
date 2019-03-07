//Product document design for database
{
    "name" : "Yeezy Boost 350",
    "description" : "Pirate Black, Yeezy Boost 350",
    "keywords" : "yeezy, boost, adidas, black", 
    "size" : 8,
    "available_sizes" : "4 5 6 7 8 9 10",    
    "price" : 150,
    "stock_count" : 100
}

{
    "name" : "Yeezy Boost 350",
    "description" : "Tan, Yeezy Boost 350",
    "keywords" : "yeezy, boost, adidas, tan",    
    "image_url" : "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/2/0/201172_01.jpg",
    "size" : 8,
    "available_sizes" : "4 5 6 7 8 9 10",  
    "price" : 150,
    "stock_count" : 57
}

{
    "name" : "Air Jordan 4 x Levi",
    "description" : "air jordan 4, levi",
    "keywords" : "nike, air jordan 4, levi, denim",    
    "image_url" : "https://www.flightclub.com/air-jordan-4-retro-levis-nrg-denim-denim-sail-game-red-803063",
    "size" : 9,
    "available_sizes" : "4 5 6 7 8 9 10",  
    "price" : 500,
    "stock_count" : 30
}

{
    "name" : "Air Jordan 1 x Off White",
    "description" : "air jordan 1, off white",
    "keywords" : "nike, air jordan 1, off white, red, white, black",    
    "image_url" : "https://www.flightclub.com/the-10-air-jordan-1-white-black-varsity-red-801781",
    "size" : 7.5,
    "available_sizes" : "4 5 6 7 8 9 10",  
    "price" : 1550,
    "stock_count" : 20
}

//Customer document design for database

{
    "firstname" : "Noman",
    "lastname" : "Niazi",
    "gender" : "Male",
    "address" : "10 Example road, Manchester, M5 3ND",
    "telephone" : "07744353352",
    "email" : "noman@gmail.com"
}

//Order document design for database

{
    "customer_id" : ObjectId("5a766122d7dde77536145ea7"),  
    "shipping_address" : "10 Example road, Manchester, M5 3ND",
    "date" : "12/4/18",
    "time" : "09:55",
    "cost" : 300,
    "products" : [
        {
            "id" : ObjectId("5a76645a3d4cb9b8ae564d8f"),
            "count" : 3
        },
        {
            "id": ObjectId("5a76646a3d4cb9b8ae564d90"),
            "count" : 6 
        }    
    ]
}

//Cart document design for database

{
    "customer_id" : ObjectId("5a766122d7dde77536145ea7"),
    "session_id" : "sff33f35g5g53vrvr4gg443g",
    "date" : "12/4/18",
    "time" : "09:55",
    "cost" : 150,
    "products" : [
        {
            "id" : ObjectId("5a76645a3d4cb9b8ae564d8f"),
            "count" : 3
        },
        {
            "id": ObjectId("5a76646a3d4cb9b8ae564d90"),
            "count" : 6 
        }    
    ]
}

//Super User document design for database



