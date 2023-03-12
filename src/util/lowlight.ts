import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import tsx from 'highlight.js/lib/languages/typescript'
import go from 'highlight.js/lib/languages/go'
import rust from 'highlight.js/lib/languages/rust'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import haskell from 'highlight.js/lib/languages/haskell'
import kotlin from 'highlight.js/lib/languages/kotlin'
import java from 'highlight.js/lib/languages/java'
import markdown from 'highlight.js/lib/languages/markdown'
import lua from 'highlight.js/lib/languages/lua'
import php from 'highlight.js/lib/languages/php'
import swift from 'highlight.js/lib/languages/swift'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import { lowlight } from 'lowlight'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
lowlight.registerLanguage('tsx', tsx)
lowlight.registerLanguage('bash', tsx)
lowlight.registerLanguage('go', go)
lowlight.registerLanguage('rust', rust)
lowlight.registerLanguage('c', c)
lowlight.registerLanguage('cpp', cpp)
lowlight.registerLanguage('haskell', haskell)
lowlight.registerLanguage('kotlin', kotlin)
lowlight.registerLanguage('java', java)
lowlight.registerLanguage('markdown', markdown)
lowlight.registerLanguage('lua', lua)
lowlight.registerLanguage('php', php)
lowlight.registerLanguage('swift', swift)
lowlight.registerLanguage('xml', xml)
lowlight.registerLanguage('yaml', yaml)

export default lowlight
