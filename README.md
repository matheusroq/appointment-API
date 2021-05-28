# appointment-API
This API was created for a appointment system (like a doctor's appointment). It's purpose is to store information about the appointment and also the user.  

## Endpoints

### Get /appointments
Returns all the appointments stored.  
Ex:
 ```
    [
    {
        "id": 23,
        "name": "name1",
        "date": "21/05/2021",
        "hour": "14:00"
    },
    {
        "id": 24,
        "name": "name1",
        "date": "21/05/2021",
        "hour": "14:00"
    },
    {
        "id": 25,
        "name": "name1",
        "date": "21/05/2021",
        "hour": "14:00"
    }
]
 ```


### Get /appointment/:id
#### Parameters
The appointment's a
id.   
Returns the respective appointment stored based on the pass id.  
Ex:
 ```
    {
        "id": 23,
        "name": "name1",
        "date": "21/05/2021",
        "hour": "14:00"
    }  
    

 ```

### Post /appointment
Stores the appointmente.
#### Paramters:
In the body of the requeste, it must be informed the name, date and hour.
It's return the information about the stored appointment:
 ```
    {
        "id": 23,
        "name": "name1",
        "date": "21/05/2021",
        "hour": "14:00"
    }  
 ```

### Put appointment/:id
#### Parameters
The appointment's a
id.   

Returns the information about the updated appointment.

### Delete  appointment/:id
#### Parameters
The appointment's a
id.   
Returns a message of success.
```
        {
            message: "Appointment was deleted"
        }

```
