customerUpdate.onshow=function(){
    txtAllCust_contents.style.height = "150px"
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
         txtAllCust.value = message
    }
}

btnEnter.onclick=function(){
    let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) {
        allCustomerData = JSON.parse(req.responseText)
        if (allCustomerData.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
            if (req.status ==  200)  // transit worked
                if (req.responseText == 500)  
                    lblMessage5.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage5.textContent = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage5.textContent = `Error: ${req.status}`
        }
    } 
}

