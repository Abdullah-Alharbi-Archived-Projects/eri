import {Command, flags} from '@oclif/command'
import * as handlebars from 'handlebars';
import * as fs from 'fs';

export default class Controller extends Command {
  static description = 'generate controller'

  static examples = [
    `$ eri controller mycontroller`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // name: flags.string({char: 'n', description: 'controller name', required: true}),
    resourceful: flags.boolean({ char: 'r', description: "create resourceful controller", }),
    path: flags.string({ char: 'p', description: "change generate path" })
  }

  static args = [{name: 'name', description: 'controller name', required: true}]

  async run() {
    const {args, flags} = this.parse(Controller);
    let componentPath = './src/components/controllers';

    if (flags.resourceful) {
      componentPath += '/controller.resourceful.hbs';
    } else {
      componentPath += '/controller.def.hbs';
    }

    const component = fs.readFileSync(componentPath, 'utf-8');
    const compiledComponent = handlebars.compile(component)({ name: args.name });

    fs.writeFileSync(`${args.name}.js`, compiledComponent);
    this.log(`✔ Generated ${args.name}.js`);
  }
}
