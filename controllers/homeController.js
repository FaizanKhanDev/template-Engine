const homeController = (req, res) => {
    res.render("index.ejs", { "name": "Faizan Khan" })
}


export { homeController }