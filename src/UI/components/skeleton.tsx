import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton() {
	const Skeleton = () => {
		const SkeletonObj = () => {
			return (
				<div>
					{/*@ts-ignore*/}
					<ContentLoader
						speed={2}
						width={280}
						height={544}
						viewBox='0 0 280 544'
						backgroundColor='#f3f3f3'
						foregroundColor='#ecebeb'>
						<circle cx='140' cy='140' r='140' />
						<rect x='1' y='293' rx='10' ry='10' width='280' height='31' />
						<rect x='-1' y='330' rx='10' ry='10' width='140' height='27' />
						<rect x='140' y='330' rx='10' ry='10' width='140' height='27' />
						<rect x='0' y='360' rx='10' ry='10' width='93' height='27' />
						<rect x='93' y='360' rx='10' ry='10' width='93' height='27' />
						<rect x='186' y='360' rx='10' ry='10' width='93' height='27' />
						<rect x='0' y='411' rx='10' ry='10' width='59' height='27' />
						<rect x='140' y='400' rx='10' ry='10' width='140' height='44' />
					</ContentLoader>
				</div>
			);
		};
		let arr = []
		for (let i = 0; i < 8; i++) {
			// @ts-ignore
			arr.push(<SkeletonObj />);
		}
		return arr;
	};
	return (
		/*@ts-ignore*/
		<Skeleton/>
	);
}

export default Skeleton;