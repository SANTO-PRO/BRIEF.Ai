import { useState } from 'react';

const Copier = ({ copiedData }) => {
	const [copied, setCopied] = useState('');

	const handleCopy = (copiedData) => {
		setCopied(copiedData);
		navigator.clipboard.writeText(copiedData);
		setTimeout(() => setCopied(false), 3000);
	};

	return [copied, handleCopy];
};

export { Copier };
