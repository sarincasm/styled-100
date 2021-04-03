/** @format */

import dynamic from 'next/dynamic'

const featuredComponents = {
	3: dynamic(() => import('../pages/day-3')),
	4: dynamic(() => import('../pages/day-4')),
	6: dynamic(() => import('../pages/day-6')),
	7: dynamic(() => import('../pages/day-7')),
	8: dynamic(() => import('../pages/day-8')),
	9: dynamic(() => import('../pages/day-9')),
	10: dynamic(() => import('../pages/day-10')),
	12: dynamic(() => import('../pages/day-12')),
	13: dynamic(() => import('../pages/day-13')),
	16: dynamic(() => import('../pages/day-16')),
	17: dynamic(() => import('../pages/day-17')),
	19: dynamic(() => import('../pages/day-19')),
	21: dynamic(() => import('../pages/day-21')),
	22: dynamic(() => import('../pages/day-22')),
	23: dynamic(() => import('../pages/day-23')),
	27: dynamic(() => import('../pages/day-27')),
}

const featuredDays = Object.keys(featuredComponents)
const randomIndex = Math.floor(Math.random() * featuredDays.length)
const chosenKey = featuredDays[randomIndex]

const chosenComponent = featuredComponents[chosenKey]

export default chosenComponent
export {chosenKey}
