exports.createblogPost = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.title;

    const result = {
        message: "Create Blog Succes",
        title : title,
        body : body
    
    }
}