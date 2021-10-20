/*
btnShowCust.onclick=function(){
  query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=brc34170&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage3.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtCust.value = message
        } 

    } else   
        lblMessage3.textContent = "Error code: " + req.status
}

btnSubmit.onclick=function(){
    let name = inptName.value
    let street = inptStreet.value
    let city = inptCity.value
    let state = inptState.value
    let zipcode = inptZipcode.calue
    let query = "INSERT INTO pets (`name`,`street`, `city`, `state`, `zipcode`) VALUES ('" + name + "', '" + street + "','" + street + "','" + city + "', '" + state + "','" + zipcode + "')"
    
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage3.textContent = "You have successfully added a customer!"
        else
            lblMessage3.textContent = "There was a problem with adding the customer to the database."
    } else 
        lblMessage3.textContent = "Error: " + req.status
}

*/