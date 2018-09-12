/*
 * Description: 数据库配置
 * User: zhaoyiming
 * Date: 2017/9/16
*/

const mysql = require('mysql');

module.exports = (sql, callback) => {
	const db = mysql.createConnection({
        host : '47.99.89.71',
        user : 'root',
        password : '123456',
        database : 'tour'
    });

    db.connect();
    db.query(sql, callback);
	db.end();
};