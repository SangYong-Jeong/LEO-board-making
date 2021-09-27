const path = require('path')
const express = require('express')
const router = express.Router()
const { pool } = require('../../modules/mysql-init')

/*
# board 주소체계
- list 					: GET 		|	/board/list, /board/list/<페이지>
- view 					: GET 		|	/board/view/<idx>
- form 					: GET 		|	/board/form(신규 등록), /board/form/<idx>(기존 게시글 수정)
- write					: POST 		|	/board
- update				: POST 		|	/board/<idx>
- delete				: DELETE 	|	/board/<idx>
- file download	: GET 		|	/board/download/<idx>
- comment save	: POST 		|	/board/comment
*/

const listRouter = require('./list-router')
const formRouter = require('./form-router')
const viewRouter = require('./view-router')

router.use('/list', listRouter)
router.use('/form', formRouter)
router.use('/view', viewRouter)

module.exports = router