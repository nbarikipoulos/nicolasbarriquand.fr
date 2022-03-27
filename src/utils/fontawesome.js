import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faCalendarAlt
 } from '@fortawesome/free-regular-svg-icons'


import {
  faBuilding, faTerminal, faFlask, faCubes, faBriefcaseMedical, faIndustry, faTasks,
  faIdBadge, faBriefcase, faCode, faEarthEurope,
  faMapLocationDot, faEnvelope,
  faAngleRight,
  faBug
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithubSquare, faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const _icons = {
  'terminal': faTerminal,
  'prototyping': faFlask,
  'design': faCubes,
  'redesign': faBriefcaseMedical,
  'factory': faIndustry,
  'checklist': faTasks,
  'company': faBuilding,
  'position': faIdBadge,
  'location': faEarthEurope,
  'code': faCode,
  'date': faCalendarAlt,
  'desc': faBriefcase,
  'chevron': faAngleRight,
  'homy': faMapLocationDot,
  'mail': faEnvelope,
  'github': faGithubSquare,
  'linkedin': faLinkedin,
  'bug': faBug
}

library.add(...Object.values(_icons))

const getIcon = (id) => _icons[id]

export { FontAwesomeIcon, getIcon }
