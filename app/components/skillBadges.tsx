import { Badge } from '@chakra-ui/react'

const langColor = 'green'
const dbColor = 'teal'
const frameWorkColor = 'cyan'
const biColor = 'red'
const wasColor = 'gray'
const libColor = 'orange'

export const skillBadges: Record<string, React.ReactNode> = {
  /** Language */
  JAVA: <Badge colorScheme={langColor}>JAVA</Badge>,

  ASP: <Badge colorScheme={langColor}>ASP</Badge>,

  DOTNET: <Badge colorScheme={langColor}>.net</Badge>,

  Cshap: <Badge colorScheme={langColor}>C#</Badge>,

  PHP: <Badge colorScheme={langColor}>PHP</Badge>,

  HTML: <Badge colorScheme={langColor}>HTML</Badge>,

  CSS: <Badge colorScheme={langColor}>CSS</Badge>,

  JSP: <Badge colorScheme={langColor}>JSP</Badge>,

  JavaScript: <Badge colorScheme={langColor}>JavaScript</Badge>,

  /** Database */
  MYSQL: <Badge colorScheme={dbColor}>MYSQL</Badge>,

  MSSQL: <Badge colorScheme={dbColor}>MSSQL</Badge>,

  CYBASE: <Badge colorScheme={dbColor}>CYBASE</Badge>,

  MariaDB: <Badge colorScheme={dbColor}>MariaDB</Badge>,

  Oracle: <Badge colorScheme={dbColor}>Oracle</Badge>,

  Essbase: <Badge colorScheme={dbColor}>Essbase</Badge>,

  TiberoDB: <Badge colorScheme={dbColor}>TiberoDB</Badge>,

  /** WAS */
  IIS: <Badge colorScheme={wasColor}>IIS</Badge>,

  Tomcat: <Badge colorScheme={wasColor}>Tomcat</Badge>,

  WebLogic: <Badge colorScheme={wasColor}>WebLogic</Badge>,

  UNDERTOW: <Badge colorScheme={wasColor}>UNDERTOW</Badge>,

  /** Framework */
  SPRING: <Badge colorScheme={frameWorkColor}>SPRING</Badge>,

  SPRINGBOOT: <Badge colorScheme={frameWorkColor}>SPRINGBOOT</Badge>,

  GAUS: <Badge colorScheme={frameWorkColor}>GAUS</Badge>,

  DevExpress: <Badge colorScheme={frameWorkColor}>DevExpress</Badge>,

  XPlatform: <Badge colorScheme={frameWorkColor}>XPlatform</Badge>,

  NexaCro: <Badge colorScheme={frameWorkColor}>NexaCro</Badge>,

  MyBuilder: <Badge colorScheme={frameWorkColor}>MyBuilder</Badge>,

  STURTS: <Badge colorScheme={frameWorkColor}>STURTS</Badge>,

  WEBIX: <Badge colorScheme={frameWorkColor}>WEBIX</Badge>,

  React: <Badge colorScheme={frameWorkColor}>React</Badge>,

  /** Cloud */
  AWS: <Badge>AWS</Badge>,
  AZURE: <Badge>AZURE</Badge>,

  /** DI */
  TOS: <Badge colorScheme={biColor}>Talend</Badge>,

  ODI: <Badge colorScheme={biColor}>ODI</Badge>,

  KETTLE: <Badge colorScheme={biColor}>KETTLE</Badge>,

  /** Library */

  JQGrid: <Badge colorScheme={libColor}>JQGrid</Badge>,

  AMChart: <Badge colorScheme={libColor}>AMChart</Badge>,

  LoDash: <Badge colorScheme={libColor}>LoDash</Badge>,
  SockJs: <Badge colorScheme={libColor}>SockJs</Badge>,
  GO: <Badge colorScheme={libColor}>GO</Badge>,
  FileSaver: <Badge colorScheme={libColor}>FileSaver</Badge>,
  DhxGrid: <Badge colorScheme={libColor}>DhxGrid</Badge>,
  JPA: <Badge colorScheme={libColor}>JPA</Badge>,
  MOBX: <Badge colorScheme={libColor}>MOBX</Badge>,
  Mustache: <Badge colorScheme={libColor}>Mustache</Badge>,
  Jquery: <Badge colorScheme={libColor}>Jquery</Badge>,

  /** Etc */
  DynamicCRM: <Badge>DynamicCRM</Badge>,

  GA: <Badge>GoogleAnalytics</Badge>,

  MSA: <Badge>MSA</Badge>,

  Linux: <Badge>Linux</Badge>
}
