const defaultConfig = {
	"port": 8082,
	"bodyLimit": "10mb",	
	"crawlPath": "C:\\TEST",
	"apiUrl": "http://ambar:8081",
	"allowedFilesRegex": '(\\.doc[a-z]*$)|(\\.xls[a-z]*$)|(\\.txt$)|(\\.pst$)|(\\.csv$)|(\\.htm[a-z]*$)|(\\.ppt[a-z]*$)|(\\.pdf$)|(\\.msg$)|(\\.zip$)|(\\.eml$)|(\\.rtf$)|(\\.md$)|(\\.png$)|(\\.bmp$)|(\\.tif[f]*$)|(\\.jp[e]*g$)',
	"name": "local_crawler",
	"maxFileSize": "30mb"
}

let config = null

const init = () => {	
	config = { ...defaultConfig, ...process.env }

	return config
}

export default (() => {
	return config === null
		? init()
		: config
})()


