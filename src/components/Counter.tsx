import './Counter.css'

import { createSignal } from 'solid-js'

export default function Counter(props: any) {
	const [weight, setWeight] = createSignal(400)

	return (
		<>
			<div class="counter">
				<input
					type="range"
					min="100"
					max="900"
					value={weight()}
					onInput={(e) => setWeight(parseInt(e.target.value))}
				/>
			</div>
			<div
				class="counter-message"
				style={{
					'font-weight': weight(),
					'font-optical-sizing': 'none',
					'font-style': 'normal',
				}}
			>
				{props.children}
			</div>
		</>
	)
}
