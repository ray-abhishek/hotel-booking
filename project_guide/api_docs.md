## User APIs


### Sign Up

POST `/signup`

#### REQUEST

```json
{
	"email": "STRING",
	"name":"STRING",
	"password": "STRING",
}
```

#### RESPONSE

```json
{
    "status": "success",
    "message": "Successfully registered."
}
```

```json
{
    "status": "failure",
    "message": "User Registration Failed. Please try again."
}
```

----

### Login

POST `/login`

#### REQUEST

```json
{
     
	"email": "STRING",
	"password": "STRING"
}
```

#### RESPONSE

```json
{
    "status": "success",
    "message": "Successfully logged in.",
    "Authorization": "<auth_token>"
```

```json
{
    "status": "failure",
    "message": "Failed to login. Invalid credentials."
}
```

----

### Logout

GET `/logout`

#### REQUEST

##### Header
```json
{
    "Authorization": "<auth_token>"
}
```

#### RESPONSE

```json
{
    "status": "success",
    "message": "Token Deactivated"
}
```
----

### Catalog

GET `/search/<location>`

#### REQUEST

```json
{
	"arrivalDate": "STRING",
	"departureDate": "STRING",
    "sleeps": "STRING",
    "perpage" : "STRING",
    "sort" : "STRING",
    "page" : "STRING",
    "feature" : ["FEATURE 1","FEATURE 2"],
    "max_price" : "STRING",
    "min_price" : "STRING"
}
```

#### RESPONSE

```json
{
    "status": "success",
    "data": [
        {
                "image" : ["URL STRING 1","URL STRING 2"],
                "name" : "STRING",
                "location" : "STRING",
                "people" : "STRING",
                "bedrooms" : "STRING",
                "bathrooms" : "STRING",
                "cost_per_night" : "STRING",
                "cost_per_bedroom" : "STRING",
        }
        ],
    "totalresults" : "STRING",
    "totalpages" : "STRING"
}
```

----

### Home-Listing

GET `/home-listing/<hotel-id>`

#### REQUEST

```json
{
	"arrivalDate": "STRING",
	"departureDate": "STRING",
}
```

#### RESPONSE

```json
{
    "status": "success",
    "data": {
        "name": "STRING", 
        "location": "STRING", 
        "capacity": ["Number of people","Number of Bedrooms","Number of Bathrooms"],
        "description": ["TITLE","DESC 1","DESC 2"],
        "rooms": {
            "entrance":
            [
            {"image":"STRING", "type": "STRING"}
            ],
            "outside":
            [
            {"image":"STRING", "type": "STRING"}
            ]
            },
        "features" : {
            "families" : [],
            "sleeps" : [],
            "bathroom" : [],
            "highlights" : [],
            "amenities" : []
            },
        "cost_per_night" : "STRING",
        "cost_per_bedroom" : "STRING"
	}
}

```

-----

### Similar Houses - Component API Call

GET `/get-similar/<hotel-id>`

#### REQUEST

```json
{
	"arrivalDate": "STRING",
	"departureDate": "STRING",
}
```

#### RESPONSE

```json
{
    "status": "success",
    "data" :  [
        {
                "image" : ["URL STRING 1","URL STRING 2"],
                "name" : "STRING",
                "location" : "STRING",
                "people" : "STRING",
                "bedrooms" : "STRING",
                "bathrooms" : "STRING",
                "cost_per_night" : "STRING",
                "cost_per_bedroom" : "STRING",
        }
        ]
```
-----



-----

### Booking Page

GET `/order`

#### REQUEST

```json
{
	"name": "STRING",
	"email": "STRING",
    "message" : "STRING",
    "phone_number" : "STRING",
    "order_amount" : "STRING",
    "order_currency" : "STRING",
    "order_receipt" : "STRING",
    "book_from" : "STRING",
    "book_to" : "STRING",
    "hotel_id" : "STRING"
}
```

#### RESPONSE

```json
{
    "order_id": "STRING",
    "currency": "STRING",
    "amount" : "STRING",
    "name" : "STRING",
    "description" : "STRING",
    "email" : "STRING",
    "contact" : "STRING"
}
```
-----

### Booking Confirmation Page

POST `/home-listing/<hotel-id>/request-booking/confirmed/`

#### REQUEST

```json
{
	"name" : "STRING",
    "email" : "STRING",
    "phone" : "STRING",
    "message" : "STRING"
}
```

#### RESPONSE

```json
{
    "status": "success",
    "message": "Booking has been confirmed"
}

```


-------

