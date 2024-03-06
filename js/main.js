const chooseColor = document.querySelectorAll('.choose-color__btn')
const contentItem = document.querySelectorAll('.content-item')

chooseColor.forEach(el => {
	el.addEventListener('click', open)
})

function open(evt) {
	const target = evt.currentTarget
	const button = target.dataset.button
	const contentActive = document.querySelectorAll(`.${button}`)
	chooseColor.forEach(item =>
		item.classList.remove('choose-color__btn--active')
	)
	target.classList.add('choose-color__btn--active')

	contentItem.forEach(item => {
		item.classList.remove('content-item--active')
	})
	contentActive.forEach(item => item.classList.add('content-item--active'))
}
