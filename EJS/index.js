import express from 'express'

const app=express();
const port = 3000
app.listen(port,()=>{
    console.log("Its Listening")
})
app.get('/',(req,res)=>{
    const d = new Date();
    let day = d.getDay();
    if(day==1 || day==6){
        res.render('index.ejs', {
            day : " Weekday",
            thing : "Work"
        });
    }else{
        res.render('index.ejs', {
            day : " Weekend",
            thing : "Enjoy"
        });
    }

    
})