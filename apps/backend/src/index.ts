import express, {Express, Request, Response} from "express"
import apiRouter from "./api_routes.ts"

const App: Express = express()
const PORT = 8080

App.get("/test", (req: Request, res: Response) => {
    res.status(200).json({"status": "ok"})
})

App.use("/api", apiRouter)

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

export { App }