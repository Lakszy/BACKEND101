//*Created type request
return res.status(201).json()
 
//!400 user side error
// while posting we can check that 
if(!body.gender || !body.first_name  || !body.last_name){
    return res.status(400).json({status: "Please enter vlues in all the fields"})
} 

//!401 user side -> unauthorized
//!403 user side -> forbidden

//!404 NOT FOUND
if (! user){
    return res.status(404).json({status:"User Not Found"})
}