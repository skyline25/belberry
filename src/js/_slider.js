import noUiSlider from 'nouislider'

const contributionSlider = document.getElementById('contributionSlider')

noUiSlider.create(contributionSlider, {
    range: {
        min: 0,
        max: 2000000
    },
    start: [243000],
    pips: false,
    connect: [true,false],
    pips: {
      mode: 'positions',
      values: [5,15,25,35,45,55,65,75,85,95],
    },
})

const creditSlider = document.getElementById('creditSlider')

noUiSlider.create(creditSlider, {
    range: {
        min: 0,
        max: 144
    },
    start: [36],
    pips: false,
    connect: [true, false],
    pips: {
      mode: 'positions',
      values: [5,15,25,35,45,55,65,75,85,95],
    },
})