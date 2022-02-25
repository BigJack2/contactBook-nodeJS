# contactBook-nodeJS
<strong>Routes of contacts</strong>
<strong>Register contact: </strong> http://localhost:3001/api/contact/registerContact
Example Body Json:
{
    "name": "Pepito4",
    "landline" : "25567655",
    "cellPhone": "31567577555"
}


<strong>List contact by name: </strong> http://localhost:3001/api/contact/listContact/Pepito

<strong>List all contact : </strong> http://localhost:3001/api/contact/listContact

<strong>Existing contact</strong>http://localhost:3001/api/contact/existingContact
Example Body Json:
{
    "name": "Pepito23"
}

<strong>Delete contact by name:</strong> http://localhost:3001/api/contact/deleteContact/Pepito
