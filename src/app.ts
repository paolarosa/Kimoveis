import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./errors"
import loginRoutes from "./routes/login.routes"
import usersRoutes from "./routes/users.routes"
import categoryRoutes from "./routes/categories.routes"
import estateRoutes from "./routes/estate.routes"
import schedulesRoutes from "./routes/schedules.routes"


const app: Application = express()
app.use(express.json())

app.use('/login', loginRoutes)
app.use('/users', usersRoutes)
app.use('/categories', categoryRoutes)
app.use('/realEstate', estateRoutes)
app.use('/schedules', schedulesRoutes)

app.use(handleErrors)
export default app