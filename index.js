const express=require("express");
const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port= 8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Server is working properly!!");
})

let posts=[
    {
        id:"1a",
        username:"apna college",
        content:"well growing people are here",
    },
    {
        id:"2b",
        username:"Monika",
        content:"I love coding",
    },
    {
        id:"3c",
        username:"Gourav",
        content:"Just apise udaooo",
    }
]


app.get("/posts",(req,res)=>{
 res.render("index.ejs",{posts});

})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id === p.id);
    res.render("show.ejs",{post});
    
})

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})

