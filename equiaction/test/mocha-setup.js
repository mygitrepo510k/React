const m = require('module');
const originalLoader = m._load;

m._load = function hookedLoader(request, parent, isMain) {
	if (request.match(/.jpeg|.jpg|.png$/)) {
		return { uri: request };
	}
	return originalLoader(request, parent, isMain);
}