import Express, {Request, Response} from "express"

const App = Express()
const PORT = 8080

App.get("/get-projects", (req: Request, res: Response) => {
    
})

App.get("/test", (req: Request, res: Response) => {
    res.status(200).json({"status": "ok"})
})

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})