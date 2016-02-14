import throwError from './throwError'

class Logger {
  log(msg) {
    console.log('[webpack-node]', msg)
  }
}

const logger = new Logger()
logger.log('hi, from webpack\'d node')
logger.log('I\'m gonna throw an error in 3 seconds...')
setTimeout(() => logger.log('3...'), 1000)
setTimeout(() => logger.log('2...'), 2000)
setTimeout(() => logger.log('wait, like, right on 3 or like, after 3?'), 3000)
setTimeout(() => throwError(), 4000)

