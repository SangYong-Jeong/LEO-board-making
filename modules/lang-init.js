module.exports = _lang => {
	lang = _lang.toUpperCase()
	switch(lang) {
		case 'KO':
			return {
				ERROR: {
					NOT_FOUND 		: '존재하지 않는 데이터 입니다.',
				},
				GLOBAL: {
					LOGO					: 'LEO의 게시판',
					TAB_TITLE			: 'LEO 게시판',
					NAVI					: ['게시글 등록', '게시글 리스트']
				},
				LIST: {
					TITLE 				: '게시글 목록',
					DESC 					: '등록된 게시글들의 리스트 입니다.',
				},
				VIEW: {
					TITLE 				: '게시글 상세 정보',
					DESC 					: '선택하신 게시글의 상세 정보 입니다.',
				},
				CREATE: {
					TITLE 				: '게시글 등록',
					DESC 					: '등록할 게시글을 아래에서 입력하세요.',
				},
				UPDATE: {
					TITLE 				: '게시글 수정',
					DESC 					: '수정할 게시글 내용을 아래에서 변경하세요.',
				},
				FIELD : {
					NO						: '번호',
					TITLE					: '제목',
					WRITER				: '작성자',
					CONTENT				: '내용',
					UPFILE				: '첨부파일',
					DATE					: '작성일',
					VIEWCOUNT			: '조휘수',
				},
				BT: {
					UPDATE				: '수정',
					DELETE				: '삭제',
					CREATE				: '등록',
					LIST					: '리스트',
					RESET					: '다시 등록',
				},
				MSG: {
					DELETE				: '정말로 삭제하시겠습니까?'
				},
				LANGUAGE: {
					KR						: '한국어',
					EN						: '영어',
				}
			}
		case 'EN': 
			return {
				ERROR: {
					NOT_FOUND 		: 'Data Not Found',
				},
				GLOBAL: {
					LOGO					: 'LEO\'s bulletin board',
					TAB_TITLE			: 'LEO Board',
					NAVI: 				['Post registration', 'Post list']
				},
				LIST: {
					TITLE 				: 'Post List',
					DESC 					: 'This is a list of registered posts.',
				},
				VIEW: {
					TITLE 				: 'Post details',
					DESC 					: 'Detailed information of the selected post.',
				},
				CREATE: {
					TITLE 				: 'Post registration',
					DESC 					: 'Please enter the post you wish to register below.',
				},
				UPDATE: {
					TITLE 				: 'Edit post',
					DESC 					: 'Change the content of the post to be edited below.',
				},
				FIELD : {
					NO						: 'No',
					TITLE					: 'Title',
					WRITER				: 'Writer',
					CONTENT				: 'Content',
					UPFILE				: 'Attachment File',
					DATE					: 'Date',
					VIEWCOUNT			: 'View Count'
				},
				BT: {
					UPDATE				: 'UPDATE',
					DELETE				: 'DELETE',
					CREATE				: 'CREATE',
					LIST					: 'LIST',
					RESET					: 'RESET',
				},
				MSG: {
					DELETE				: 'Are you sure you want to delete it?'
				},
				LANGUAGE: {
					KR						: 'KR',
					EN						: 'EN',
				}
			}
	}
}