export interface CV {
  basics: Basics
  work: Array<Work>
  volunteer: Array<Volunteer>
  educationGroups: Array<EducationGroup>
  awards: Array<Awards>
  certificates: Array<Certificates>
  publications: Array<Publications>
  skills: Array<Skills>
  languages: Array<Languages>
  interests: Array<Interests>
  references: Array<References>
  projects: Array<Projects>
}

interface Basics {
  name: string
  label: string
  image?: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  stageTitle: string
  context: string
  periods: Array<WorkPeriod>
  summary: string
  highlights: Highlight
}

interface WorkPeriod {
  startDate: DateStr
  endDate: DateStr | null
}

type DateStr = `${string}-${string}-${string}`

interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr
  summary: string
  highlights: Highlight
}

interface Skills {
  name: string
  level: string
  keywords: Array<string>
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

interface EducationGroup {
  title: string
  items: Array<EducationItem>
  closingNote: string
}

interface EducationItem {
  title: string
  institution: string
  startDate: DateStr
  endDate: DateStr | null
  description: string
  details: Array<string>
}

interface Languages {
  language: Language
  fluency: string
}

type Language =
  "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

interface Projects {
  name: string
  featured: boolean
  badge?: string
  description: string
  highlights: Highlight
  url: string
  github?: string
}

interface Interests {
  name: string
  keywords: Array<string>
}

interface References {
  name: string
  reference: string
}

type Highlight = Array<String>
