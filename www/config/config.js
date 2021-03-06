/**
 * CONFIG FILE, to configure different environment [ DEV / PROD ]
 */
module.exports = (function(){
    switch(process.env.NODE_ENV){
        case 'development' :
            return {
                PORT        : 88,
                DEBUG       : true,
                IO_LOG      : true,
                IO_ORIGINS  : '*:*',
                DB : {
                    PATH    : 'http://localhost/github/leaderboard/db/db.php'
                }
            };
        break;
        case 'production' :
            return {
                PORT        : 88,
                DEBUG       : true,
                IO_LOG      : true,
                IO_ORIGINS  : '*:*',
                DB : {
                    PATH    : 'http://localhost/github/leaderboard/db/db.php'
                }
            };
        break;
        default :
            return {
                PORT        : 88,
                DEBUG       : true,
                IO_LOG      : true,
                IO_ORIGINS  : '*:*',
                DB : {
                    PATH    : 'http://localhost/github/leaderboard/db/db.php'
                }
            };
        break;
    }
})();
