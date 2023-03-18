import StandUpStyles from './StandUp.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
function StandUp({ activity, getActivity }) {
	return (
		<div className={StandUpStyles.main}>
			<h1 className={`${StandUpStyles.text} text text_type_main-large `}>
				{activity.activity}
			</h1>
			<button
				className={`${StandUpStyles.button} text text_type_main-medium mt-20`}
				onClick={getActivity}
			>
				Show the idea!
			</button>
		</div>
	);
}
export default StandUp;
