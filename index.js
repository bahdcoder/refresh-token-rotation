const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { media } = require('@tensei/media')
const { rest } = require('@tensei/rest')
const { tensei, welcome } = require('@tensei/core')

tensei()
    .root(__dirname)
    .plugins([
        welcome(),
        cms().plugin(),
        media().plugin(),
        auth()
            .refreshTokens()
            .plugin(),
        rest().plugin()
    ])
    .register(({ app }) => {
        app.use(require('cors')())
    })
    .start()
    .catch(console.error)
