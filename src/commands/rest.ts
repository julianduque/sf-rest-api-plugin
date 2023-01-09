import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.load('rest-api', 'rest', [
  'summary',
  'description',
  'examples',
  'args.path.summary',
  'flags.targetorg.summary',
  'flags.method.summary',
  'flags.contenttype.summary',
  'flags.payload.summary',
  'flags.apiversion.summary',
]);

export default class Rest extends SfCommand<AnyJson> {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');
  public static examples = messages.getMessages('examples');

  public static args = [
    {
      name: 'path',
      required: true,
      default: '/',
      description: messages.getMessage('args.path.summary'),
    },
  ];

  public static flags = {
    'target-org': Flags.requiredOrg({
      summary: messages.getMessage('flags.targetorg.summary'),
      char: 'o',
    }),
    method: Flags.string({
      summary: messages.getMessage('flags.method.summary'),
      char: 'm',
      default: 'GET',
      options: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    }),
    'content-type': Flags.string({
      summary: messages.getMessage('flags.contenttype.summary'),
      char: 't',
      default: 'application/json',
      options: ['application/json', 'application/xml'],
    }),
    payload: Flags.string({
      summary: messages.getMessage('flags.payload.summary'),
      char: 'p',
    }),
    'api-version': Flags.orgApiVersion({
      summary: messages.getMessage('flags.apiversion.summary'),
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(Rest);

    // Get the Salesforce org and Connection
    const org = flags['target-org'];
    const conn = org.getConnection();

    // Set Api Version if specified
    const apiVersion = flags['api-version'];
    if (apiVersion) {
      conn.setApiVersion(apiVersion);
    }

    // Extract HTTP parameters from flags
    const method = flags.method as 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    const contentType = flags['content-type'];
    const payload = flags.payload;

    // Perform HTTP request to Salesforce API using the Connection object
    const response = await conn.request<AnyJson>({
      method,
      url: args.path as string,
      headers: {
        'content-type': contentType,
      },
      body: payload,
    });
    this.styledJSON(response);
    return response;
  }
}
