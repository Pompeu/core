const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

const Blocks = require('./blocks')
const Delegates = require('./delegates')
const Node = require('./node')
const Peers = require('./peers')
const Statistics = require('./statistics')
const Transactions = require('./transactions')
const Votes = require('./votes')
const Wallets = require('./wallets')
const Webhooks = require('./webhooks')

const mock = new MockAdapter(axios)

Blocks(mock)
Delegates(mock)
Node(mock)
Peers(mock)
Statistics(mock)
Transactions(mock)
Votes(mock)
Wallets(mock)
Webhooks(mock)
