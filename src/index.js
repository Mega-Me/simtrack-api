const express = require('express')
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./db/moongoose')
const simTechRouter = require('./routers/simTech')
const defectDescriptionRouter = require('./routers/defectDescription')
const trainingSessionRouter = require('./routers/trainingSession')
const trainingScheduleRouter = require('./routers/trainingSchedule')
const simSchedulerRouter = require('./routers/simScheduler')
const simAdvisoryNotice = require('./routers/simAdvisoryNotice')
const equipments = require('./routers/equipments')
const pmTasks = require('./routers/pmTasks')
const qtgTasks = require('./routers/qtgTasks')
const assignedTasks = require('./routers/assignedTasks')
const customerDetails = require('./routers/customerDetails')
const systems = require('./routers/systems')

const app = express()
app.use(cors())
const port = process.env.PORT || 9636
// use it before all route definitions
//app.use(cors({origin: '*'}));

app.use(express.json())
app.use(simTechRouter)
app.use(defectDescriptionRouter)
app.use(trainingSessionRouter)
app.use(trainingScheduleRouter)
app.use(simSchedulerRouter)
app.use(simAdvisoryNotice)
app.use(equipments)
app.use(pmTasks)
app.use(qtgTasks)
app.use(assignedTasks)
app.use(customerDetails)
app.use(systems)


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public-flutter')));

module.exports = app;



app.listen(port, () => {
    console.log('Server is up on port '+ port)
})