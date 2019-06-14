import Choices from 'choices.js'

const selectArr = [...document.querySelectorAll('.calc__select')]
const selectItem = []

selectArr.forEach((select, i) => {
  selectItem[i] = new Choices(select, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: '',
  })
})