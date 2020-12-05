class Tooltip {
  /**
   * Applique le système de bulle d'infos sur les éléments
   * @param {string} selector 
   */
  static bind (selector) {
    document.querySelectorAll(selector).forEach(element => new Tooltip(element))
  }

  /**
   * @param {HTMLElement} element 
   */
  constructor (element) {
    this.element = element
    let tooltipTarget = this.element.getAttribute('data-tooltip')
    if (tooltipTarget) {
      this.title = document.querySelector(tooltipTarget).innerHTML
    } else {
      this.title = element.getAttribute('title')
    }
    this.tooltip = null
    this.element.addEventListener('mouseover', this.mouseOver.bind(this))
    this.element.addEventListener('mouseout', this.mouseOut.bind(this))
  }

  mouseOver () {
    let tooltip = this.createTooltip()
    let width = tooltip.offsetWidth
    let height = tooltip.offsetHeight
    let left = this.element.offsetWidth / 2 - width / 2 + this.element.getBoundingClientRect().left + document.documentElement.scrollLeft
    let top = this.element.getBoundingClientRect().top - height - 15 + document.documentElement.scrollTop
    if (left < 20) {
      left = 20
    }
    tooltip.style.left = left + "px"
    tooltip.style.top = top + "px"
    tooltip.classList.add('visible')
  }

  mouseOut () {
    if (this.tooltip !== null) {
      this.tooltip.classList.remove('visible')
      this.tooltip.addEventListener('transitionend', () => {
        if (this.tooltip !== null) {
          document.body.removeChild(this.tooltip)
          this.tooltip = null
        }
      })
    }
  }

  /**
   * Crée et injecte la bulle d'info dans l'HTML
   * @returns {HTMLElement}
   */
  createTooltip () {
    if (this.tooltip === null) {
      let tooltip = document.createElement('div')
      tooltip.innerHTML = this.title
      tooltip.classList.add('tippy')
      document.body.appendChild(tooltip)
      this.tooltip = tooltip
    }
    return this.tooltip
  }
}