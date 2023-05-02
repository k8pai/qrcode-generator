import React from 'react';

export default function Header() {
	return (
		<div className="p-6 max-w-4xl w-full mx-auto flex items-center">
			<h1 className="logo text-2xl font-serif font-extrabold tracking-wide leading-none">
				QRcode
			</h1>
			<div className="flex-grow"></div>
			<ul className="flex items-center space-x-3">
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/projects">projects</a>
			</ul>
		</div>
	);
}
