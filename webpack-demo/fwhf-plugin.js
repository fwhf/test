class fwhfPlugin {
  constructor (options) {
    console.log('fwhfPlugin options', options)
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('Hello fwhfPlugin', (compilation) => {
    	compilation.hooks.unseal.tap('Hello fwhfPlugin',(module) => {
    		console.log(module)
//  		if(/src\\/.test(module._source._name) && /\.js$/.test(module._source._name) ){
//  			console.log(module._source._name);
//  			module._source._value = '/*风舞红枫*/' + module._source._value;
//  		}
    	})
//	  	for (let filename in compilation.assets){
//	  			console.log(filename)
////					compilation.assets[filename].source = function(){
////						return '/*fwhf*/' + compilation.assets[filename].source()
////					}
//	  	}
    });
  }
}

module.exports = fwhfPlugin