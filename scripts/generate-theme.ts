import { join } from 'path'
import { Theme } from '../src/themes/Theme'
import * as defaultSettings from '../src/defaultConfig.json'
import * as flatConfig from '../src/flatConfig.json'
import * as darkerConfig from '../src/darkerConfig.json'
import * as retroConfig from '../src/retroConfig.json'
import * as gnomeConfig from '../src/gnomeConfig.json'
import { promises as fs } from 'fs'

export function writeFile(path: string, data: unknown): Promise<void> {
  return fs.writeFile(path, JSON.stringify(data, null, 2))
}

async function main() {
  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro.json'),
    await Theme.init(defaultSettings)
  )

  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro-flat.json'),
    await Theme.init(flatConfig)
  )

  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro-darker.json'),
    await Theme.init(darkerConfig)
  )

  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro-retro.json'),
    await Theme.init(retroConfig)
  )

  writeFile(
    join(__dirname, '..', 'themes', 'OneDark-Pro-gnome.json'),
    await Theme.init(gnomeConfig)
  )
}
main()
