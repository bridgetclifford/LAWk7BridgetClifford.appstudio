
customerDelete.onshow=function(){
     query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
     if (req.status == 200) { 
        allCustomerData = JSON.parse(req.responseText)  
        console.log(allCustomerData)
    } else {
        lblMessages2 = `Error: ${req.status}`
    }  
}

btnShowCustomer.onclick=function(){
  query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=brc34170&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage1.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtCustomers.value = message
        } 

    } else   
        lblMessage1.textContent = "Error code: " + req.status
}

btnDelete.onclick=function(){
    let customerNameDel = inptDelete.value
    let found = false
    for (i = 0; i < allCustomerData.length; i++) {
        if (customerNameDel == allCustomerData[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage2.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
      if (req.status == 200) 
            if (req.responseText == 500)    
                lblMessage2.textContent = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblMessage2.textContent = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblMessage2.textContent = `Error: ${req.status}`
    } 
}





