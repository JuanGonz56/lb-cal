// cribbed from https://www.captaincodeman.com/lazy-loading-firebase-with-sveltekit
import { invalidateAll } from '$app/navigation';
import { readable } from 'svelte/store';
import { browser } from '$app/environment';

function createAuth() {
	let auth;

	const { subscribe } = readable(undefined, (set) => {
		let unsubscribe = () => {};

		async function init() {
			if (browser) {
				const { firebaseClientApp } = await import('$lib/firebase-client');
				const { getAuth, onAuthStateChanged } = await import('firebase/auth');

				auth = getAuth(firebaseClientApp);

				// calls set with the "auth" when state changes => updates the readable store
				unsubscribe = onAuthStateChanged(auth, set);
			} else {
// 				const { firebaseServerApp, serverAuth } = await import('$lib/firebase-server');
// console.log({firebaseServerApp});
// 				serverAuth()
// 					.currentUser.getIdToken(/* forceRefresh */ true)
// 					.then((idToken) =>
// 						fetch('/api/sessionLogin', {
// 							body: JSON.stringify({ idToken }),
// 							method: 'POST',
// 							'content-type': 'application/json'
// 						})
// 					);
			}
		}

		init();

		return unsubscribe;
	});

	async function sign_in() {
		const { signInWithPopup, GoogleAuthProvider } = await import('firebase/auth');
		//console.log('sign_in');
		await signInWithPopup(auth, new GoogleAuthProvider());

		const csrfToken = '?'; //cookies.get('csrfToken')

		const idToken = await auth.currentUser.getIdToken();
		// console.log({
		// 	currentUser: auth.currentUser,
		// 	idToken,
		// 	csrfToken,
		// });

		// exchange idToken for session cookie
		await fetch('/api/sessionLogin', {
			body: JSON.stringify({ idToken, csrfToken }),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		auth.currentUser.getIdToken(true);
		invalidateAll();
	}

	async function sign_out() {
		const { signOut } = await import('firebase/auth');
		// console.log('sign_out');
		await signOut(auth);

		const csrfToken = '?'; //cookies.get('csrfToken')

		await fetch('/api/sessionLogout', {
			body: JSON.stringify({ csrfToken }),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		invalidateAll();
	}

	return {
		subscribe,
		sign_in,
		sign_out
	};
}

export const auth = createAuth();
