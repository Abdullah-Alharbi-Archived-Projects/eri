import {Command, flags} from '@oclif/command'
import * as handlebars from 'handlebars';
import * as fs from 'fs';

export default class Make extends Command {
  static description = 'generate anything'

  static examples = [
    `$ eri make:<topic>`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

//   static args = [{}];

  async run() {
    const {args, flags} = this.parse(Make);
    // const topics = [
    //     'controller'
    // ];
    
    this._help();
  }
}
