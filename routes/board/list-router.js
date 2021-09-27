const path = require('path')
const express = require('express')
const router = express.Router()
const { pool } = require('../../modules/mysql-init')

router.get('/', (req, res, next) => {
	req.app.locals.PAGE = 'LIST'
	const css = 'board/list'
	const js = 'board/js'
	res.status(200).render('board/list', {css, js})
})

module.exports = router