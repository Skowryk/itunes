import { rest } from 'msw'
import { entries } from './itunes'

export const handlers = [
  rest.get(
    'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          feed: {
            entry: entries
          }
        })
      )
  )
]
