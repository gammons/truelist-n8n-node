import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class TruelistApi implements ICredentialType {
	name = 'truelistApi';
	displayName = 'Truelist API';
	documentationUrl = 'https://apidocs.truelist.io';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
}
