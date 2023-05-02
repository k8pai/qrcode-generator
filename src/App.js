import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { IconContext } from 'react-icons';
import { HiQrCode } from 'react-icons/hi2';

function App() {
	const [value, setValue] = useState('');
	const [qrcode, setQrcode] = useState('');

	useEffect(() => {
		if (!value) {
			setQrcode('');
		}
	}, [value]);

	const handleChange = (event) => {
		const { value } = event.target;
		setValue(value);
	};

	const generateQrcode = async () => {
		await QRCode.toDataURL(value)
			.then((data) => setQrcode(data))
			.catch((err) => console.error(err));
	};

	return (
		<div className="flex flex-col items-center space-y-5">
			<div className="font-bold text-lg text-slate-700 font-mono">
				qrcode-generator
			</div>
			<div className="flex space-x-2 p-2">
				<input
					type="text"
					value={value}
					onChange={handleChange}
					placeholder={'Enter your url here.'}
					className="px-4 py-3 font-semibold rounded-lg tracking-wide font-sans shadow-lg outline-none border border-slate-700"
				/>
				<button
					onClick={generateQrcode}
					className={`border border-slate-700 transition-all rounded-lg px-3 py-2 text-black shadow-lg tracking-wide font-sans bg-cyan-400/60 hover:bg-cyan-400`}
				>
					<IconContext.Provider
						value={{ size: '2em', className: 'global-class-name' }}
					>
						<HiQrCode />
					</IconContext.Provider>
				</button>
			</div>
			<div className="h-52 w-52">
				{qrcode && (
					<img
						src={qrcode}
						alt={'Alternate Text for qrcode'}
						className={'h-full aspect-square'}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
