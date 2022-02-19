// import views
import homeView from './views/pages/home'
import fourOFourView from './views/pages/404'
import signinView from './views/pages/signin'
import signupView from './views/pages/signup'
import profileView from './views/pages/profile'
import editProfileView from './views/pages/editProfile'
import aboutView from './views/pages/about'
import contactView from './views/pages/contact'
import engageView from './views/pages/engage'
import careersView from './views/pages/careers'
import atmosphereView from './views/pages/atmosphere'
import references from './views/pages/references'
import windpowerView from './views/pages/windpower'
import solarpowerView from './views/pages/solarpower'
import fossilfuelsView from './views/pages/fossilfuels'
import hydrogenView from './views/pages/hydrogen'
import gameView from './views/pages/game'
import askView from './views/pages/ask'
<<<<<<< HEAD
import nuclearpowerView from './views/pages/nuclearpower'
=======
import chatView from './views/pages/chat'
>>>>>>> chat

// define routes
const routes = {
	'/': homeView,	
	'404' : fourOFourView,
	'/signin': signinView,
	'/signup': signupView,
	'/profile': profileView,
	'/editProfile': editProfileView,
	'/about': aboutView,
	'/contact': contactView,
	'/engage': engageView,
	'/careers': careersView,
	'/atmosphere': atmosphereView,
	'/references': references,
	'/windpower': windpowerView,
	'/solarpower': solarpowerView,
	'/fossilfuels': fossilfuelsView,
	'/hydrogen': hydrogenView,
	'/game': gameView,
	'/ask': askView,
<<<<<<< HEAD
	'/nuclear' : nuclearpowerView,
=======
	'/chat': chatView
>>>>>>> chat
}

class Router {
	constructor(){
		this.routes = routes
	}
	
	init(){
		// initial call
		this.route(window.location.pathname)

		// on back/forward
		window.addEventListener('popstate', () => {
			this.route(window.location.pathname)
		})
	}
	
	route(fullPathname){
		// extract path without params
		const pathname = fullPathname.split('?')[0]
		const route = this.routes[pathname]
		
		if(route){
			// if route exists, run init() of the view
			this.routes[window.location.pathname].init()
		}else{			
			// show 404 view instead
			this.routes['404'].init()			
		}
	}

	gotoRoute(pathname){
		window.history.pushState({}, pathname, window.location.origin + pathname);
		this.route(pathname)
	}	
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter


// programmatically load any route
export function gotoRoute(pathname){
	AppRouter.gotoRoute(pathname)
}


// allows anchor <a> links to load routes
export function anchorRoute(e){
	e.preventDefault()	
	const pathname = e.target.closest('a').pathname
	AppRouter.gotoRoute(pathname)
}
