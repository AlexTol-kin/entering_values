import { useState } from 'react';
import { AppLayout } from './App-layout';
import styles from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [date, newDate] = useState('');

	const onInputButtonClick = ({ target }) => {
		const promptValue = prompt('Введите значение', '')?.trim();

		if (promptValue?.length < 3 || promptValue === undefined) {
			setValue('');
			setError('Строка должна содержать не менее 3 символов');
			isValueVaild = false;
		} else {
			setValue(promptValue);
			setError('');
			isValueVaild = true;
			newDate(new Date().toLocaleString());
		}
	};

	let isValueVaild = value?.length < 3 ? false : true;

	const onAddButtonClick = ({ target }) => {
		if (value !== '' && value !== undefined) {
			let id = Date.now();
			newDate(new Date().toLocaleString());
			const updatedList = [...list, { id, value, date }];
			setList(updatedList);
		}
	};

	return (
		<div className={styles.app}>
			<AppLayout
				onAddButtonClick={onAddButtonClick}
				value={value}
				list={list}
				error={error}
				date={date}
				isValueVaild={isValueVaild}
				onInputButtonClick={onInputButtonClick}
			/>
		</div>
	);
};
