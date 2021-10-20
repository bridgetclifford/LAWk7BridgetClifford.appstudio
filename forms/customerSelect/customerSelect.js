let req = ""
let query = ""
let results = ""
let pw = "Cr8tonbluj!" 
let netID = "brc34170"
let databaseSchema = "brc34170" 

customerSelect.onshow=function(){
  lblCustomer.style.height = "200px"
}

btnCustomer.onclick=function(){
  query = "SELECT * FROM pets"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=brc34170&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           lblCustomer.value = message
        } 

    } else   
        lblMessage.textContent = "Error code: " + req.status
}
