require.config({
    'baseUrl': './js',
    'paths': {
        'hello': './hello'
    }
})

define('main', function() {
    require(['hello'], function(hello) {
        console.log(hello.add(1, 2))
    })
})
