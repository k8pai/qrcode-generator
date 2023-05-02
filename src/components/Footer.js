import React from 'react';
import { FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { SiGithub, SiTwitter, SiDiscord } from 'react-icons/si';

export default function Footer() {
	return (
		<div>
			<div className="max-w-5xl h-fit mx-auto text-pribg dark:text-pritxt p-4 py-6">
				<ul className="flex justify-center items-center space-x-3">
					<a
						className="transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt"
						href={'https://github.com/k8pai/qrcode-generator'}
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<FaCode />
						</IconContext.Provider>
					</a>
					<a
						className="transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt"
						href={'https://github.com/k8pai'}
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<SiGithub />
						</IconContext.Provider>
					</a>
					<a
						className="transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt"
						href={'https://twitter.com/k8pai'}
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<SiTwitter />
						</IconContext.Provider>
					</a>
					<a
						className="transition duration-200 p-2 rounded-md ring-2 ring-transparent hover:ring-pribg hover:dark:ring-pritxt"
						href={'https://discord.com/users/898949804024012850'}
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<SiDiscord />
						</IconContext.Provider>
					</a>
				</ul>
			</div>
		</div>
	);
}
