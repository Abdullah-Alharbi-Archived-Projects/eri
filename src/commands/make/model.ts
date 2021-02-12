import { Command, flags } from '@oclif/command'
import * as fs from 'fs';
import { join } from 'path';
import get from '../../helpers/get';

export default class Model extends Command {
  static description = 'generate model'

  static examples = [
    `$ eri model MyModel tablename`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),

    path: flags.string({ char: 'p', description: "change generate path" }),
  }

  static args = [
    { name: 'name', description: 'model name', required: true },
    { name: 'table', description: 'table name', required: true },
  ]

  async run() {
    const { args, flags } = this.parse(Model);
    const path = flags.path ? join(process.cwd(), flags.path, `/${args.name}`) : args.name;


    const component = get('model', args);

    fs.writeFileSync(`${path}.js`, component);
    this.log(`✔ Generated ${path}.js`);
  }
}
