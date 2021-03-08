document.write('hello,world')
var str = '阿不都萨拉木海米提'
var str1 = ''
for (let index = 0; index < str.length; index++) {
    if((str.charAt(index)).charCodeAt() === 8226) {
        console.log(index)
        str1 = str.slice(0, index) + '·' + str.slice(index + 1, str.length)
    } else {
        str1 = str
    }
}
console.log(str1)