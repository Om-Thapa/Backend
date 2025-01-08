const autherize=(req,res,next)=>{
    const {user}=req.query;
    if(user==='Om'){
        req.user={ name: 'Om', id: 1 };
        console.log(req.user);
        next();
    } else {
        res.status(401).send("Unautharized");
    }
}

module.exports=autherize;