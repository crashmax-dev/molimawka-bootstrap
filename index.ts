enum Radios {
  'flexRadioDefault1' = 'flexRadioDefault1',
  'flexRadioDefault2' = 'flexRadioDefault2'
}

const accounts = document.querySelector('#accounts')!
const radios = [
  document.querySelector(`#${Radios.flexRadioDefault1}`),
  document.querySelector(`#${Radios.flexRadioDefault2}`)
]

radios.forEach((radio) => {
  radio!.addEventListener('change', (event) => {
    const target = event.currentTarget as HTMLInputElement

    switch (target.id) {
      case Radios.flexRadioDefault1:
        accounts.classList.add('visually-hidden')
        break
      case Radios.flexRadioDefault2:
        accounts.classList.remove('visually-hidden')
        break
      default:
    }
  })
})
