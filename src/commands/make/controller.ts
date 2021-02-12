import { Command, flags } from '@oclif/command'
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import get from '../../helpers/get';

export default class Controller extends Command {
  static description = 'generate controller'

  static examples = [
    `$ eri controller mycontroller`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),

    api: flags.boolean({ char: 'a', description: "append .api in controller name", }),

    resourceful: flags.boolean({ char: 'r', description: "create resourceful controller", }),

    path: flags.string({ char: 'p', description: "change generate path" }),
  }

  static args = [
    { name: 'name', description: 'controller name', required: true },
  ]

  async run() {
    const { args, flags } = this.parse(Controller);
    const api = flags.api ? '.api' : '';

    const component = get(flags.resourceful ? 'controller.resourceful' : 'controller', args);

    fs.writeFileSync(`${args.name}${api}.js`, component);
    this.log(`✔ Generated ${args.name}${api}.js`);
  }
}
