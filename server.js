const koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const static = require('koa-static')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')

const paymentRouter = require('./router/index')

const app = new koa()
const port = 3333

app.use(static('./public'))
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyparser())

const router = new Router()
router.use('/', paymentRouter.routes())
app.use(router.routes())

app.use(() => {
  console.log('0')
})

app.listen(port, () => {
  console.log(`localhost:${port}`)
})