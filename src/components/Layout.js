import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className={`flex flex-col min-h-screen h-full w-full`}>
			<Header />
			<div className={`flex-grow flex justify-center items-center`}>
				{children}
			</div>
			<Footer />
		</div>
	);
}
