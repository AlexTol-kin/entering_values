import styles from './App.module.css';

export const AppLayout = ({
	value,
	error,
	list,
	date,
	onAddButtonClick,
	isValueVaild,
	onInputButtonClick,
}) => {
	return (
		<>
			<div className={styles.messageDiv}>
				<h1>Ввод значения</h1>
				<output className={styles.output}>
					Теккущее значение value : "{value}"
				</output>
				{error && <div className={styles.errorDiv}>{error}</div>}
			</div>

			<button onClick={onInputButtonClick} className={styles.button}>
				Ввести новое
			</button>
			<button disabled={!isValueVaild} onClick={onAddButtonClick}>
				Добавить в список
			</button>

			<div className={styles.field}>
				<h2>Список:</h2>
				{list.length !== 0 ? (
					list.map((elem) => (
						<li className={styles.liField} key={elem.id}>
							{elem.value}
							<p className={styles.dateP}>Дата добавления {elem.date}</p>
						</li>
					))
				) : (
					<div>Нет добавленных элементов</div>
				)}
			</div>
		</>
	);
};
