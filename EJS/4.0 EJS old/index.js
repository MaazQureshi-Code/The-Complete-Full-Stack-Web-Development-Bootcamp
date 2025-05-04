import  express from "express"


const app = express();
const port = 3000;

app.listen(port,() =>{
    console.log(`Server running on port : ${port}`)
})

/// res.render will change html files like static 

app.get("/",(req,res) =>{
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday"
    let adv = "It's time to work hard"
    if(day == 0 || day == 6){
        type ="The weekend"
        adv = "It time to have some fun "



    }
    res.render("index.ejs",{
        dayType: type,
        advice: adv
    })
})