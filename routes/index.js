const aboutRoutes = require('./aboutRouter')
const indexRouter = require('./indexRouter')
const _404Router = require('./_404Router')
const contactRouter = require('./contactRouter')
const joblistRoutes = require('./joblistRoutes')
const jobdetailRouter = require('./jobdetailRouter')
const testimonialRouter = require('./testimonialRouter')
const categoryRouter = require('./categoryRouter')
const employeeRoutes = require('./employeeRouter')
const whetherRouter = require('./whetherRouter')
const majorsRoutes = require('./majorRoutes')
const staffRouter = require('./staffRouter')
const jobsRouter = require('./jobsRouter')
const timeLineRoutes = require('./timeLineRouter')
const userRouter = require('./userRouter')

function route(app) {

    app.use('/api/v1/users', userRouter)

    app.use('/api/v1/whether', whetherRouter)

    app.use('/api/v1/employees', employeeRoutes)

    app.use('/api/v1/timeLineJob', timeLineRoutes)

    app.use('/api/v1/majors', majorsRoutes)

    app.use('/api/v1/staffs', staffRouter)

    app.use('/api/v1/jobs', jobsRouter)

    app.use('/index', indexRouter)

    app.use('/about', aboutRoutes)

    app.use('/category', categoryRouter)

    app.use('/404', _404Router)

    app.use('/contact', contactRouter)

    app.use('/job-list', joblistRoutes)

    app.use('/job-detail', jobdetailRouter)

    app.use('/testimonial', testimonialRouter)

}
module.exports = route;