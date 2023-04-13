import Icon from './images/github.svg'

const createFooter = (() => {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  const copyright = document.createElement('p')
  copyright.className = 'footer__copyright'
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Abuzar Mamedov`

  const githubIcon = new Image()
  githubIcon.className = 'footer__icon'
  githubIcon.src = Icon
  githubIcon.alt = 'github icon'

  const linkToGithub = document.createElement('a')
  linkToGithub.className = 'footer__link'
  linkToGithub.href = 'https://github.com/DanieleDefoe'
  linkToGithub.rel = 'noreferrer noopener nofollow'

  linkToGithub.append(githubIcon)

  footer.append(copyright, linkToGithub)

  return footer
})()

export default createFooter
