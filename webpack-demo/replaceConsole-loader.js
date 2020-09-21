module.exports = function (source) {
	if (source) {
		source = source.replace(/console.log\([^\(\)]+\)/g,'')
	}
	return source;
}